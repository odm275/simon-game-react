import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
    
});

function getPlayerTurn(turn, action){
    switch(action.type) {
        case 'ADD_TURN': {
            return turn.findIndex(
                (t) => t.player === action.player
            );
        }
    }
}

function playerReducer(state = [
    {
        player: 'human',
        turns: turnReducer(undefined, []), 

    },
    {
        player:'computer',
        turns: turnReducer(undefined, []),
    }
],action){
    switch(action.type){
        case 'ADD_TURN': {
            const playerTurn = getPlayerTurn(state, action);
            
            const player  = state[playerTurn];
            const newTurn = {
                ...oldTurns,
                turns: turnReducer(player.turns, action)
            };
            return [
                // FINISH RETURN
                ...state,
                turns:
            ];
        }
        default: {
            return state;
        }
    }
}

function turnReducer(state = [], action){
    switch(action.type) {
        case 'ADD_TURN':{
            const newTurn = {
                turns: action.turn
            }
            return state.concat(newTurn);
        }
        default: {
            return state;
        }
    }
}