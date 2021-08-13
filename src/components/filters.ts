import {ChessGame} from "../types/types"

function isWin (game : ChessGame, user : string) : boolean {
    return (game['white']['username'] === user) ?
    game['white']['result'] === 'win' : game['black']['result'] === 'win';
}

function isLoss (game : ChessGame, user : string) {
    let lossTypes = ['checkmated', 'resigned', 'timeout'];
    return (game['white']['username'] === user) ?
    lossTypes.includes(game['white']['result']) : lossTypes.includes(game['black']['result']);
}

function isStalemate (game : ChessGame, user : string) {
    return (game['white']['username'] === user) ?
    game['white']['result'] === 'win' : game['black']['result'] === 'win';
}
