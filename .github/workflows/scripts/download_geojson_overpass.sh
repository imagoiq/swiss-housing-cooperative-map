curl -sSd "$(<$1)" -X POST $overpass_server/api/interpreter \
| osmtogeojson > $2