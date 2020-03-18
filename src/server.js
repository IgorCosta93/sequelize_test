const express = require("express");
const routes = require("./routes");
const port = process.env.PORT || 3333;

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen({ port: port }, () =>
  console.log(`🚀 Server ready on port : ${port}`)
)