import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store';
import * as Action from './store/actionCreators'; 
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

  handleInputChange(e) {
    const action = Action.getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleAdd() {
    const action = Action.getAddItemAction();
    store.dispatch(action);
  }

  handleDelItem(val) {
    const action = Action.getDeleteItemAction(val);
    store.dispatch(action);
  }

  handleDataChange() {
    this.setState(store.getState());
  }
}

export default Todo;