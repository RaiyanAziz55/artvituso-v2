// src/pages/ArtDetail.tsx
import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ArtDetail: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const artItem = location.state?.artItem;

  if (!artItem) {
    return <div>{t('art_piece_not_found')}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center">
        <img src={artItem.image_link} alt={artItem.title} className="w-auto h-auto mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">{artItem.title}</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <img src={artItem.image_link} alt={artItem.title} className="w-16 h-auto" />
          {/* Add more thumbnails if needed */}
        </div>
        <div className="text-left">
          <h3 className="text-xl font-bold mb-2">{t('artist')}: {artItem.artist}</h3>
          <h3 className="text-xl font-bold mb-2">{t('art_format')}: {artItem.format}</h3>
          <h3 className="text-xl font-bold mb-2">{t('date')}: {artItem.date}</h3>
          <h3 className="text-xl font-bold mb-2">{t('price')}: {artItem.price}</h3>
          <h3 className="text-xl font-bold mb-2 ">{t('about_this_artwork')}</h3>
          <p className="mb-8 ">{artItem.description}</p>
          <button onClick={() => navigate(-1)} className="mt-4 bg-gray-800 text-white py-2 px-4 rounded mr-8">{t('back')}</button>
          <Link className="mt-4 bg-gray-800 text-white py-2 px-4 rounded" to={`/artvituso/explore/${artItem.id}/purchase`} state={{ artItem }}>{t('purchase_this_artwork')}</Link>
        </div>
      </section>
    </div>
  );
};

export default ArtDetail;
