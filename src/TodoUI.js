import React, { Component } from 'react';
import { Input, List, Button } from 'antd';

class TodoUI extends Component {
	render() {
		return (
			<div>
				<Input
					placeholder="pleace enter your todo"
					value={this.props.inputVal}
					allowClear
					onChange={this.props.handleInputChange}
					style={{ width: '300px', margin: '15px 30px' }}
				/>
				<Button onClick={this.props.handleAdd} type="primary">提交</Button>
				<List
            bordered
            style={{width: '300px', marginLeft: '30px'}}
            dataSource={this.props.list}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta 
                  title={item}
                />
                <div onClick={(item) => {this.props.handleDelItem(item)}} style={{cursor: 'pointer'}}>X</div>
              </List.Item>
            )}
          />
			</div>
		);
	}
}

export default TodoUI;