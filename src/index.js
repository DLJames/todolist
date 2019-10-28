import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList';

//方式一
// import Todo from './Todo';

//方式二
import TodoList from './todo-react-redux/TodoList';
import { Provider } from 'react-redux';
import store from './todo-react-redux/store';

const App = (
    <Provider store={store}>
        <TodoList name="James"/>
    </Provider>
);

//方式三
// import TodoList from './education/TodoList';

ReactDOM.render(App, document.getElementById('root'));
