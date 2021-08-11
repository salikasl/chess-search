export interface ChessGame {
    url:          string;
    pgn:          string;
    time_control: string;
    end_time:     number;
    rated:        boolean;
    fen:          string;
    time_class:   string;
    rules:        string;
    white:        PlayerInfo;
    black:        PlayerInfo;
}

export interface PlayerInfo {
    rating:   number;
    result:   string;
    id:    string;
    username: string;
}

export interface Card {
    url: string;
    fen: string;
    white: PlayerInfo;
    black: PlayerInfo;
}

export type Username = string;