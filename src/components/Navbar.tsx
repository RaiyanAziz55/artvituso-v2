// src/components/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="flex items-center justify-between p-4 border-2 border-gray-900">
      <Link to={'/artvituso-v2'} >
        <div className="text-3xl font-serif font-bold">
          <span className="italic">ARTVIRTUOSO</span>
        </div>
      </Link>
      <div className="flex space-x-6">
        <Link to="/artvituso-v2/" className="text-lg font-serif hover:underline">{t('HOME')}</Link>
        <Link to="/artvituso-v2/about" className="text-lg font-serif hover:underline">{t('ABOUT')}</Link>
        <Link to="/artvituso-v2/events" className="text-lg font-serif hover:underline">{t('EVENTS')}</Link>
        <Link to="/artvituso-v2/explore" className="text-lg font-serif hover:underline">{t('EXPLORE')}</Link>
        <Link to="/artvituso-v2/sell" className="text-lg font-serif hover:underline">{t('SELL')}</Link>
        <Link to="/artvituso-v2/faq" className="text-lg font-serif hover:underline">FAQ</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-400 rounded">
          <input
            type="text"
            className="px-2 py-1 outline-none"
            placeholder={t('Search')}
          />
          <button className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <LanguageSwitcher /> {/* Add the LanguageSwitcher component here */}
      </div>
    </nav>
  );
};

export default Navbar;
