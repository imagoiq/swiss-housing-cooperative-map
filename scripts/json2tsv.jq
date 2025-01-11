# https://github.com/jqlang/jq/wiki/FAQ
# Given an array of JSON objects, 
# produce "TSV" rows, with a header row.
# Handle terminal arrays specially if they are flat.

# emit a stream
def json2headers:
  def isscalar: type | . != "array" and . != "object";
  def isflat: all(.[]; isscalar);
  paths as $p
  | getpath($p)
  | if type == "array" and isflat then $p
     elif isscalar and (($p[-1]|type) == "string") then $p
     else empty end ;

def json2array($header):
   [$header[] as $p | (try getpath($p) catch null)] ;

def json2tsv:
  ( [.[] | json2headers] | unique) as $h
  | ([$h[]|join("_") ],
     (.[]
      | json2array($h)
      | map( if type == "array" then map(tostring)|join("|") else tostring end)))
  | @tsv ;