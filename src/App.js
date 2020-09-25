import React, {Component} from 'react';
import Hello from './Hello.js';
class App extends Component {
  incrementCounter = this.incrementCounter.bind(this)
  state = {
    counter: 0,
    todos : {}
  };
// incrementCounter = () => {
//   console.log("here")
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }

componentWillMount(){
  console.log("Iam componentWillMount")
}


componentDidMount(){
  console.log("Iam componentDidMount")
  fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => this.setState({ todos: data }));
}

componentWillUpdate(){
    console.log("Iam componentWillUpdate")
}

incrementCounter (){
  this.setState({
      counter: this.state.counter + 1
    });
}

  
render() {
  console.log("iam render")
  console.log(JSON.stringify(this.state.todos));
    return (<React.Fragment><div className="App">
      <Hello counter={this.state.counter} onCount={this.incrementCounter}/>
    </div></React.Fragment>);
  }
}
export default App;