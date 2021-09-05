import { enPassantCheckmate } from "../components/filters";
import { ChessGame } from "../types/types";

const game : ChessGame = {
    "url": "https://www.chess.com/game/live/5408130693",
    "pgn": "[Event \"Live Chess\"]\n[Site \"Chess.com\"]\n[Date \"2020.09.06\"]\n[Round \"-\"]\n[White \"salikasl\"]\n[Black \"blackbossy\"]\n[Result \"1-0\"]\n[CurrentPosition \"2kR1b2/2N2Npp/1Q3p2/5b2/6n1/2p5/PP2PPPP/4KB1R b K -\"]\n[Timezone \"UTC\"]\n[ECO \"A40\"]\n[ECOUrl \"https://www.chess.com/openings/Englund-Gambit\"]\n[UTCDate \"2020.09.06\"]\n[UTCTime \"21:10:47\"]\n[WhiteElo \"557\"]\n[BlackElo \"320\"]\n[TimeControl \"600\"]\n[Termination \"salikasl won by checkmate\"]\n[StartTime \"21:10:47\"]\n[EndDate \"2020.09.06\"]\n[EndTime \"21:20:23\"]\n[Link \"https://www.chess.com/game/live/5408130693\"]\n\n1. d4 {[%clk 0:09:59.2]} 1... e5 {[%clk 0:09:58.3]} 2. c3 {[%clk 0:09:55.7]} 2... Qf6 {[%clk 0:09:52.7]} 3. Nf3 {[%clk 0:09:46.3]} 3... Nc6 {[%clk 0:09:48.4]} 4. Bg5 {[%clk 0:09:30.8]} 4... Qg6 {[%clk 0:09:30.7]} 5. Na3 {[%clk 0:08:58.6]} 5... Qxg5 {[%clk 0:09:27.3]} 6. Nxg5 {[%clk 0:08:54.3]} 6... f6 {[%clk 0:09:24.4]} 7. Ne4 {[%clk 0:08:40.6]} 7... d6 {[%clk 0:09:09.5]} 8. Nb5 {[%clk 0:08:06.6]} 8... Na5 {[%clk 0:08:26]} 9. Nxc7+ {[%clk 0:07:56.5]} 9... Kd8 {[%clk 0:08:14]} 10. Nxa8 {[%clk 0:07:39.6]} 10... Nc4 {[%clk 0:07:59.4]} 11. Nxd6 {[%clk 0:07:16.9]} 11... Bf5 {[%clk 0:07:48.5]} 12. Nf7+ {[%clk 0:07:05.9]} 12... Ke7 {[%clk 0:07:44.1]} 13. Nxh8 {[%clk 0:07:02.6]} 13... Nh6 {[%clk 0:07:30.2]} 14. Qb3 {[%clk 0:06:48.8]} 14... Na5 {[%clk 0:07:17.3]} 15. Qb5 {[%clk 0:06:39.5]} 15... Ng4 {[%clk 0:06:56.7]} 16. Qxa5 {[%clk 0:06:27.7]} 16... b6 {[%clk 0:06:45.5]} 17. Qxa7+ {[%clk 0:06:19.9]} 17... Ke8 {[%clk 0:06:32.9]} 18. Nc7+ {[%clk 0:06:12.8]} 18... Kd8 {[%clk 0:06:28]} 19. Qb8+ {[%clk 0:06:08]} 19... Kd7 {[%clk 0:06:18.9]} 20. Qxb6 {[%clk 0:05:54.4]} 20... Kc8 {[%clk 0:05:54.2]} 21. Nf7 {[%clk 0:05:39.6]} 21... exd4 {[%clk 0:05:30.2]} 22. Rd1 {[%clk 0:05:31.8]} 22... d5 {[%clk 0:05:13.4]} 23. exd6# {[%clk 0:05:22.2]} 1-0\n",
    "time_control": "600",
    "end_time": 1599427223,
    "rated": true,
    "fen": "2kR1b2/2N2Npp/1Q3p2/5b2/6n1/2p5/PP2PPPP/4KB1R b K -",
    "time_class": "blitz",
    "rules": "chess",
    "white": {
        "rating": 557,
        "result": "win",
        "id": "https://api.chess.com/pub/player/salikasl",
        "username": "salikasl"
    },
    "black": {
        "rating": 320,
        "result": "checkmated",
        "id": "https://api.chess.com/pub/player/blackbossy",
        "username": "blackbossy"
    }
  };


test('testing', () => {
    expect(enPassantCheckmate(game, 'salikasl')).toBe(true)
})