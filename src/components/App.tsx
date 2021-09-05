import React, { useState } from 'react';
import '../css/App.css';
import { ChessGame } from '../types/types';
import { Query } from '../types/games'
//import { smotheredCheckmate } from './filters';

function App() {

  const handleSubmit = (event: any) => {
    event.preventDefault()

  }

  const [filters, setFilters] = useState<Query>({
    smothered: false,
    enpassant: false,
    pawn: false,
    stalemate: false,
    castles: false
  })

  return (
    <div className="App">
      <div className="searchBox">
        <form action="">
          <label> Smothered checkmate
            <input type="checkbox" name="smothered"/>
          </label>
          <label> Stalemate
            <input type="checkbox" name="stalemate"/>
          </label>
          <label> Pawn checkmate
            <input type="checkbox" name="pawn"/>
          </label>
          <label> Castles checkmate
            <input type="checkbox" name="castles"/>
          </label>
          <label> En Passant checkmate
            <input type="checkbox" name="enpassant"/>
          </label>
          <input type="submit" value="Search Games" />
        </form>
      </div>
    </div>
  );
}



export default App;
