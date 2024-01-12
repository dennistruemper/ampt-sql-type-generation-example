<p align="center">
    <div width="100%" align="center">
        <h1>Ampt SQL Type Generation Example</h1>
    </div>
</p>

## Welcome to Ampt with SQL!

To run this app locally, simply clone down this repository and run `ampt`. You may need to login to the Ampt CLI if you haven't already (you can install this by running `npm install -g @ampt/cli`). To start the local development server, run `ampt dev` or `dev` in the Ampt shell.

Happy coding!

## Steps done to create this

1. Initial Project setup
   - using typesript starter
   - create this File
2. Install dependencies
   - `npm install --save-exact @ampt/sql kysely`
   - `npm install --save-exact --save-dev kysely-codegen pg @ampt/cli`
3. Add first migration
   - create file migrations/0001_create-todos-table.js with content
   - add migrate ampt scripts in package.json
4. Use SQL in ampt index file
   - by using sql ampt will spin up a SQL database (index.ts)
   - this will get you an error message in the ampt cli: `'column "doscription" of relation "todos" does not exist'`
