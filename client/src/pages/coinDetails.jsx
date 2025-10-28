import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCoinHistory } from '../services/api'

const CoinDetails = () => {
  const { coinId } = useParams()
  const [history, setHistory] = useState([])
  const navigate = useNavigate()

  const fetchHistory = async () => {
    if (!coinId) return;
    try {
      const response = await getCoinHistory(coinId)
      setHistory(response.data.coinHistory)
    } catch (error) {
      // console.log('Error fetching coin history:', error.message)
    }
  }

  useEffect(() => {
    fetchHistory();

    const interval = setInterval(() =>{
      fetchHistory();
    },1800000) 

    return () => clearInterval(interval);
  }, [coinId])

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Coin History — <span className="text-blue-500">{coinId}</span>
        </h1>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium shadow-md transition-all duration-200"
        >
          ← Back
        </button>
      </div>

      {/* Coin History Table */}
      {history?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-900 rounded-xl shadow-lg">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-700">
                <th className="p-3">#</th>
                <th className="p-3">Price (USD)</th>
                <th className="p-3">Market Cap</th>
                <th className="p-3">Change (24h)</th>
                <th className="p-3">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h, index) => (
                <tr
                  key={h._id}
                  className="border-b border-gray-800 hover:bg-gray-800 transition-all"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">${h.priceUSD?.toLocaleString()}</td>
                  <td className="p-3">${h.marketCap?.toLocaleString()}</td>
                  <td
                    className={`p-3 ${h.change24h > 0 ? 'text-green-500' : 'text-red-500'
                      }`}
                  >
                    {h.change24h}%
                  </td>
                  <td className="p-3">{new Date(h.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-20">
          No history available for this coin.
        </p>
      )}
    </div>
  )
}

export default CoinDetails
