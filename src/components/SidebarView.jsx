import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { wallets as staticWallets, categories as staticCategories } from '../constants/menuItems';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
  const [wallets, setWallets] = useState(staticWallets);
  const [categories, setCategories] = useState(staticCategories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newWallet, setNewWallet] = useState({ name: '', amount: '' });
  const [newCategory, setNewCategory] = useState({ name: '', amount: '' });
  const [editIndex, setEditIndex] = useState(null); // Untuk wallet yang sedang diedit
  const [editCategoryIndex, setEditCategoryIndex] = useState(null); // Untuk category yang sedang diedit

  // Fungsi untuk menambah wallet baru atau menyimpan perubahan (jika edit)
  const saveWallet = () => {
    if (editIndex !== null) {
      const updatedWallets = wallets.map((wallet, index) =>
        index === editIndex ? { ...wallet, ...newWallet } : wallet
      );
      setWallets(updatedWallets);
      setEditIndex(null); // Reset edit state
    } else {
      const updatedWallets = [
        ...wallets, 
        {
          name: newWallet.name,
          icon: 'fas fa-wallet',
          color: 'bg-blue-500',
          amount: newWallet.amount,
          link: '/'
        }
      ];
      setWallets(updatedWallets);
    }
    setNewWallet({ name: '', amount: '' }); // Reset form
    setIsModalOpen(false); // Tutup modal
  };

  // Fungsi untuk menambah kategori baru atau menyimpan perubahan (jika edit)
  const saveCategory = () => {
    if (editCategoryIndex !== null) {
      const updatedCategories = categories.map((category, index) =>
        index === editCategoryIndex ? { ...category, ...newCategory } : category
      );
      setCategories(updatedCategories);
      setEditCategoryIndex(null); // Reset edit state
    } else {
      const updatedCategories = [
        ...categories, 
        {
          name: newCategory.name,
          icon: 'fas fa-icons',
          color: 'bg-green-500',
          amount: newCategory.amount,
          link: '/'
        }
      ];
      setCategories(updatedCategories);
    }
    setNewCategory({ name: '', amount: '' }); // Reset form
    setIsModalOpen(false); // Tutup modal
  };

  // Fungsi untuk mengedit wallet
  const editWallet = (index) => {
    const walletToEdit = wallets[index];
    setNewWallet({ name: walletToEdit.name, amount: walletToEdit.amount });
    setEditIndex(index);
    setIsModalOpen(true); // Buka modal untuk edit wallet
  };

  // Fungsi untuk mengedit category
  const editCategory = (index) => {
    const categoryToEdit = categories[index];
    setNewCategory({ name: categoryToEdit.name, amount: categoryToEdit.amount });
    setEditCategoryIndex(index);
    setIsModalOpen(true); // Buka modal untuk edit category
  };

  // Fungsi untuk menghapus wallet
  const deleteWallet = (index) => {
    const updatedWallets = wallets.filter((_, i) => i !== index);
    setWallets(updatedWallets);
  };

  // Fungsi untuk menghapus category
  const deleteCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  return (
    <aside className="w-72 bg-gray-50 h-screen p-6 shadow-lg fixed right-0 flex flex-col justify-between">
      <div className="space-y-10 w-full">
        {/* Wallets Section */}
        <div className="w-full">
          <div className="w-full flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Wallets</h2>
            <button 
              className="bg-gray-200 p-2 rounded-full border-dashed border-2 border-gray-400" 
              onClick={() => setIsModalOpen(true)} // Buka modal untuk tambah wallet
            >
              <i className="fas fa-plus text-gray-600"></i>
            </button>
          </div>
          <ul className="space-y-3">
            {wallets.map((wallet, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-white shadow-md rounded-lg hover:font-bold hover:no-underline">
                <Link to={wallet.link} className="flex items-center space-x-2">
                  <span className={`${wallet.color} text-white p-2 rounded-full`}>
                    <i className={wallet.icon}></i>
                  </span>
                  <span className="font-semibold text-gray-800">{wallet.name}</span>
                </Link>
                <span className="text-sm text-gray-500">{wallet.amount}</span>
                <div className="flex space-x-2">
                  <button 
                    className="text-blue-500" 
                    onClick={() => editWallet(index)} // Edit wallet
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button 
                    className="text-red-500" 
                    onClick={() => deleteWallet(index)} // Hapus wallet
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories Section */}
        <div className="w-full">
          <div className="w-full flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Categories</h2>
            <button 
              className="bg-gray-200 p-2 rounded-full border-dashed border-2 border-gray-400"
              onClick={() => setIsModalOpen(true)} // Buka modal untuk tambah kategori
            >
              <i className="fas fa-plus text-gray-600"></i>
            </button>
          </div>
          <ul className="space-y-3">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-white shadow-md rounded-lg hover:font-bold hover:no-underline">
                <Link to={category.link} className="flex items-center space-x-2">
                  <span className={`${category.color} text-white p-2 rounded-full`}>
                    <i className={category.icon}></i>
                  </span>
                  <span className="font-semibold text-gray-800">{category.name}</span>
                </Link>
                <span className="text-sm text-gray-500">{category.amount}</span>
                <div className="flex space-x-2">
                  <button 
                    className="text-blue-500" 
                    onClick={() => editCategory(index)} // Edit category
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button 
                    className="text-red-500" 
                    onClick={() => deleteCategory(index)} // Hapus category
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal Sederhana untuk Tambah/Edit Wallet dan Categories */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              {editIndex !== null ? 'Edit Wallet' : editCategoryIndex !== null ? 'Edit Category' : 'Add New'}
            </h3>
            <input
              type="text"
              placeholder={editCategoryIndex !== null ? 'Category Name' : 'Wallet Name'}
              value={editIndex !== null ? newWallet.name : newCategory.name}
              onChange={(e) => {
                editIndex !== null
                  ? setNewWallet({ ...newWallet, name: e.target.value })
                  : setNewCategory({ ...newCategory, name: e.target.value });
              }}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <input
              type="text"
              placeholder="Amount"
              value={editIndex !== null ? newWallet.amount : newCategory.amount}
              onChange={(e) => {
                editIndex !== null
                  ? setNewWallet({ ...newWallet, amount: e.target.value })
                  : setNewCategory({ ...newCategory, amount: e.target.value });
              }}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button 
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => { 
                  setIsModalOpen(false); 
                  setEditIndex(null); 
                  setEditCategoryIndex(null); 
                }} // Tutup modal tanpa menyimpan
              >
                Cancel
              </button>
              <button 
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                onClick={editIndex !== null ? saveWallet : saveCategory} // Simpan wallet atau category
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
