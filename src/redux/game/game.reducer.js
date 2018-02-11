import {
    GAME_STARTED,
    GAME_ADD_FRAME,
} from './game.actions';

const initialState = {
    loading: false,
    game: 0,
};

const gameReducers = {
    [GAME_ADD_FRAME]: (state, action) => ({
        ...state,
        game: state.game + 1
    }),
    [GAME_STARTED]: (state, action) => ({
        ...state,
        error: undefined,
        loading: true,
    }),
};

export const gameReducer = (state = initialState, action) =>
    gameReducers[action.type]
    ? gameReducers[action.type](state, action)
    : state;

export default gameReducer;
