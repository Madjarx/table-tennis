export interface PlayerModel {
    name: string,
    won: number,
};

export interface MatchModel {
    player1: string,
    player2: string,
    // score: {
    //     set1: {
    //         player1: number,
    //         player2: number,
    //     },
    // },
    score: number[],
};