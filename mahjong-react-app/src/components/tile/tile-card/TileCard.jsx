import React from 'react';
import TileIcon from '../tile-icon/TileIcon';



function TileCard({ tile }) {
  return (
    <div className="tile-card">
      <TileIcon name={tile.image} />
      <h2>{tile.name}</h2>
    </div>
  );
}

export default TileCard;