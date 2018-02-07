const NAME = 'GAME';
export const GAME_STARTED = `${NAME}_STARTED`;
export const GAME_SUCCEEDED = `${NAME}_SUCCEEDED`;
export const GAME_FAILED = `${NAME}_FAILED`;

export const gameStarted = (id) => {
  return {
    type: GAME_SUCCEEDED,
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
