import { useState } from 'react';

const useTransactions = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      category: '☕ Restaurants & Cafe',
      date: '20 August 2019',
      amount: 99.00,
      type: 'expense',
    },
    {
      id: 2,
      category: '👗 Clothes & Shopping',
      date: '25 September 2019',
      amount: 2357.00,
      type: 'expense',
    },
    {
      id: 3,
      category: '💳 Credit & Loans',
      date: '10 April 2019',
      amount: 4867.00,
      type: 'expense',
    },
    {
      id: 4,
      category: '🎁 Gifts Card',
      date: '10 October 2019',
      amount: 85.00,
      type: 'expense',
    },
  ]);

  // Fungsi untuk menambahkan transaksi baru
  const addTransaction = (transaction) => {
    if (!transaction.category || !transaction.amount || !transaction.date) {
      console.error('Semua field transaksi harus diisi');
      return;
    }

    const newTransaction = {
      ...transaction,
      id: transactions.length > 0 ? Math.max(...transactions.map(t => t.id)) + 1 : 1,
    };

    setTransactions([...transactions, newTransaction]);
  };

  // Fungsi untuk menghapus transaksi berdasarkan id
  const removeTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  // Fungsi untuk memperbarui transaksi
  const updateTransaction = (updatedTransaction) => {
    if (!updatedTransaction.category || !updatedTransaction.amount || !updatedTransaction.date) {
      console.error('Semua field transaksi harus diisi');
      return;
    }

    setTransactions(transactions.map(transaction => 
      transaction.id === updatedTransaction.id ? updatedTransaction : transaction
    ));
  };

  return {
    transactions,
    addTransaction,
    removeTransaction,
    updateTransaction,  // Return fungsi update
  };
};

export default useTransactions;
