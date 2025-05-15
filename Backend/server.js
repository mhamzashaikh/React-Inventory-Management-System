const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Load environment variables from .env
dotenv.config();

// Import routes
const productRoute = require("./router/product");
const storeRoute = require("./router/store");
const purchaseRoute = require("./router/purchase");
const salesRoute = require("./router/sales");

// Import models
const User = require("./models/users");
const Product = require("./models/Product");


// Initialize Express App
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

connectDB();

// API Routes
app.use("/api/store", storeRoute);
app.use("/api/product", productRoute);
app.use("/api/purchase", purchaseRoute);
app.use("/api/sales", salesRoute);

// ---------- Auth Routes ---------- //

// Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Register
app.post("/api/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (err) {
    console.error("Signup error:", err);
    res.status(400).json({ error: "User registration failed" });
  }
});

// Get Test Product
app.get("/testget", async (req, res) => {
  try {
    const result = await Product.findOne({ _id: "6429979b2e5434138eda1564" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
