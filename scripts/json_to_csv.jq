.[] | [paths(scalars) as $path | {"key": $path | join("."), "value": getpath($path)}] | from_entries
| (map(keys) | add | unique) as $cols | map(. as $row | $cols | map($row[.]) | string) as $rows | $cols, $rows[] | @csv
