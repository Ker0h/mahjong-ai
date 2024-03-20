import TileCard from "../tile-card/TileCard";
import "./TileList.css";

function TileList({ tiles }) {
    return (
        <div className="mahjong-tile-list">
        {tiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
        ))}
        </div>
    );
    }