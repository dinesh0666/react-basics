import React, {Component} from 'react';
class Hello extends Component {
render() {
  //console.log("props",this.props)
    return (<div>
      <p>Counter: {this.props.counter}</p>
      <button onClick={this.props.onCount}>
      Increment counter</button>
    </div>);
  }
}
export default Hello;