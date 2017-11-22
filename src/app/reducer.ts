import { Action } from '@ngrx/store';

export const RANDOM = 'RANDOM';
export const START = 'START';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/*
{
  expected: 4,
  start: 23434545,
  stop: 1223234
}
*/

export function reducer(state: any = {}, action: Action) {
  switch (action.type) {
    case RANDOM:
      const expected = getRandomInt(1, 10);
      return {...state, expected};
    case START:
      const now = new Date();
      return {...state, start: now};
    default: return state;
  }
}
