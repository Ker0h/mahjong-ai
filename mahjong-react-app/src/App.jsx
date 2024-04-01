import { Outlet } from "react-router-dom"
import Navbar from './components/navbar/Navbar'

function App() {
  const tiles = [
    {name: "Bamboo 1", image: "bamboo1"},
    {name: "Bamboo 2", image: "bamboo2"},
    {name: "Bamboo 3", image: "bamboo3"},
    {name: "Bamboo 4", image: "bamboo4"},
    {name: "Bamboo 5", image: "bamboo5"},
    {name: "Bamboo 6", image: "bamboo6"},
    {name: "Bamboo 7", image: "bamboo7"},
    {name: "Bamboo 8", image: "bamboo8"},
    {name: "Bamboo 9", image: "bamboo9"},
    {name: "Character 1", image: "character1"},
    {name: "Character 2", image: "character2"},
    {name: "Character 3", image: "character3"},
    {name: "Character 4", image: "character4"},
    {name: "Character 5", image: "character5"},
    {name: "Character 6", image: "character6"},
    {name: "Character 7", image: "character7"},
    {name: "Character 8", image: "character8"},
    {name: "Character 9", image: "character9"},
    {name: "Dot 1", image: "dot1"},
    {name: "Dot 2", image: "dot2"},
    {name: "Dot 3", image: "dot3"},
    {name: "Dot 4", image: "dot4"},
    {name: "Dot 5", image: "dot5"},
    {name: "Dot 6", image: "dot6"},
    {name: "Dot 7", image: "dot7"},
    {name: "Dot 8", image: "dot8"},
    {name: "Dot 9", image: "dot9"},
    {name: "East", image: "east"},
    {name: "South", image: "south"},
    {name: "West", image: "west"},
    {name: "North", image: "north"},
    {name: "Red Dragon", image: "red-dragon"},
    {name: "Green Dragon", image: "green-dragon"},
    {name: "White Dragon", image: "white-dragon"},
    {name: "Plum", image: "plum"},
    {name: "Orchid", image: "orchid"},
    {name: "Chrysanthemum", image: "chrysanthemum"},
    {name: "Bamboo", image: "bamboo"},
    {name: "Spring", image: "spring"},
    {name: "Summer", image: "summer"},
    {name: "Autumn", image: "autumn"},
    {name: "Winter", image: "winter"}
  ];

  return (
    <div className="App">
      <main>
        <section>
          <Navbar />
        </section>
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  )
}
 
export default App
