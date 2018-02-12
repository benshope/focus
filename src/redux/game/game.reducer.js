import {
    GAME_STARTED,
    GAME_ADD_FRAME,
} from './game.actions';

const initialState = {
    loading: false,
    game: 0,
    frames: [],
};

const randomFrame = (gridSize = 9) => {
    const squarePosition = Math.floor(Math.random() * gridSize);
    console.log(squarePosition);
    return [...Array(gridSize)]
        .map((x, i) => i === squarePosition);
};

const newFrames = (pastFrames, nBack = 2) =>
    [randomFrame(), ...pastFrames]
    .slice(0, nBack + 1);

const gameReducers = {
    [GAME_ADD_FRAME]: (state, action) => ({
        ...state,
        game: state.game + 1,
        frames: newFrames(state.frames)
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
