import React, { useState } from 'react';
import '../css/App.css';
import ChessWebAPI from 'chess-web-api'
import { ChessGame } from '../types/types';
import { Query } from '../types/games'
//import { smotheredCheckmate } from './filters';

function App() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  const [filters, setFilters] = useState<Query>({
    username: "",
    smothered: false,
    enpassant: false,
    pawn: false,
    stalemate: false,
    castles: false
  })

  
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const url = `https://api.chess.com/pub/player/${filters.username}/games/archives`

    let archives: string[] = []
    let games: string[] = []


    fetch(url)
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json()
      })
      .then(data => {
          setIsLoading(true)
          archives = [...archives, data.archives]
          console.log(archives)
          return archives
        }
      )
      .then(archives => {
        console.log(archives)
          archives.map(link => {
            fetch(link)
              .then(response => response.json())
              .then(data => {
                games = [...games, data.games]
                console.log(games.length)
              })
              .catch (
                
              )
          })
        }
      )
  }

  Object.values(filters).some(Boolean)

  return (
    <div className="App">
      <h1>Chess Search</h1>
      <div className="searchBox">
        <form onSubmit={handleSubmit}>
          
          <h1>Enter your username</h1>
          <input className="textBox" type="text" placeholder="chess.com username" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilters({...filters, username:e.target.value})}/>

          <h1>Filters</h1>
          <div className="checksContainer">
            <label>
              <input type="checkbox" name="smothered" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilters({...filters, smothered:e.target.checked})} />
              Smothered checkmate
            </label>
            <label> 
              <input type="checkbox" name="stalemate" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilters({...filters, stalemate:e.target.checked})}/>
              Stalemate
            </label>
            <label> 
              <input type="checkbox" name="pawn" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilters({...filters, pawn:e.target.checked})}/>
              Pawn checkmate
            </label>
            <label>
              <input type="checkbox" name="castles" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilters({...filters, castles:e.target.checked})}/>
              Castles checkmate
            </label>
            <label>
              <input type="checkbox" name="enpassant" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilters({...filters, enpassant:e.target.checked})}/>
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
