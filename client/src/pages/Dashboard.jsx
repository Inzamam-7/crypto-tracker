import React, { useEffect, useState } from 'react'
import { getCoins } from '../services/api'
import Card from '../components/Card'
const Dashboard = () => {
    const [coins, setCoins] = useState([])

    const fetchCoinData = async () => {
        try {
            const response = await getCoins();
            console.log(response.data.latestCoin);

            setCoins(response.data.latestCoin);
        } catch (error) {
            console.log("Error while fetching data", error.message)
        }
    }


    useEffect(() => {
        fetchCoinData();
        
        //Auto refresh after 30 min
        const interval = setInterval(() => {
            fetchCoinData()
        }, 30000)

        // Cleanup function
        return () => clearInterval(interval)
    }, [])
    return (
        <div className="min-h-screen bg-gray-950 text-white p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Crypto Dashboard</h1>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {coins.map((coin) => (
                    <Card key={coin.coinId} coins={coin} />
                ))}
            </div>
        </div>
    )
}

export default Dashboard