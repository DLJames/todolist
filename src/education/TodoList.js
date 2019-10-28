import React, { Component } from 'react';
import store from './store';
import * as Action from './store/actionCreators';
import TodoListUI from './TodoListUI';
import Child from './child';
// import axios from 'axios';

class TodoList extends Component {
  constructor() {
    super();

    this.state = store.getState();
    // this.getTodoList = this.getTodoList.bind(this);
    store.subscribe(this.listenChange.bind(this));
  }

  componentDidMount() {
    // axios.get('/api/todolist').then((res) => {
    //   const action = Action.initTodo(res.data.list);
    //   store.dispatch(action);
    // });

    // this.getTodoList();

    const action = Action.getInitList();
    store.dispatch(action);
    
  }
  
  render() {
    const { inputVal, list } = this.state;
    return (
      <>
        <TodoListUI 
          inputVal={inputVal}
          list={list}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
        />
        <Child />
      </>
    );
  }

  // getTodoList() {
  //   const action = Action.getTodoList();
  //   store.dispatch(action);
  // }

  listenChange() {
    this.setState(store.getState());
  }

  addTodo() {
    const action = Action.addTodo();
    store.dispatch(action);
  }

  handleChange(e) {
    const action = Action.handleInput(e.target.value);
    store.dispatch(action);
  }
}

export default TodoList;