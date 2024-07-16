
// import Component1 from './Component1.js';
import Todo from './Todo.js';
// import info from './info.js'

function App() {
  // const todos=['todo1', 'todo2', 'todo3'];
  const todos=[{data: 'todo1', id: 4}, {data: 'todo2', id: 76}, {data: 'todo3', id: 48}]; //2
  return (
    <Todo TodoLists={todos}/>
    // <Component1/> 
  );
}

export default App;
