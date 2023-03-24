const express = require("express");
const { main } = require("./models/index");
const productRoute = require("./router/product");
const cors = require("cors");
const User = require("./models/users");

const app = express();
const PORT = 4000;
main();

app.use(express.json());
app.use(cors());
app.use("/api/product", productRoute);

app.get("/api", (req, res) => {
  res.json({ name: "Hi" });
});

// ------------- Signin --------------
let userAuthCheck;
app.post("/api/login", async (req, res) => {
  console.log(req.body);
  // res.send("hi");
  try {
    const user = await Register.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log("USER: ", user);
    if (user) {
      res.send(user);
      userAuthCheck = user;
    } else {
      res.status(401).send("Invalid Credentials");
      userAuthCheck = null;
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// Getting User Details of login user
app.get("/api/login", (req, res) => {
  res.send(userAuthCheck);
});
// ------------------------------------

// Registration API
app.post("/api/register", (req, res) => {
  let registerUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    imageUrl: req.body.imageUrl,
  });

  registerUser
    .save()
    .then((result) => {
      res.status(200).send(result);
      alert("Signup Successfull");
    })
    .catch((err) => console.log("Signup: ", err));
  res.status(200).send("Ok");
  console.log("request: ", req.body);
});

// Here we are listening to the server
app.listen(PORT, () => {
  console.log("I am live again");
});
