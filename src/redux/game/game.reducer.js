import {
    GAME_STARTED,
    GAME_SUCCEEDED,
    GAME_FAILED,
} from './game.actions';

const initialState = {
    loading: false,
    game: [],
};

const gameReducers = {
    [GAME_STARTED]: (state, action) => ({
        ...state,
        error: undefined,
        loading: true,
    }),
    [GAME_SUCCEEDED]: (state, action) => ({
        ...state,
        game: action.payload.data,
        timestamp: action.payload.timestamp,
        loading: false,
    }),
    [GAME_FAILED]: (state, action) => ({
        ...state,
        error: action.payload,
        loading: false,
    }),
};

export const gameReducer = (state = initialState, action) =>
    gameReducers[action.type]
    ? gameReducers[action.type](state, action)
    : state;

export default gameReducer;
