import React from './Todo';

const TodoList = props => props.todoList.map( todoItem =>
    <Todo key={todoItem.id} task={todoItem.task} />
);

export default TodoList;