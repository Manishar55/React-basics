
// function App() {
//   return (
//     <div>
//       <h1>Welcome to react App</h1>
//     </div>
//   );
// }
//creating a  functional component
import React from 'react';

function App() {
  return React.createElement(
      'div',
       {}, 
       React.createElement('h1', {}, 'welcome to react'),
       React.createElement('button', {}, 'click')
       
       );
}

export default App;
