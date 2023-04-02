const Product = require("../models/Product");


const updateProductStock = async (productID) => {
  try {
    const getProduct = await Product.findOne({ _id: productID });
    const { stockPurchase, stockSold } = getProduct;
    const updatedStock = stockPurchase - stockSold;
    const updateProduct = await Product.updateOne({ _id: productID}, {stock: updatedStock}, {new: true});
    console.log("Product Stock Updated successfully.", updateProduct)
  } catch (error) {
    console.error("Error updating product stock:", error);
  }
};
module.exports = updateProductStock;
