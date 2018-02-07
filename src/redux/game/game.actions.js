const NAME = 'GAME';
export const GAME_STARTED = `${NAME}_STARTED`;
export const GAME_SUCCEEDED = `${NAME}_SUCCEEDED`;
export const GAME_FAILED = `${NAME}_FAILED`;
export const GAME_ADD_FRAME = `${NAME}_ADD_FRAME`;

export const gameStarted = (id) => {
  return {
    type: GAME_STARTED,
    payload: {
      id,
    },
  }
};

export const gameSucceeded = (id) => {
  return {
    type: GAME_SUCCEEDED,
    payload: {
      id,
    },
  }
};

export const gameFailed = (id) => {
  return {
    type: GAME_FAILED,
    payload: {
      id,
    },
  }
};

export const gameAddFrame = (id) => {
  return {
    type: GAME_ADD_FRAME,
    payload: {
      id,
    },
  }
};

