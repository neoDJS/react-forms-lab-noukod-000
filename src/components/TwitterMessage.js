import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      maxChars: this.props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
      maxChars: this.state.maxChars -1
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" maxlength={this.props.maxChars}
                  onChange={event => this.handleChange(event)}
                  value={this.state.value}/>
      </div>
    );
  }
}

export default TwitterMessage;
