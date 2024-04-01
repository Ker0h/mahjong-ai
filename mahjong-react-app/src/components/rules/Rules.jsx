import TileList from "../tile/tile-list/TileList";

function Rules() {
  return (
    <>
      <div className="flex mb-4">
        <div className="flex-initial">
          <article>
            <h2 className="text-3xl">Rules of <i>(Hong Kong style)</i> Mahjong</h2>
            <p>
              The game of Mahjong is played with a set of 144 tiles based on Chinese characters and symbols. 
              The goal is to build a winning hand by drawing and discarding tiles to form sets and pairs.
            </p>
              
            <h3 className="text-2xl">Start of the game</h3>
            <p>
              Before the game can begin the players must decide on the seating positions and the dealer.
              The dealer is chosen by rolling the dice and the player with the highest roll becomes the dealer.
            </p>
            <p>
              The game starts with the tiles being shuffled and built into four walls in the center of the table.
              Each wall is 18 tiles long and 2 tiles high. The walls are then pushed together to form a square.
              Each of the players recieves 13 tiles and the dealer recieves 14 tiles.
              The dealer then discards a tile to start the game. 
            </p>
            
            <h3 className="text-2xl">Gameplay</h3>
            <p>
              The players take turns, counter clockwise, to perform one of four actions:
              <ul className="list-disc">
                <li>Draw a tiinitialle from the wall</li>
                <li>Draw a tile from the discard pile</li>
                <li>Declare a Kong</li>
                <li>Declare a win</li>
              </ul>
            </p>

            <h3 className="text-2xl">Scoring</h3>
            <p>
              The scoring in Mahjong is complex and depends on the rules being used.
              The scoring is based on the value of the winning hand and the number of doubles.
            </p>
            <p>
              The winner is the player with the highest score at the end of the game.
            </p>

            <h3 className="text-2xl">Building a winning hand</h3>
            <p>
              A winning hand consists of four sets and a pair. A set can be a Pong, a Kong, or a Chow.
            </p>
            
            <h4 className="text-xl">Pong</h4>
            <p>
              A Pong is a set of three identical tiles. A player can declare a Pong by taking a tile from the wall or the discard pile.
            </p>
          
            <h4 className="text-xl">Kong</h4>
            <p>
              A Kong is a set of four identical tiles. A player can declare a Kong by taking a tile from the wall or the discard pile.
            </p>
          
            <h4 className="text-xl">Chow</h4>
            <p>
              A Chow is a set of three consecutive tiles in the same suit. A player can declare a Chow by taking a tile from the wall.
            </p>
          
            <h4 className="text-xl">Pair</h4>
            <p>
              A pair is two identical tiles. A player can declare a win by forming a winning hand with a pair.
            </p>
          </article>
        </div>

        <div className="flex-1 ml-4">
          <TileList />
        </div>
      </div>
    </>
  );
}

export default Rules;