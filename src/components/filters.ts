import {ChessGame} from "../types/types"
import "@chess-fu/fen-parser"
import FenParser from "@chess-fu/fen-parser";

function isWin (game : ChessGame, user : string) : boolean {
    return (game.white.username === user) ?
    game['white']['result'] === 'win' : game['black']['result'] === 'win';
}

function isCheckmate (game : ChessGame, user : string) : boolean {
    return (game['white']['username'] === user) ?
    game['black']['result'] === 'checkmated' : game['white']['result'] === 'checkmated';
}

function isLoss (game : ChessGame, user : string) {
    let lossTypes = ['checkmated', 'resigned', 'timeout'];
    return (game['white']['username'] === user) ?
    lossTypes.includes(game['white']['result']) : lossTypes.includes(game['black']['result']);
}

function isStalemate (game : ChessGame, user : string) {
    return (game.white.username === user) ?
    game['white']['result'] === 'stalemate' : game['black']['result'] === 'win';
}

function withinRatingRange (game : ChessGame, user : string, min : number, max : number) {

    let average = (game['black']['rating'] + game['white']['rating']) / 2;

    return average >= min && average <= max;
}

function withinMoveRange (game: ChessGame, user : string, min : number, max : number) {
    
    let moves = game['pgn'].split(" ");
    let count = parseInt(moves[moves.length - 5].substr(0,2));
    
    return count >= min && count <= max;
    
}

export function enPassantCheckmate (game: ChessGame, user: string) : boolean {

    let ep : RegExp = /(?:[a-h])x([a-h])(3|6)#/;

    let moves = game['pgn'].split(" ");

    let lastMove = moves[moves.length - 4];
    let moveBefore = moves[moves.length - 8];

    let match = ep.exec(lastMove);

    console.log(match)

    if (match !== null) {
        let pawnMove : string = match[1];
        pawnMove += (match[2] === '3') ? '4' : '5';
        console.log(lastMove)
        console.log(moveBefore)
        console.log(pawnMove)
        return moveBefore === pawnMove;
    }

    return false;
}

function pawnCheckmate (game: ChessGame, user: string) {
 
    let moves = game['pgn'].split(" ");
    let lastMove = moves[moves.length - 4];
    let pawnmate : RegExp = /[a-h](?:x[a-h])?[1-8]#/;

    let match = pawnmate.exec(lastMove);

    return match !== null;

}

function castlesWithCheckmate (game: ChessGame, user: string) {
    
    let moves = game['pgn'].split(" ");
    let lastMove = moves[moves.length - 4];
    
    return lastMove === 'O-O#' || lastMove === 'O-O-O#';
}

// export function smotheredCheckmate (game: ChessGame, user: string, color : string) : boolean {
    //     if (isCheckmate(game, user)) {
        //         let fen = new FenParser(game['fen']);
        //         const king : string = (color === 'white') ? 'k' : 'K';
        //         let position : [number, number] = [-1, -1];
        //         for (const [i, rank] of fen.ranks.entries()) {
            //             if (rank.indexOf(king) != -1) {
                //                 position = [i, rank.indexOf(king)];
                //                 break;
                //             }
                //         }
                
                //         let surrounding : [number, number][] = [];
                
                //         for (let i = -1; i <= 1; ++i) {
                    //             for (let j = -1; j <= 1; ++j) {
                        //                 surrounding.push([position[0] + i, position[1] + j]);
                        //             }
                        //         }
                        
                        //         for (const square of surrounding) {
                            //             if (square[0] >= 0 && square[0] <= 7 && square[1] >= 0 && square[1] <= 7) {
                                //                 let piece : string = fen.ranks[square[0], square[1]];
                                //                 if (piece !== "") {
                                    //                     if (piece === '-' || piece === piece.toUpperCase())
                                    //                         return false;
                                    //                 }
                                    //             }
                                    //         }
                                    //         return true;
                                    //     }
                                    //     return false;
                                    // }
                                    
function checkmateUnderOneSecond (game: ChessGame, user: string) {
    
    let moves = game['pgn'].split(" ");
    
    return moves[moves.length - 2].substr(0,7) === '0:00:00';

}