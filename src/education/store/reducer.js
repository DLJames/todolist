import * as Type from './actionTypes';

const defaultState = {
  inputVal: 'hello world',
  list: ['learn react', 'learn java', 'learn vue']
}

export default (state = defaultState, action) => {
  const { type, value } = action;
  const newState = JSON.parse(JSON.stringify(state));
  if(type === Type.HANDLE_INPUT) {
    newState.inputVal = value;
    return newState;
  }
  if(type === Type.ADD_TODO) {
    newState.list.push(newState.inputVal);
    newState.inputVal = '';
    return newState;
  }
  if(type === Type.INIT_TODO) {
    newState.list = [...value];
    return newState;
  }
  return state;
}