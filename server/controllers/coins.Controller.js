const CoinHistory = require("../models/coinHistory.models.js");
const Coin = require("../models/coinModels.js");
const axios = require("axios");

//  Core function: only handles data
const fetchAndStoreCoins = async () => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
  );

  const coinsData = response.data.map((coin) => ({
    coinId: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    priceUSD: coin.current_price,
    marketCap: coin.market_cap,
    change24h: coin.price_change_percentage_24h,
    timestamp: new Date(),
  }));

  // Update main coin table
  for (const coin of coinsData) {
    await Coin.findOneAndUpdate({ coinId: coin.coinId }, coin, {
      upsert: true,
      new: true,
    });
  }

  // Store history
  await CoinHistory.insertMany(coinsData);

  return coinsData;
};

// controller to get all coins
const getAllCoins = async (req, res) => {
  try {
    const coinsData = await fetchAndStoreCoins();
    const latestCoin = await Coin.find();

    res.status(200).json({
      message: "Coins data fetched and stored successfully",
      latestCoin,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//Auto update function for corn job
const autoUpdateCoins = async () => {
  try {
    await fetchAndStoreCoins();
    console.log("Auto-updated coin data at", new Date().toLocaleTimeString());
  } catch (error) {
    console.error("Error updating coin data:", error.message);
  }
};

//  Get coin history
const getCoinHistory = async (req, res) => {
  try {
    const { coinId } = req.params;
    const coinHistory = await CoinHistory.find({ coinId }).sort({
      timestamp: -1,
    });

    if (coinHistory.length === 0) {
      return res.status(404).json({
        message: "No history found for this coin",
      });
    }

    res.status(200).json({
      message: "Coin history fetched successfully",
      coinHistory,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getAllCoins, getCoinHistory, autoUpdateCoins };
