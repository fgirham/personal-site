import Button from "components/Button";
import React from "react";

class Child extends React.Component {
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
        <h1>Children : { this.state.counter }</h1>
        <br />
        <Button
          onClick={this.click.bind(this, 'child append')}
          value={'I\'m children button'} 
        />
      </>
    )
  }
}

export default Child;