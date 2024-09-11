import React from 'react';

const ModalForm = ({ 
  isOpen, 
  closeModal, 
  saveItem, 
  isEditing, 
  formData, 
  setFormData,
  isWallet // Menentukan apakah yang sedang diedit adalah wallet atau kategori
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        {/* Judul Modal, jika Wallet tampilkan 'Wallet', jika Kategori tampilkan 'Category' */}
        <h3 className="text-lg font-semibold mb-4">
          {isEditing ? `Edit ${isWallet ? 'Wallet' : 'Category'}` : `Add New ${isWallet ? 'Wallet' : 'Category'}`}
        </h3>
        <input
          type="text"
          placeholder={`${isWallet ? 'Wallet Name' : 'Category Name'}`}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
        <input
          type="text"
          placeholder={`${isWallet ? 'Wallet Amount' : 'Category Amount'}`}
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
        <div className="flex justify-end space-x-4">
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={saveItem}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
