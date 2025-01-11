# TODO: Refactor for better performance. Nominatim allow only a request every 1s. jq is not used efficiently.

jq -c '.features[]' $1  | \
while read feature; do
  city="$(echo $feature | jq  '.properties."addr:city"')"
  postcode="$(echo $feature | jq '.properties."addr:postcode"')"

  if [ "$city" = null ] || [ "$postcode" = null ]; then
      feature_id=$(echo $feature | jq '.id')
      lon=$(echo $feature | jq '.geometry.coordinates[0][0][0]')
      lat=$(echo $feature | jq '.geometry.coordinates[0][0][1]')

      n_addr=$(curl -sS "https://nominatim.openstreetmap.org/reverse?lat=$lat&lon=$lon&format=json" | jq '.address')
      n_addr_city=$(echo $n_addr | jq -r '.town')
      n_addr_postcode=$(echo $n_addr | jq -r '.postcode')

      # Add properties directly in input file
      jq --arg feature_id "$feature_id" --arg addr_city "$n_addr_city" --arg addr_postcode "$n_addr_postcode" '.features |= map(if .id==$feature_id then .properties."addr:city"=$addr_city else . end) | .features |= map(if .id==$feature_id then .properties."addr:postcode"=$addr_postcode else . end)' ./data/swiss_housing_cooperative_buildings.geojson > tmp.geojson
      sleep 1; # Avoid rate-limiting of nominatim
  fi
done

mv -f tmp.geojson $1