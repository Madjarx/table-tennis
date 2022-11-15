import { MatchModel } from "./dataModels";

/**
 * Function converts the create-match user input into the MatchModel
 * 
 * @param {any} input - Object from the create match form
 * @returns {MatchModel} - Match unverified match object
 */
export function convertToMatchModel(input: any) {
    let scoresFiltered: number[] = [];
    let scoresSorted: number[] = [];
    let i = 0;

    for (let key in input) {
        i++;
        if (i>2) {
            if (input[key] === "" || input[key] === null || input[key] === NaN) {
                scoresFiltered.push(0);
            } else scoresFiltered.push(input[key]);
        }  
    }

    for (let j = 0; j <= 4; j++ ){
        scoresSorted.push(scoresFiltered[j]);
        scoresSorted.push(scoresFiltered[j+5]);
    }
    
    let match: MatchModel = {
        player1: input.player1,
        player2: input.player2,
        score: scoresSorted,
    };

    return match;
};

export function validateMatch(match: MatchModel) {
    if (
        // this should be done with directives on the HTML side
        // but im coming from the world of JSX
        match.player1 === "" ||
        match.player2 === "" ||
        match.player1 === match.player2 
    ) return false;

    let player1SetsWon: number = 0;
    let player2SetsWon: number = 0;

    for (let i = 0; i<=8; i+=2) {
        // point difference needs to be at least 2
        if (!(Math.abs(match.score[i] - match.score[i+1]) >= 2)) return false;
        // one score should be at least 11
        if (!(match.score[i] >= 11 || match.score[i+1] >=11)) return false;
        // check if someone already won
        if (player1SetsWon === 3 || player2SetsWon === 3) {
            return true;
        }
        else {
            // if not, append who won the set
            match.score[i] > match.score[i+1]? player1SetsWon++ : player2SetsWon++;
        }
    };

    return false;
};