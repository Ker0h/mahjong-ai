import TileCard from "../tile-card/TileCard";

function TileList({ tiles }) {
    return (
        <div className="mahjong-tile-list">

        <h1>Mahjong Tiles</h1>
        {tiles.map((tile) => (
            <TileCard tile={tile} />
        ))}
        </div>
    );
    }

export default TileList;
    