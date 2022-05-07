const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router.get("/blog", (req, res) => {
  res.json({
    title: "Hello World"
  });
});

app.use(`/`, router);
// app.use(`/.netlify/functions/api`, router);

module.exports.handler = serverless(app);
