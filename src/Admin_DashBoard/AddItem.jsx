import React from 'react';

const AddItem = () => {
    return (
        <div className="flex flex-col  items-center p-6 bg-gray-50 min-h-screen">
        {/* Header */}
        <h2 className="text-yellow-600 text-sm mb-2">---What's new?---</h2>
        <h1 className="text-2xl font-bold mb-6">ADD AN ITEM</h1>
  
        {/* Form Container */}
        <div className='w-[80%]'>
        <form
          className="w-full  bg-white p-6 rounded shadow-md"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Recipe Name */}
          <div className="mb-4">
            <label
              htmlFor="recipe-name"
              className="block text-sm font-semibold mb-1"
            >
              Recipe name*
            </label>
            <input
              type="text"
              id="recipe-name"
              placeholder="Recipe name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-yellow-200"
              required
            />
          </div>
  
          {/* Category and Price */}
          <div className="flex flex-wrap gap-4 mb-4">
            {/* Category */}
            <div className="flex-1">
              <label
                htmlFor="category"
                className="block text-sm font-semibold mb-1"
              >
                Category*
              </label>
              <select
                id="category"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-yellow-200"
                required
              >
                <option value="">Category</option>
                <option value="appetizer">Appetizer</option>
                <option value="main-course">Main Course</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>
  
            {/* Price */}
            <div className="flex-1">
              <label
                htmlFor="price"
                className="block text-sm font-semibold mb-1"
              >
                Price*
              </label>
              <input
                type="number"
                id="price"
                placeholder="Price"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-yellow-200"
                required
              />
            </div>
          </div>
  
          {/* Recipe Details */}
          <div className="mb-4">
            <label
              htmlFor="recipe-details"
              className="block text-sm font-semibold mb-1"
            >
              Recipe Details*
            </label>
            <textarea
              id="recipe-details"
              placeholder="Recipe Details"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-yellow-200"
              rows="4"
              required
            ></textarea>
          </div>
  
          {/* File Upload */}
          <div className="mb-4">
            <label
              htmlFor="file-upload"
              className="block text-sm font-semibold mb-1"
            >
              Choose File
            </label>
            <input
              type="file"
              id="file-upload"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-semibold py-2 rounded hover:bg-yellow-700 transition"
          >
            Add Item 🍴
          </button>
        </form>
        </div>
      </div>
    );
};

export default AddItem;