const Sales = require("../models/sales");
const soldStock = require("../controller/soldStock");

// Add Sales
const addSales = (req, res) => {
  const addSale = new Sales({
    ProductID: req.body.productID,
    StoreID: req.body.storeID,
    StockSold: req.body.stockSold,
    SaleDate: req.body.saleDate,
    TotalSaleAmount: req.body.totalSaleAmount,
  });

  addSale
    .save()
    .then((result) => {
      soldStock(req.body.productID);
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(402).send(err);
    });
};

// Get All Sales Data
const getSalesData = async (req, res) => {
  const findAllSalesData = await Sales.find()
    .sort({ _id: -1 })
    .populate("ProductID")
    .populate("StoreID"); // -1 for descending order
  res.json(findAllSalesData);
};

// Get total sales amount
const getTotalSalesAmount = async(req,res) => {
  let totalSaleAmount = 0;
  const salesData = await Sales.find();
  salesData.forEach((sale)=>{
    totalSaleAmount += sale.TotalSaleAmount;
  })
  res.json({totalSaleAmount});

}




// Get last 7 days sales data
const getWeekSalesDetails = async () => {
  const today = new Date();
  const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000); // 7 days ago

  const salesDetails = await Sales.find(
    { SaleDate: { $gte: lastWeek } },
    (err, sales) => {
      if (err) {
        console.log(err);
      } else {
        console.log(sales);
      }
    }
  );
  res.json(salesDetails);
};

module.exports = { addSales, getSalesData, getWeekSalesDetails, getTotalSalesAmount};
