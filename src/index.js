// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//   return 'Click on me!';
// }

// Create a react component
const App = () => {
  //   const buttonText = 'Click Me!';
  //   const buttonText = 123456;
  //   const buttonText = ['Hi','There'];
  //   const buttonText = [10, 20];
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter Name:';
  return (
    <div>
      <label className='label' htmlFor='name'>
        {labelText}
      </label>
      <input id='name' type='text' />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
