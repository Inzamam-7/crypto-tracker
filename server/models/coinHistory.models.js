const mongoose = require('mongoose')

const coinHistorySchema = new mongoose.Schema({
  coinId: { type: String, required: true },
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  priceUSD: { type: Number, required: true },
  marketCap: { type: Number, required: true },
  change24h: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
},{timestamps:true})

module.exports = mongoose.model('CoinHIstory', coinHistorySchema);