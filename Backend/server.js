const express = require("express");
const { main } = require("./models");
const productRoute = require('./router/product');
const cors = require("cors");

const app = express();
const PORT = 4000;
main();

app.use(express.json());
app.use(cors());
app.use("/api/product", productRoute)

app.get("/api", (req, res) => {
  res.json({ name: "Hi" });
});

// Here we are listening to the server
app.listen(PORT, () => {
  console.log("I am live again");
});
