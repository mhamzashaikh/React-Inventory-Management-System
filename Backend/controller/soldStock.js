const Sales = require('../models/sales');
const Product = require('../models/Product');
const updateProductStock = require("./updateProductStock");

const soldStock = async (productID) => {
  try {
    const result = await Sales.aggregate([
      { $group: { _id: '$ProductID', total_quantity: { $sum: '$StockSold' } } },
      { $project: { _id: 1, total_quantity: 1 } }
    ]);
    result.forEach(async (purchase) => {
      const { _id, total_quantity } = purchase;
      await Product.updateOne({ _id }, { $set: { stockSold: total_quantity } });
    });
    updateProductStock(productID)
    console.log('Product stock updated successfully.');
  } catch (error) {
    console.error('Error updating product stock:', error);
  }
};

module.exports = soldStock;
