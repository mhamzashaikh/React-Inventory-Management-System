const Sales = require("../models/sales");
const Product = require("../models/Product");

const subtractProductStock = async () => {
  try {
    const result = await Sales.aggregate([
      { $group: { _id: '$ProductID', total_quantity: { $sum: '$StockSold' } } },
      { $project: { _id: 1, total_quantity: 1 } }
    ]);
    result.forEach(async (purchase) => {
      const { _id, total_quantity } = purchase;
      const product = await Product.findById(_id);
      const newStock = product.stock - total_quantity;
      await Product.updateOne({ _id }, { $set: { stock: newStock } });
    });

    console.log('Product stock updated successfully.');
  } catch (error) {
    console.error('Error updating product stock:', error);
  }
};



module.exports = subtractProductStock;
