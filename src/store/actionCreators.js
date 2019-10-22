import * as Type from './actionTypes';
import axios from 'axios';

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

export const initTodoList = (value) => ({
    type: Type.INIT_LIST,
    value
});

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/todolist').then((res) => {
            const data = res.data;
            const action = initTodoList(data.list);
            dispatch(action);
        });
    }
}