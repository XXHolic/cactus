import express from "express";

import render from './render'

const app = express();


app.use(express.static("client-dist"));

app.get("*", render);

app.listen(3002, function() {
  console.log("server start at localhost:3002");
});
