import React, { useState } from 'react';
import '../css/App.css';
import { ChessGame } from '../types/types';
import { Query } from '../types/games'
//import { smotheredCheckmate } from './filters';

function App() {

  const [username, setUsername] = useState<string>("")
  
  const [filters, setFilters] = useState<Query>({
    smothered: false,
    enpassant: false,
    pawn: false,
    stalemate: false,
    castles: false
  })
  
  const handleSubmit = (event: any) => {
    event.preventDefault()
    const url = `https://api.chess.com/pub/player/${username}/games/archives`

    const data = fetch(url)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json()
      }).then(data => console.log(data))

  }

  
  return (
    <div className="App">
      <h1>Chess Search</h1>
      <div className="searchBox">
        <form onSubmit={handleSubmit}>
          
          <h1>Enter your username</h1>
          <input className="textBox" type="text" placeholder="chess.com username" onChange={(e: any) => (setUsername(e.target.value))}/>

          <h1>Filters</h1>
          <div className="checksContainer">
            <label>
              <input type="checkbox" name="smothered"/>
              Smothered checkmate
            </label>
            <label> 
              <input type="checkbox" name="stalemate"/>
              Stalemate
            </label>
            <label> 
              <input type="checkbox" name="pawn"/>
              Pawn checkmate
            </label>
            <label>
              <input type="checkbox" name="castles"/>
              Castles checkmate
            </label>
            <label>
              <input type="checkbox" name="enpassant"/>
              En Passant checkmate
            </label>
          </div>

          <input type="submit" value="Search Games" />
        </form>
      </div>
    </div>
  );
}



export default App;
