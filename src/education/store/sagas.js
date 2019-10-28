import { takeEvery, put } from 'redux-saga/effects';
import * as Type from './actionTypes';
import * as Action from './actionCreators';
import axios from 'axios';

function* getInitList() {
  try {
    const request = yield axios.get('/api/todolist');
    const action = Action.initTodo(request.data.list);
    yield put(action);
  }catch(err) {
    console.log('err:', err);
  }
}

function* toDoSaga() {
  yield takeEvery(Type.GET_INIT_LIST, getInitList);
}

export default toDoSaga;