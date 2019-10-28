import React from 'react';
import store from './store';

class Child extends React.Component {
  constructor() {
    super();

    // this.state = store.getState();
    const { list } = store.getState();
    this.state = {
      num: list.length,
      name: 'James'
    }
    store.subscribe(() => {
      // this.setState(store.getState());
      const list = store.getState().list;
      this.setState(() => ({
        num: list.length
      }))
    });
    }
  render() {
    const { num, name } = this.state;
    return <div>hey!{name} 你已经添加了 {num} 个TODO，快快完成他们吧。</div>
  }
}

export default Child;