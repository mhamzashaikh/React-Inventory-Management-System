const Purchase = require("../models/purchase");
const purchaseStock = require("./purchaseStock");



// Add Purchase Details
const addPurchase = (req, res) => {
  const addPurchaseDetails = new Purchase({
    ProductID: req.body.productID,
    QuantityPurchased: req.body.quantityPurchased,
    PurchaseDate: req.body.purchaseDate,
    TotalPurchaseAmount: req.body.totalPurchaseAmount,
  });

  addPurchaseDetails
    .save()
    .then((result) => {
      purchaseStock(req.body.productID);
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(402).send(err);
    });
};

// Get All Purchase Data
const getPurchaseData = async (req, res) => {
  const findAllPurchaseData = await Purchase.find()
    .sort({ _id: -1 })
    .populate("ProductID"); // -1 for descending order
  res.json(findAllPurchaseData);
};

// Get total purchase amount
const getTotalPurchaseAmount = async(req,res) => {
  let totalPurchaseAmount = 0;
  const purchaseData = await Purchase.find();
  purchaseData.forEach((purchase)=>{
    totalPurchaseAmount += purchase.TotalPurchaseAmount;
  })
  res.json({totalPurchaseAmount});

}

module.exports = { addPurchase, getPurchaseData, getTotalPurchaseAmount };
