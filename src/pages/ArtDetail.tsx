// src/pages/ArtDetail.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ArtDetail: React.FC = () => {
  const location = useLocation();
  const artItem = location.state?.artItem;

  if (!artItem) {
    return <div>Art piece not found</div>;
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
          <h3 className="text-xl font-bold mb-2">Artist: {artItem.artist}</h3>
          <h3 className="text-xl font-bold mb-2">Art Format: {artItem.format}</h3>
          <h3 className="text-xl font-bold mb-2">Date: {artItem.date}</h3>
          <h3 className="text-xl font-bold mb-2">Price: {artItem.price}</h3>
          <h3 className="text-xl font-bold mb-2 ">About this artwork</h3>
          <p className="mb-8 ">{artItem.description}</p>
          <Link className="mt-4 bg-gray-800 text-white py-2 px-4 rounded" to={`/artvituso/explore/${artItem.id}/purchase`}  state={{ artItem}}>Purchase this artwork</Link>
        </div>
      </section>
    </div>
  );
};

export default ArtDetail;
