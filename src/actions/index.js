// import axios from 'axios';
import { getAllWords } from '../words/words';

import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
    SET_SECRET_WORD: 'SET_SECRET_WORD',
};

/**
 * @function guessWord
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - Redux Thunk function. 
 */
export const guessWord = (guessedWord) => {
    return function(dispatch, getState) {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: { guessedWord, letterMatchCount }
        });

        if (guessedWord === secretWord) {
            dispatch({ type: actionTypes.CORRECT_GUESS });
        }
    };
};

// without server
export const getSecretWord = () => {
    return (dispatch) => {
        const listwords = getAllWords();
        const word = listwords[Math.floor(Math.random() * listwords.length)];
        
        return dispatch({
            type: actionTypes.SET_SECRET_WORD,
            payload: word
        });
    }
};

// using axios
// export const getSecretWord = () => {
//     return (dispatch) => {
//         return axios('http://localhost:3030/')
//         .then( (response) => {
//             dispatch({
//                 type: actionTypes.SET_SECRET_WORD,
//                 payload: response.data
//             });
//         });
//     }
// };
