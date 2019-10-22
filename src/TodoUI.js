import React from 'react';
import { Input, List, Button } from 'antd';

const TodoUI = (props) => {
	return (
		<div>
			<Input
				placeholder="pleace enter your todo"
				value={props.inputVal}
				allowClear
				onChange={props.handleInputChange}
				style={{ width: '300px', margin: '15px 30px' }}
			/>
			<Button onClick={props.handleAdd} type="primary">提交</Button>
			<List
					bordered
					style={{width: '300px', marginLeft: '30px'}}
					dataSource={props.list}
					renderItem={item => (
						<List.Item>
							<List.Item.Meta 
								title={item}
							/>
							<div onClick={() => {props.handleDelItem(item)}} style={{cursor: 'pointer'}}>X</div>
						</List.Item>
					)}
				/>
		</div>
	);
}

export default TodoUI;