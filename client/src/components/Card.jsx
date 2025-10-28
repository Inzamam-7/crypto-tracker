import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ coins }) => {
  const navigate = useNavigate()
  const { name, coinId, symbol, priceUSD, marketCap, createdAt, updatedAt } = coins

  return (
    <div
      onClick={() => navigate(`/coin/${coinId}`)}
      className="bg-gray-900 text-white rounded-2xl shadow-md p-5 transition transform hover:scale-105 hover:shadow-xl border border-gray-800 cursor-pointer"
    >
      {/* Name and Symbol */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold truncate">{name}</h2>
        <span className="text-xs bg-blue-600 px-2 py-1 rounded-md uppercase">
          {symbol}
        </span>
      </div>

      {/* Coin ID */}
      <p className="text-gray-400 text-xs mb-2 truncate">ID: {coinId}</p>

      {/* Price and Market Cap */}
      <div className="mb-3">
        <p className="text-base font-medium">
          💰 <span className="font-bold">${priceUSD?.toLocaleString() || 'N/A'}</span>
        </p>
        <p className="text-gray-300 text-xs">
          Market Cap: ${marketCap?.toLocaleString() || 'N/A'}
        </p>
      </div>

      {/* Created and Updated Time */}
      <div className="text-xs text-gray-400 space-y-1">
        <p>📅 Created: {new Date(createdAt).toLocaleString()}</p>
        <p>⏱ Updated: {new Date(updatedAt).toLocaleString()}</p>
      </div>
    </div>
  )
}

export default Card
