const Product = require("../models/Product");

// Add Post
const addProduct = async (req, res) => {
  const addProduct = await new Product({
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    price: req.body.price,
    category: req.body.category,
    quantity: req.body.quantity,
    description: req.body.description,
  });

  addProduct.save().then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(402).send(err);
    });
};

// Get All Posts
const getAllProducts = async (req, res) => {
  const findAllProducts = await Product.find().sort({ _id: -1 }); // -1 for descending;
  res.json(findAllProducts);
};

module.exports = { addProduct, getAllProducts };
