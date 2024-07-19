import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sell: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    artist: '',
    format: '',
    date: '',
    price: '',
    description: '',
    contactEmail: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    artist: '',
    format: '',
    date: '',
    price: '',
    description: '',
    contactEmail: ''
  });

  const history = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = { ...errors };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Art Piece Name is required';
      isValid = false;
    }
    if (!formData.artist) {
      newErrors.artist = 'Artist is required';
      isValid = false;
    }
    if (!formData.format) {
      newErrors.format = 'Art Format is required';
      isValid = false;
    }
    if (!formData.date || !/^\d{4}$/.test(formData.date)) {
      newErrors.date = 'Valid Date is required (e.g., 2023)';
      isValid = false;
    }
    if (!formData.price || isNaN(parseFloat(formData.price))) {
      newErrors.price = 'Valid Price is required';
      isValid = false;
    }
    if (!formData.contactEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Valid Email is required';
      isValid = false;
    }
    if (!formData.description) {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Show toast message
      toast.success('Thank you for submitting your art piece!', {
        position:"top-center",
        autoClose: 3000, // 3 seconds
        onClose: () => history('/artvituso/') // Redirect to home after toast is closed
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sell Your Art Piece</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col items-center">
          {preview ? (
            <img src={preview} alt="Preview" className="w-64 h-64 object-cover mb-4" />
          ) : (
            <div className="w-64 h-64 border-2 border-dashed border-gray-300 flex items-center justify-center mb-4">
              <span className="text-gray-400">Image Preview</span>
            </div>
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Art Piece Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Artist</label>
            <input
              type="text"
              name="artist"
              value={formData.artist}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
            />
            {errors.artist && <p className="text-red-500 text-xs mt-1">{errors.artist}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Art Format</label>
            <input
              type="text"
              name="format"
              value={formData.format}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
            />
            {errors.format && <p className="text-red-500 text-xs mt-1">{errors.format}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
            />
            {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Email</label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
            />
            {errors.contactEmail && <p className="text-red-500 text-xs mt-1">{errors.contactEmail}</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">About this artwork</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
        </div>
        <button
          type="submit"
          className="mt-4 bg-gray-800 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Sell;
