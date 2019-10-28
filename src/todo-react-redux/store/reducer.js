const defaultState = {
  inputVal: 'hello',
  list: []
}

export default (state = defaultState, action) => {
  const { type, value } = action;
  // const newState = JSON.parse(JSON.stringify(state));
  const newState = Object.assign({}, state);
  if (type === 'change_input') {
    newState.inputVal = value;
    return newState;
  }
  if (type === 'add_todo') {
    newState.list.push(newState.inputVal);
    newState.inputVal = '';
    return newState;
  }
  return state;
}