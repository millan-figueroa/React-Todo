import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {};
  }


  render() {
    return (
      <div>
        <h2>Millan's ToDo App</h2>
        <ul>
          <li>List</li>
        </ul>
        <input placeholder="...todo"></input>
        <button>Add Item</button>
        <button>Done</button>
      </div>
    );
  }
}

export default App;
