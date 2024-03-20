import React from 'react';
import TileIcon from '../tile-icon/TileIcon';



function TileCard({ tile }) {
  return (
    <div className="tile-card">
      <TileIcon name={"bamboo1"} />
      <h2>Bamboo 1</h2>
      <p>Some text about the tile</p>
    </div>
  );
}

export default TileCard;