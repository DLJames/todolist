import * as Type from './actionTypes'; 

const defaultState = {
    inputVal: '123',
    list: [1, 2]
}

export default (state = defaultState, action) => {
    const newStore = JSON.parse(JSON.stringify(state));
    const { type, value } = action;
    if(type === Type.HANDLE_INPUT_CHANGE) {
        newStore.inputVal = value;
    }
    if(type === Type.HANDLE_ADD) {
        newStore.list.push(newStore.inputVal);
        newStore.inputVal = '';
    }
    if(type === Type.DEL_ITEM) {
        newStore.list = newStore.list.filter((item) => {
            return item !== value;
        });
    }
    if(type === Type.INIT_LIST) {
        newStore.list = [...value];
    }
    return newStore;
}