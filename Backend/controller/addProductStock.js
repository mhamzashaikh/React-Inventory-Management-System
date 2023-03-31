const Purchase = require('../models/purchase');
const Product = require('../models/Product');

const addProductStock = async () => {
  try {
    const result = await Purchase.aggregate([
      { $group: { _id: '$ProductID', total_quantity: { $sum: '$QuantityPurchased' } } },
      { $project: { _id: 1, total_quantity: 1 } }
    ]);
    result.forEach(async (purchase) => {
      const { _id, total_quantity } = purchase;
      await Product.updateOne({ _id }, { $set: { stock: total_quantity } });
    });

    console.log('Product stock updated successfully.');
  } catch (error) {
    console.error('Error updating product stock:', error);
  }
};

module.exports = addProductStock;
