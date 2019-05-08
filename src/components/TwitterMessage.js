import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" maxlength={this.props.maxChars}/>
      </div>
    );
  }
}

export default TwitterMessage;
