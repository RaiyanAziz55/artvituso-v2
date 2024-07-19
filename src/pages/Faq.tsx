// src/pages/Faq.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Faq: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('frequently_asked_questions')}</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('exploring_and_purchasing_artwork')}</h2>
        <p className="text-lg mb-2">
          <strong>{t('how_do_i_explore_artworks')}</strong>
        </p>
        <p className="text-lg mb-4">
          {t('explore_artworks_description')} <Link to="/artvituso/explore" className="underline text-blue-500">{t('explore_page')}</Link>.
        </p>
        <p className="text-lg mb-2">
          <strong>{t('how_do_i_purchase_artwork')}</strong>
        </p>
        <p className="text-lg mb-4">
          {t('purchase_artwork_description')} <Link to="/artvituso/explore" className="underline text-blue-500">{t('explore_page')}</Link>.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('selling_artwork')}</h2>
        <p className="text-lg mb-2">
          <strong>{t('how_do_i_sell_artwork')}</strong>
        </p>
        <p className="text-lg mb-4">
          {t('sell_artwork_description')} <Link to="/artvituso/sell" className="underline text-blue-500">{t('sell_page')}</Link>.
        </p>
        <p className="text-lg mb-2">
          <strong>{t('what_information_to_provide')}</strong>
        </p>
        <p className="text-lg mb-4">
          {t('provide_information_description')}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('attending_live_events')}</h2>
        <p className="text-lg mb-2">
          <strong>{t('how_do_i_attend_events')}</strong>
        </p>
        <p className="text-lg mb-4">
          {t('attend_events_description')} <Link to="/artvituso/events" className="underline text-blue-500">{t('events_page')}</Link>.
        </p>
        <p className="text-lg mb-2">
          <strong>{t('types_of_events')}</strong>
        </p>
        <p className="text-lg mb-4">
          {t('events_types_description')} <Link to="/artvituso/events" className="underline text-blue-500">{t('events_page')}</Link>.
        </p>
      </div>
    </div>
  );
};

export default Faq;
