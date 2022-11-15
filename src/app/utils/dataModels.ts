export interface PlayerModel {
    name: string,
    won: number,
};

export interface MatchModel {
    player1: string,
    player2: string,
    score: number[],
}