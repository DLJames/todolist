import * as Type from './actionTypes';

export const getInputChangeAction = (value) => ({
    type: Type.HANDLE_INPUT_CHANGE,
    value
});

export const getAddItemAction = () => ({
    type: Type.HANDLE_ADD
});

export const getDeleteItemAction = (value) => ({
    type: Type.DEL_ITEM,
    value
});