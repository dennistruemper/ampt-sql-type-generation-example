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
   - `npm install --save-exact --save-dev kysely-codegen pg @ampt/cli @ampt/sdk`
3. Add first migration
   - create file migrations/0001_create-todos-table.js with content
   - add migrate ampt scripts in package.json
4. Use SQL in ampt index file
   - by using sql ampt will spin up a SQL database (index.ts)
   - run `run migrate` inside ampt cli
   - this will get you an error message in the ampt cli: `'column "doscription" of relation "todos" does not exist'`
5. Fix the Error
   - Rename doscription to description in index.ts
   - if closed start the ampt cli again `npm start`
   - check in the ampt web console that the table was created in your sandbox
6. Create type missmatch
   - Add a new column done of type bool without not null constraint (create file migrations/0002_expand-todos-table-with-done.js)
   - Extend types in index.ts
   - run `run migrate` inside ampt cli again
7. Hello "Cannot read properties of null" :/
   - So you remember, we created some todos without done in the beginning
   - now we will read all todos and to something with done in a typesscript allowed way (see index.ts)
   - now we will get an "Failed to load application" error in the ampt CLI, if we try to start.
8. Finally generating the types
   - add `kysely.env` to your .gitignore
   - add a shell script to automate the steps `scripts/generateDbTypes.sh`
   - make `generateDbTypes.sh` executable with `chmod +x scripts/generateDbTypes.sh`
   - add a javascript file to get the connection string and create kysely.env
   - add an entry to package.json to generate
   - typ by runing `npx ampt run generate`
   - have a look at `src/sql/dbTypes.d.ts`
9. Using generated types
   - have a look at `index.ts` again
