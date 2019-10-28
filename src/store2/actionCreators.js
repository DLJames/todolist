import * as Type from './actionTypes';
import axios from 'axios';

export const changeInput = (value) => ({
  type: Type.CHANGE_INPUT,
  value
})

export const handleAdd = () => ({
  type: Type.ADD_TODO
})

export const handleDelItem = (value) => ({
  type: Type.DEL_TODO,
  value
})

export const initTodoList = (value) => ({
  type: Type.GET_TODO,
  value
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/api/todolist').then((res) => {
      const data = res.data;
      const action = initTodoList(data.list);
      dispatch(action);
    })
  }
}