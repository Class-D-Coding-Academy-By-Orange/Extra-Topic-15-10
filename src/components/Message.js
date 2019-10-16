import React, {Component} from "react";

class Message extends Component {
  render() {
    return (
        
      <div>
        <h3 className="text-center message">
          {this.props.isFormValid ? 'Form is Complete!' : 'Form is Incomplete!'}
        </h3>
      </div>
    );
  }
}

export default Message;
