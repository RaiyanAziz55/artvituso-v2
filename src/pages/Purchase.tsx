import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const Purchase: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
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

    if (!formData.name) newErrors.name = t('name_required');
    if (!formData.email) newErrors.email = t('email_required');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('email_invalid');
    if (!formData.country) newErrors.country = t('country_required');
    if (!formData.address) newErrors.address = t('address_required');
    if (!formData.city) newErrors.city = t('city_required');
    if (!formData.state) newErrors.state = t('state_required');
    if (!formData.zipCode) newErrors.zipCode = t('zip_code_required');
    if (!formData.cardNumber) newErrors.cardNumber = t('card_number_required');
    if (!formData.cardExpiration) newErrors.cardExpiration = t('card_expiration_required');
    if (!formData.cvv) newErrors.cvv = t('cvv_required');

    setErrors(newErrors);

    return Object.values(newErrors).every(error => error === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Show toast message
      toast.success(t('thank_you_for_your_purchase'), {
        position: "top-center",
        autoClose: 3000, // 3 seconds
        onClose: () => navigate('/artvituso-v2/') // Redirect to home after toast is closed
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('your_order')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4">{t('order_details')}</h2>
          <p className="mb-2"><strong>{t('art_piece')}:</strong> {artItem.title}</p>
          <p className="mb-2"><strong>{t('price')}:</strong> {artItem.price}</p>
          <p className="mb-2"><strong>{t('tax')}:</strong> ${(parseFloat(artItem.price) * 0.13).toFixed(2)}</p>
          <p className="mb-2"><strong>{t('total')}:</strong> ${(parseFloat(artItem.price) * 1.13).toFixed(2)}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">{t('contact_information')}</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('first_last_name')} *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t('enter_first_last_name')}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('company')}</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder={t('enter_company')}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('email_address')} *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t('enter_email_address')}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h2 className="text-xl font-bold mb-4">{t('billing_address')}</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('country')} *</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              >
                <option value="">{t('select_country')}</option>
                <option value="United States">{t('united_states')}</option>
                <option value="Canada">{t('canada')}</option>
                <option value="United Kingdom">{t('united_kingdom')}</option>
                {/* Add more countries as needed */}
              </select>
              {errors.country && <p className="text-red-500 text-xs">{errors.country}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('address')} *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder={t('enter_address')}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('city')} *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder={t('enter_city')}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('state')} *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder={t('enter_state')}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.state && <p className="text-red-500 text-xs">{errors.state}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('zip_code')} *</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder={t('enter_zip_code')}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.zipCode && <p className="text-red-500 text-xs">{errors.zipCode}</p>}
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">{t('credit_card_details')}</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('card_number')} *</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder={t('enter_card_number')}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.cardNumber && <p className="text-red-500 text-xs">{errors.cardNumber}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('card_expiration')} *</label>
              <input
                type="text"
                name="cardExpiration"
                value={formData.cardExpiration}
                onChange={handleInputChange}
                placeholder={t('enter_card_expiration')}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.cardExpiration && <p className="text-red-500 text-xs">{errors.cardExpiration}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('cvv')} *</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder={t('enter_cvv')}
                className="mt-1 block w-full border border-gray-300 rounded py-2 px-3"
              />
              {errors.cvv && <p className="text-red-500 text-xs">{errors.cvv}</p>}
            </div>
          </form>
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <button onClick={() => navigate(-1)} className="bg-gray-800 text-white py-2 px-4 rounded">{t('back')}</button>
        <button onClick={handleSubmit} className="bg-gray-800 text-white py-2 px-4 rounded">{t('place_order')}</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Purchase;
