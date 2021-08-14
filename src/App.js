import React from 'react';
import Print from './New';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      value: 0
    }
  }

  Increment = () => {
    this.setState({ value: this.state.value + 1});
  }

  Decrement = () => {
    this.setState({ value: this.state.value - 1});
  }

  render() {
    return (
      <div>
       Parent Component
       <Print text="Child Component Here"/>
       <h1>{this.state.value} </h1>
       <button onClick={this.Increment}>Increment</button>
       <button onClick={this.Decrement}>Decrement</button>
      </div>
    )
  }
}

export default App;