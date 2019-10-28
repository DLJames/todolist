import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from './store/actionCreators';

const mapStateToProps = (state, ownProps) => {
  const { inputVal, list } = state;
  const { name } = ownProps;
  return {
    inputVal,
    list,
    name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeInput(e) {
      const action = Action.changeInput(e.target.value);
      dispatch(action);
    },
    handleClick() {
      const action = {
        type: 'add_todo'
      }
      dispatch(action);
    }
  }
}

class TodoList extends Component {
  render() {
    const { name, inputVal, list, handleChangeInput, handleClick } = this.props;
    return (
      <div>
        <div>name: {name}</div>
        <div>
          <input value={inputVal} onChange={handleChangeInput} />
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return (<li key={index}>{item}</li>);
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);