const Sales = require("../models/sales");
const Product = require("../models/Product");


const soldStock = async (productID, stockSoldData) => {

  // Updating sold stock
  try {
    
    const myProductData = await Product.findOne({ _id: productID });
    let myUpdatedStock = myProductData.stock - stockSoldData;
    console.log("MY SOLD STOCK: ", myUpdatedStock);

    const SoldStock = await Product.findByIdAndUpdate(
      { _id: productID },
      {
        stock: myUpdatedStock,
      },
      { new: true }
    );
    console.log(SoldStock);

  } catch (error) {
    console.error("Error updating sold stock ", error);
  }
};

module.exports = soldStock;
