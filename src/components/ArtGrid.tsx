// src/components/ArtGrid.tsx

import React from 'react';
import Card from "./Card";
import { Link } from "react-router-dom";
import ArtItem from '../models/ArtItem';

interface ArtGridProps {
  artItems: ArtItem[];
}

const ArtGrid: React.FC<ArtGridProps> = ({ artItems }) => {
  return (
    <div className="w-3/4 grid grid-cols-2 gap-4">
      {artItems.map(item => (
        <Link
          to={`/artvituso/explore/${item.id}`}
          state={{artItem: item}}
          key={item.id}
        >
          <Card 
            image={item.image_link} 
            title={item.title} 
            description={item.description} 
            price={item.price} 
          />
        </Link>
      ))}
    </div>
  );
};

export default ArtGrid;
