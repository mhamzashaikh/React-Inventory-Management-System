const Product = require("../models/Product");

// Add Post
const addProduct = async (req, res) => {
  const addProduct = await new Product({
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    price: req.body.price,
    quantity: req.body.quantity,
    description: req.body.description,
  });

  addProduct
    .save()
    .then((result) => {
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

// Delete Selected Product
const deleteSelectedProduct = async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);
  res.json(deleteProduct);
};

// Update Selected Product
const updateSelectedProduct = async (req, res) => {
  try {
    const updatedResult = await Product.findByIdAndUpdate(
      { _id: req.body.productID },
      { manufacturer: req.body.manufacturer },
      { new: true }
    );
    console.log(updatedResult);
    res.json(updatedResult);
  } catch (error) {
    console.log(error);
    res.status(402).send("Error");
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  deleteSelectedProduct,
  updateSelectedProduct,
};
