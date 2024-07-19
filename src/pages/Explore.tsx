// src/pages/Explore.tsx

import React, { useState } from 'react';
import ArtGrid from '../components/ArtGrid';
import artData from '../data/data.json'; // Assuming you saved your JSON data in this file
import ArtItem from '../models/ArtItem';
import { useTranslation } from 'react-i18next';

const Explore = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArtist, setSelectedArtist] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleArtistChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArtist(e.target.value);
  };

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFormat(e.target.value);
  };

  const handleTimePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTimePeriod(e.target.value);
  };

  // Ensure artData is typed as ArtItem[]
  const arts: ArtItem[] = artData;

  const filteredArtItems: ArtItem[] = arts.filter(item => {
    return (
      (selectedArtist === '' || item.artist === selectedArtist) &&
      (selectedFormat === '' || item.format === selectedFormat) &&
      (selectedTimePeriod === '' || item.date === selectedTimePeriod) &&
      (searchTerm === '' || item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('browse_our_collection')}</h1>
      <div className="flex">
        <div className="w-1/4 pr-4">
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2" htmlFor="search">{t('search')}</label>
            <input
              type="text"
              id="search"
              placeholder={t('Search')}
              className="w-full border border-gray-400 rounded py-2 px-4"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2" htmlFor="filter">{t('filter')}</label>
            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="artist">{t('artist')}</label>
              <select 
                id="artist" 
                className="w-full border border-gray-400 rounded py-2 px-4"
                value={selectedArtist}
                onChange={handleArtistChange}
              >
                <option value="">{t('select_artist')}</option>
                <option value="Robert Henri">Robert Henri</option>
                <option value="George Bellows">George Bellows</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="format">{t('art_format')}</label>
              <select 
                id="format" 
                className="w-full border border-gray-400 rounded py-2 px-4"
                value={selectedFormat}
                onChange={handleFormatChange}
              >
                <option value="">{t('select_format')}</option>
                <option value="Oil on canvas">Oil on canvas</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="time-period">{t('time_period')}</label>
              <select 
                id="time-period" 
                className="w-full border border-gray-400 rounded py-2 px-4"
                value={selectedTimePeriod}
                onChange={handleTimePeriodChange}
              >
                <option value="">{t('select_time_period')}</option>
                <option value="1902">1902</option>
                <option value="1904">1904</option>
                <option value="1907">1907</option>
                <option value="1909">1909</option>
              </select>
            </div>
            <button 
              className="w-full bg-gray-800 text-white py-2 rounded"
              onClick={() => { /* you can add any additional logic needed when applying the filter */ }}
            >
              {t('apply')}
            </button>
          </div>
        </div>
        <ArtGrid artItems={filteredArtItems} />
      </div>
    </div>
  );
};

export default Explore;
