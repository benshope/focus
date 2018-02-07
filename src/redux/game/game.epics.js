import { Observable } from "rxjs";
import {
    GAME_STARTED,
    GAME_ADD_FRAME,
    gameAddFrame
} from "./game.actions";

export const gameStartedEpic = action$ => action$
    .filter(({ type }) => type === GAME_STARTED)
    .flatMap(() => Observable.interval(1000))
    .map(() => gameAddFrame());

export const gameAddFrameEpic = action$ => action$
    .filter(({ type }) => type === GAME_ADD_FRAME)
    .filter(() => false);

export const epics = [
    gameStartedEpic,
    gameAddFrameEpic,
];

export default epics;
