import React, { Component } from 'react';
import './style.css';
import TodoItem from './TodoItem';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class TodoList extends Component{
  state = {
    inputValue: '',
    todos: [],
    show: true
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

  componentWillMount() {
    console.log('componentWillMount...',this.el, this.state)
  }

  componentDidMount() {
    axios.get('/api/todolist').then((res) => {
      this.setState(() => ({
        todos: [...res.data.list]
      }));
    }).catch((err) => {
      console.log('err==', err);
    });
  }

  // 组件从父组件接受了参数
  // 组件第一次render在父组件中，不会执行
  // 组件再次render在父组件的时候，会被执行
  // 换言之，当子组件接受了父组件的参数后并render在父组件后，父组件执行render函数后会执行该函数
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps...')
  }

  // 组件被更新之前，会自动调用，返回true render钩子执行；false render钩子不执行
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate...')
    return true;
  }

  // 组件被更新之前，shouldComponentUpdate函数之后，会被自动调用
  // 如果shouldComponentUpdate返回true会被执行
  componentWillUpdate() {
    console.log('componentWillUpdate...')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate...')
  }

  // 组件即将被从页面中剔除的时候执行，执行在父组件render之后，componentDidUpdate之前
  componentWillUnmount() {
    console.log('componentWillUnmount...')
  }

  render() {
    console.log('render...',this.el, this.state)
    return (
      <>
        {/* 这是一个注释 */}
        <div className="inputCon">
          <label htmlFor="insertArea">输入内容</label>
          <input 
            id="insertArea"
            value={this.state.inputValue} 
            placeholder="enter your todos"
            onChange={this.handleInputChange}
            ref={(input) => {this.todoInput = input}}
            />
          <button onClick={this.handleClick}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </>
    );
  }

  handleInputChange(e) {
    // const value = e.target.value;
    const value = this.todoInput.value;
    this.setState(() => ({
        inputValue: value
      }));
  }

  handleClick() {
    this.setState((prevState) => ({
      // todos: prevState.todos.concat([prevState.inputValue]),
      todos: [...prevState.todos, prevState.inputValue],
      // todos: [prevState.inputValue, ...prevState.todos],
      inputValue: ''
    }));
  }

  handleItemDelete(index) {
    //标准写法
    this.setState((prevState) => {
      const todos = [...prevState.todos];
      todos.splice(index, 1);
      return {
        todos
      }
    });
    
    //旧写法
    // let list = [...this.state.todos];
    // list.splice(index, 1);
    // this.setState({
    //   todos: list
    // })
  }

  getTodoItem() {
    return (
      <TransitionGroup>
        {
          this.state.todos.map((todo, index)=>{
            return (
              <CSSTransition
                appear={true}
                timeout={1000}
                unmountOnExit
                classNames="fade"
                onEntered={(el)=>{el.style.color="red"}}
                key={index}
              >
                <TodoItem 
                  handleItemDel={this.handleItemDelete} 
                  todo={todo} 
                  index={index}
                />
              </CSSTransition>
            )
          })
        }
      </TransitionGroup>
    )
  }
}

export default TodoList;