import React, { useState } from 'react';
import useTransactions from '../hooks/useTransactions';

const TransactionList = () => {
  const { transactions, addTransaction, removeTransaction, updateTransaction } = useTransactions();
  const [newTransaction, setNewTransaction] = useState({ category: '', amount: '', date: ''});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTransactionId, setEditTransactionId] = useState(null); // Untuk transaksi yang sedang diedit

  // Fungsi untuk menyimpan transaksi baru atau update transaksi yang ada
  const saveTransaction = () => {
    console.log("Saving transaction:", editTransactionId ? "Updating" : "Adding", newTransaction);
    
    if (editTransactionId !== null) {
      // Jika ada id transaksi yang sedang diedit, update transaksi
      updateTransaction({
        id: editTransactionId,
        ...newTransaction
      });
      setEditTransactionId(null); // Reset setelah update
    } else {
      // Jika tidak ada transaksi yang sedang diedit, tambahkan transaksi baru
      addTransaction({
        ...newTransaction,
      });
    }
    
    setNewTransaction({ category: '', amount: '', date: '' }); // Reset form
    setIsModalOpen(false); // Tutup modal
  };

  // Fungsi untuk memulai pengeditan transaksi
  const startEditTransaction = (transaction) => {
    setNewTransaction({
      category: transaction.category,
      amount: transaction.amount,
      date: transaction.date,
    });
    setEditTransactionId(transaction.id);
    setIsModalOpen(true); // Buka modal
  };

  // Fungsi untuk membatalkan pengeditan
  const cancelEdit = () => {
    setEditTransactionId(null);
    setNewTransaction({ category: '', amount: '', date: '' });
    setIsModalOpen(false);
  };

  return (
    <section className="mt-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Transactions</h2>
        <button></button><br></br>
        <button className="bg-violet-500 text-white p-2 rounded ml-12" 
          onClick={() => setIsModalOpen(true)} // Buka modal untuk tambah transaksi
        >
          Add Transaction
        </button>
        <button></button>
      </div>

      <div className="space-y-6">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex justify-between items-center p-6 bg-white shadow rounded-md max-w-5xl"
          >
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded">{transaction.category}</span>
              <span className="text-sm text-gray-500">{transaction.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg text-red-500">${transaction.amount.toFixed(2)}</span>
              <button 
                className="text-blue-500" 
                onClick={() => startEditTransaction(transaction)} // Mulai edit transaksi
              >
                ✏️
              </button>
              <button 
                className="text-gray-400" 
                onClick={() => removeTransaction(transaction.id)} // Hapus transaksi
              >
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal untuk Tambah/Edit Transaksi */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              {editTransactionId !== null ? 'Edit Transaction' : 'Add New Transaction'}
            </h3>
            <input
              type="text"
              placeholder="Category"
              value={newTransaction.category}
              onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <input
              type="number"
              placeholder="Amount"
              value={newTransaction.amount}
              onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <input
              type="date"
              placeholder="Date"
              value={newTransaction.date}
              onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />

            <div className="flex justify-end space-x-4">
              <button 
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={cancelEdit} // Batalkan pengeditan
              >
                Cancel
              </button>
              <button 
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                onClick={saveTransaction} // Simpan transaksi
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TransactionList;
