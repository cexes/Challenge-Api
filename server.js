const express = require('express');
const app = express();
const routes = require('./src/routes/routes');
const authorizationMiddleware = require('./src/middleware/authorizationMiddleware')

app.use(express.json());
app.use(routes);
app.use(authorizationMiddleware);


app.listen(3025, ()=> {
    console.log("Running")
})
