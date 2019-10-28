import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store2';
import * as Action from './store2/actionCreators'; 
import TodoUI from './TodoUI';

class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelItem = this.handleDelItem.bind(this);
    store.subscribe(this.handleDataChange);
  }

  componentDidMount() {
    this.getTodoList();
  }

  render() {
    return (
      <TodoUI 
        inputVal={this.state.inputVal}
        handleInputChange={this.handleInputChange}
        handleAdd={this.handleAdd}
        list={this.state.list}
        handleDelItem={this.handleDelItem}
      />
    );
  }

  getTodoList() {
    const action = Action.getTodoList();
    store.dispatch(action);
  }

  handleInputChange(e) {
    const action = Action.changeInput(e.target.value);
    store.dispatch(action);
  }

  handleAdd() {
    const action = Action.handleAdd();
    store.dispatch(action);
  }

  handleDelItem(val) {
    const action = Action.handleDelItem(val);
    store.dispatch(action);
  }

  handleDataChange() {
    this.setState(store.getState());
  }
}

export default Todo;