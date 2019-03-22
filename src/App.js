import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';

const todoArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
},
{
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
}
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      todos: todoArray,
    };
  }


  render() {
    return (
      <div>
        <h2>Millan's ToDos={this.state.todos}</h2>        
          <input placeholder="add list item"></input>
            <button>Add Item</button>
            <button>Done</button>
      </div>
    );
  }
}

export default App;
