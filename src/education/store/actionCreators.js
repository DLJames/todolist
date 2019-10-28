import * as Type from './actionTypes';
// import axios from 'axios';

export const addTodo = () => ({
  type: Type.ADD_TODO
})

export const handleInput = (value) => ({
  type: Type.HANDLE_INPUT,
  value
})

export const initTodo = (value) => ({
  type: Type.INIT_TODO,
  value
})

// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('/api/todolist').then((res) => {
//       const action = initTodo(res.data.list);
//       dispatch(action);
//     });
//   }
// }

export const getInitList = () => ({
  type: Type.GET_INIT_LIST
})