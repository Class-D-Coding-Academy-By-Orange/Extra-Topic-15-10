import React, { Component } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

class App extends Component {
  state = {
    isFormValid: false
  };

  receiving = isFormValid => {
    this.setState({isFormValid})
  };

  render() {
    console.log(this.state.isFormValid);
    return (
      <div>
        <Form receiving={this.receiving}></Form>
        <Message isFormValid={this.state.isFormValid}></Message>
      </div>
    );
  }
}

export default App;
