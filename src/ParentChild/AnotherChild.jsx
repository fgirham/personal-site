import Button from "components/Button";
import React from "react";

class AnotherChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }
  componentDidMount () {
    this.props.onRef(this);
  }
  click (msg) {
    let count = this.state.counter;
    this.setState({
      counter: count + 1,
    })
    console.log("this is", msg)
  }
  render () {
    return (
      <>
        <h1>Another Children : { this.state.counter }</h1>
        <br />
        <Button
          onClick={this.click.bind(this, 'child append')}
          value={'I\'m the other children button'} 
        />
      </>
    )
  }
}

export default AnotherChild;