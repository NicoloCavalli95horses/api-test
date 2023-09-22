# Node.js application with Vue.js as frontend

The application is deployed using Render.com https://render.com/

Local preview of the current application in production:
- start the Node.js web server with 'npm start'
- the page will be available at localhost:5500

Local preview of development application:
- from /front-end, execute 'npm run dev'

## Vue.js integration
The UI is handled by Vue.js but of course Node.js has no clue about how to interact with the framework (and does not have to). Node.js's router allows the user to access the 'index.html' file at the path '/' (root). From this point, is Vue.js responsability to take care of the UI. So every route is intercepted by Vue.js first.

## Update the UI and deploy
To update the UI, work in the /front-end folder, then execute a 'npm run build' to minify the JavaScript code, then move the content of the /dist folder inside the /public folder at the root level.

Once 'git push' is done, the application will be automatically updated at https://api-test-18fk.onrender.com/.