require('dotenv').config();
const express = require("express");
const cors = require('cors');
const connectDB = require('./config/db.js')
const cointRoutes = require('./routes/coin.Routes.js')
const cron = require('node-cron')
const {autoUpdateCoins} = require("./controllers/coins.Controller.js")
connectDB();
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

//Routes
app.use('/api', cointRoutes)
cron.schedule('0 * * * * ', async () => {
//   console.log("Running Cron Job: Updating coin data at", new Date().toLocaleTimeString());
  await autoUpdateCoins();
});

//port
const PORT = process.env.PORT
app.listen(process.env.PORT, () => {
    console.log(`App is listening on ${PORT}`);
})