import TileIcon from "../tile-icon/TileIcon";

function TileList({ tiles }) {
    return (
        <div className="mahjong-tile-list">
            <table>
                <tbody>
                    <tr>
                        <th rowSpan={2} colSpan={2}></th>
                        <th colSpan={9}>Numbers</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                    </tr>
                    <tr>
                        <th rowSpan={3}>Suits</th>
                        <th>Dots</th>
                        <td><span><TileIcon name="bamboo1" /></span></td>
                        <td><span><TileIcon name="bamboo2" /></span></td>
                        <td><span><TileIcon name="bamboo3" /></span></td>
                        <td><span><TileIcon name="bamboo4" /></span></td>
                        <td><span><TileIcon name="bamboo5" /></span></td>
                        <td><span><TileIcon name="bamboo6" /></span></td>
                        <td><span><TileIcon name="bamboo7" /></span></td>
                        <td><span><TileIcon name="bamboo8" /></span></td>
                        <td><span><TileIcon name="bamboo9" /></span></td>
                    </tr>
                    <tr>
                        <th>Bamboo</th>
                        <td><span><TileIcon name="character1" /></span></td>
                        <td><span><TileIcon name="character2" /></span></td>
                        <td><span><TileIcon name="character3" /></span></td>
                        <td><span><TileIcon name="character4" /></span></td>
                        <td><span><TileIcon name="character5" /></span></td>
                        <td><span><TileIcon name="character6" /></span></td>
                        <td><span><TileIcon name="character7" /></span></td>
                        <td><span><TileIcon name="character8" /></span></td>
                        <td><span><TileIcon name="character9" /></span></td>
                    </tr>
                    <tr>
                        <th>Characters</th>
                        <td><span><TileIcon name="dot1" /></span></td>
                        <td><span><TileIcon name="dot2" /></span></td>
                        <td><span><TileIcon name="dot3" /></span></td>
                        <td><span><TileIcon name="dot4" /></span></td>
                        <td><span><TileIcon name="dot5" /></span></td>
                        <td><span><TileIcon name="dot6" /></span></td>
                        <td><span><TileIcon name="dot7" /></span></td>
                        <td><span><TileIcon name="dot8" /></span></td>
                        <td><span><TileIcon name="dot9" /></span></td>
                    </tr>
                    <tr>
                        <th colSpan={2} rowSpan={3}>Honours</th>
                        <th colSpan={4}>Winds</th>
                        <td rowSpan={6}></td>
                        <th colSpan={3}>Dragons</th>
                    </tr>
                    <tr>
                        <th>East</th>
                        <th>South</th>
                        <th>West</th>
                        <th>North</th>
                        <th>Red</th>
                        <th>Green</th>
                        <th>White</th>
                    </tr>
                    <tr>
                        <td><span><TileIcon name="east" /></span></td>
                        <td><span><TileIcon name="south" /></span></td>
                        <td><span><TileIcon name="west" /></span></td>
                        <td><span><TileIcon name="north" /></span></td>
                        <td><span><TileIcon name="red-dragon" /></span></td>
                        <td><span><TileIcon name="green-dragon" /></span></td>
                        <td><span><TileIcon name="white-dragon" /></span></td>
                    </tr>
                    <tr>
                        <th colSpan={2} rowSpan={3}>Bonus</th>
                        <th colSpan={4}>Seasons</th>
                        <td rowSpan={6}></td>
                        <th colSpan={4}>Flowers</th>
                    </tr>
                    <tr>
                        <th>Spring</th>
                        <th>Summer</th>
                        <th>Autumn</th>
                        <th>Winter</th>
                        <th>Plum</th>
                        <th>Orchid</th>
                        <th>Chrysanthemum</th>
                        <th>Bamboo</th>
                    </tr>
                    <tr>
                        <td><span><TileIcon name="spring" /></span></td>
                        <td><span><TileIcon name="summer" /></span></td>
                        <td><span><TileIcon name="autumn" /></span></td>
                        <td><span><TileIcon name="winter" /></span></td>
                        <td><span><TileIcon name="plum" /></span></td>
                        <td><span><TileIcon name="orchid" /></span></td>
                        <td><span><TileIcon name="chrysanthemum" /></span></td>
                        <td><span><TileIcon name="bamboo" /></span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    }

export default TileList;
    