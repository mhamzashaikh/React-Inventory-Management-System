const Product = require("../models/Product");

// Add Post
const addProduct = async (req, res) => {
  const addProduct = await new Product({
    name: req.body.name,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
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
const getAllPost = async (req, res) => {
  const findAllPosts = await Post.find().sort({ _id: -1 }); // -1 for descending;
  res.json(findAllPosts);
};

module.exports = { addProduct };
