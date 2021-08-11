import {ChessGame, Username} from "../types/types"

function isWin (game : ChessGame, user : Username) : boolean {
    return (game['white']['username'] === user) ? game['white']['result'] === 'win' : game['black']['result'] === 'win';
}

// function is