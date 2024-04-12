import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import mahjong_game from '../../assets/images/mahjong_game.jpg'

function Home() {
  return (
    <Row>
      <Col xs={{order: 2, span: 12}} md={{order: 1, span: 8}}>
        <article>
        <h1>Learn Mahjong, The Chinese Way!</h1>

          <section>
            <p>
              Learn how to play Mahjong, the Chinese way, with this app. 
              You can learn the rules, the scoring, and the strategies of the game. 
              You can also play the game with other players or against the computer 
              to practice your skills.
            </p>

            <p>
              Mahjong is a game of skill, strategy, and luck.
              There are many variations, played with different rules and different tiles.
              The most popular version is the Old Hong Kong Mahjong, which can be played here.
              You can reade about the rules of the game, the scoring, 
              and the different variations by clicking the button below.
            </p>

            <Button variant="outline-dark">
              <NavLink to="/rules" className="nav-link" activeClassName="active">Rules</NavLink>
            </Button>
          </section>

          <section>
            <p>
              Mahjong is played and loved by millions of people around the world, 
              mostly in Chinese diasporas.
              It's importance in Chinese culture is so great 
              that it's considered one of the four great inventions of China.
            </p>
            
            <p>
              Players can also read about the history of Mahjong, 
              its cultural significance, and its impact on Chinese society.
              The tiles used here can be switched to display Chinese characters 
              or their English translations and Pinyin pronunciations for beginners.
              <br />
              Please feel free to immerse yourself in this entertaining part of Chinese culture.
            </p>

            <h1>加油！</h1>

            <Button variant="outline-dark">
              <NavLink to="/history" className="nav-link" activeClassName="active">History & Culture</NavLink>
            </Button>
          </section>
        </article>
        
      </Col>

      <Col xs={{order: 1, span: 12}} md={{order: 2, span: 4}}>
        <img src={mahjong_game} alt="Mahjong" width="100%" />
      </Col>
    </Row>
  )
}

export default Home