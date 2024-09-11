import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import useTransactions from '../hooks/useTransactions';
import TransactionList from '../components/TransactionList';

const Home = () => {
  const { transactions, removeTransaction } = useTransactions();

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Header with Wallet Icon and Calendar */}
      <div className="flex justify-between items-center mb-6 w-full">
        <div className="flex items-center space-x-2">
          <img
            src="./public/icons/wallet.svg"
            alt="Wallet Icon"
            className="w-12 h-12"
          />
          <div>
            <h1 className="text-2xl font-bold">Home Wallet</h1>
            <p className="text-sm text-gray-500">Change default wallet</p>
          </div>
          
          <button className="flex items-center space-x-2 text-gray-500 border rounded-md p-2 ml-auto">
            <span>📅</span>
            <span>Calendar</span>
          </button>

        </div>
      </div>

      {/* Filters (Group By, Dates, etc.) */}
      <div className="flex space-x-2 mb-6">
        {/* Add buttons for filtering */}
        <button className="px-4 py-2 bg-gray-100 text-sm text-gray-500 rounded-md border border-gray-300 shadow-sm flex items-center">
          <span> Group By </span>
          <div className="ml-2 flex flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        <button className="px-4 py-2 bg-gray-100 text-sm text-gray-500 rounded-md border border-gray-300 shadow-sm flex items-center">
        <span> Realisation </span>
        <div className="ml-2 flex flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <button className="px-4 py-2 bg-blue-100 text-sm text-blue-600 rounded-md border border-gray-300 shadow-sm flex items-center">
        <span> Dates </span>
        <div className="ml-2 flex flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <button className="px-4 py-2 bg-gray-100 text-sm text-gray-500 rounded-md border border-gray-300 shadow-sm flex items-center">
        <span> Types </span>
        <div className="ml-2 flex flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <button className="px-4 py-2 bg-gray-100 text-sm text-gray-500 rounded-md border border-gray-300 shadow-sm flex items-center">
        <span> Sample </span>
        <div className="ml-2 flex flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <button className="px-4 py-2 bg-gray-100 text-sm text-gray-500 rounded-md border border-gray-300 shadow-sm flex items-center">
        <span> Extended </span>
        <div className="ml-2 flex flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-sm text-gray-500 rounded-md border border-gray-300 shadow-sm flex items-center">
          <span>🔽</span>
        </button>
      </div>

      {/* Transaction Summary */}
      <div className="flex justify-between items-center mb-8 max-w-5xl">
        <p className="text-sm text-gray-600 font-bold">
          January 15, 2020
        </p>
        <p className="text-sm text-gray-600 text-right">
          Number of transactions: {transactions.length} | Value: ${transactions.reduce((total, t) => total + t.amount, 0).toFixed(2)}
        </p>
      </div>

      {/* Transactions List */}
      <TransactionList transactions={transactions} onRemoveTransaction={removeTransaction} />

      {/* Save/Cancel Buttons */}
      <div className="flex justify-end space-x-4 mt-6">
        <button className="px-6 py-2 bg-gray-200 text-gray-600 rounded-md">
          Cancel
        </button>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md">
          Save
        </button>
      </div>
    </div>
  );
};

export default Home;
