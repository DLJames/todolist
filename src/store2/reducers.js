import * as Type from './actionTypes';

const defaultState = {
    inputVal: '',
    list: []
};

export default (state = defaultState, action) => {
    const { type, value } = action;
    const newState = JSON.parse(JSON.stringify(state));

    if(type === Type.CHANGE_INPUT) {
        newState.inputVal = value;
    }

    if(type === Type.ADD_TODO) {
        newState.list.push(newState.inputVal);
        newState.inputVal = '';
    }

    if(type === Type.DEL_TODO) {
        newState.list = newState.list.filter((item) => {
            return item !== value;
        });
    }

    if(type === Type.GET_TODO) {
        newState.list = [...value];
    }

    return newState;
}