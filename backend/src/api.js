const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const fetch = require("node-fetch");

dotenv.config();
const app = express();
const router = express.Router();


router.get('/', (req, res) => {
    res.json({message: "Hello World!"});
});

// defined route...
app.use('/.netlify/functions/api', router);
module.exports = app;
module.exports.handler = serverless(app);
// export handler...
//export const handler = serverless(api);