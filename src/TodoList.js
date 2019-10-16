import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component{
  state = {
    inputValue: '',
    todos: []
  }
  constructor(props) {
    super(props);
    // this.state = {
    //   inputValue: '',
    //   todos: ['学英语', '学REACT']
    // }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
      return (
        <Fragment>
          {/* 这是一个注释 */}
          <div className="inputCon">
            <label htmlFor="insertArea">输入内容</label>
            <input 
              id="insertArea"
              value={this.state.inputValue} 
              placeholder="enter your todos"
              onChange={this.handleInputChange}
              />
            <button onClick={this.handleClick}>提交</button>
          </div>
          <ul>{this.getTodoItem()}</ul>
        </Fragment>
      );
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
        inputValue: value
      }));
  }

  handleClick() {
    this.setState((prevState) => ({
      // todos: prevState.todos.concat([prevState.inputValue]),
      todos: [...prevState.todos, prevState.inputValue],
      inputValue: ''
    }));
  }

  handleItemDelete(index) {
    //标准写法
    this.setState((prevState) => {
      const todos = [...prevState.todos];
      todos.splice(index, 1);
      return {todos}
    });
    
    //旧写法
    // let list = [...this.state.todos];
    // list.splice(index, 1);
    // this.setState({
    //   todos: list
    // })
  }

  getTodoItem() {
    return this.state.todos.map((todo, index)=>{
      return (
        <TodoItem 
          handleItemDel={this.handleItemDelete} 
          key={index}
          todo={todo} 
          index={index}
        />
      )
    });
  }
}

export default TodoList;