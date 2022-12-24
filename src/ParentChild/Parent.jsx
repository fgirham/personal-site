import React from "react";
import Child from "./Child";
import Button from "components/Button";
import AnotherChild from "./AnotherChild";
import NavBar from "components/NavBar";

class Parent extends React.Component {
  onClick (msg) {
    this.child.click(msg);
  }
  onSubmit (msg) {
    this.form.click(msg);
  }
  render () {
    return (
      <div className="container">
        <NavBar />
        <Child onRef={ref => (this.child = ref)} />
        <br />
        <Button 
          onClick={this.onClick.bind(this, 'parent append')} 
          value={'I\'m parent button'}
        />
        <br />
        <AnotherChild onRef={ref => (this.form = ref)} />
        <br />
        <Button 
          onClick={this.onSubmit.bind(this, 'parent append 2nd')} 
          value={'I\'m parent button 2'}
        />
      </div>
    )
  }
}

export default Parent;