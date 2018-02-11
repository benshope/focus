const NAME = 'GAME';
export const GAME_STARTED = `${NAME}_STARTED`;
export const GAME_ADD_FRAME = `${NAME}_ADD_FRAME`;
export const GAME_ANSWER = `${NAME}_ANSWER`;

export const gameStarted = () => ({
  type: GAME_STARTED
});

export const gameAddFrame = (frame) => ({
  type: GAME_ADD_FRAME,
  payload: frame,
});

export const gameAnswer = (match) => ({
  type: GAME_ANSWER,
  payload: match,
});
