import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Purchase: React.FC = () => {
  const location = useLocation();
  const history = useNavigate();
  const artItem = location.state?.artItem;
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardExpiration: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    country: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardExpiration: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      country: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      cardNumber: '',
      cardExpiration: '',
      cvv: '',
    };

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zipCode) newErrors.zipCode = 'Zip Code is required';
    if (!formData.cardNumber) newErrors.cardNumber = 'Card Number is required';
    if (!formData.cardExpiration) newErrors.cardExpiration = 'Card Expiration is required';
    if (!formData.cvv) newErrors.cvv = 'CVV is required';

    setErrors(newErrors);

    return Object.values(newErrors).every(error => error === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Show toast message
      toast.success('Thank you for your purchase!', {
        position: "top-center",
        autoClose: 3000, // 3 seconds
        onClose: () => history('/artvituso/') // Redirect to home after toast is closed
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Order</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4">Order Details</h2>
          <p className="mb-2"><strong>Art Piece:</strong> {artItem.title}</p>
          <p className="mb-2"><strong>Price:</strong> {artItem.price}</p>
          <p className="mb-2"><strong>Tax:</strong> ${(parseFloat(artItem.price) * 0.13).toFixed(2)}</p>
          <p className="mb-2"><strong>Total:</strong> ${(parseFloat(artItem.price) * 1.13).toFixed(2)}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First and Last Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h2 className="text-xl font-bold mb-4">Billing Address</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              >
                <option value="">Select Country</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                {/* Add more countries as needed */}
              </select>
              {errors.country && <p className="text-red-500 text-xs">{errors.country}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.state && <p className="text-red-500 text-xs">{errors.state}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.zipCode && <p className="text-red-500 text-xs">{errors.zipCode}</p>}
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Credit Card Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.cardNumber && <p className="text-red-500 text-xs">{errors.cardNumber}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Expiration</label>
              <input
                type="text"
                name="cardExpiration"
                value={formData.cardExpiration}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.cardExpiration && <p className="text-red-500 text-xs">{errors.cardExpiration}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.cvv && <p className="text-red-500 text-xs">{errors.cvv}</p>}
            </div>
          </form>
        </div>
      </div>
      <div className="mt-6">
        <button onClick={handleSubmit} className="bg-gray-800 text-white py-2 px-4 rounded">Place Order</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Purchase;
