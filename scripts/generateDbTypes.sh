
# current directory
directory=$(dirname "$0")

node $directory/generateKyselyEnvFile.js

npx kysely-codegen --env-file kysely.env --out-file src/sql/dbTypes.d.ts --dialect postgres
