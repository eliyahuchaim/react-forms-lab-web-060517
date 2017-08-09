import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input:'',
      num: 0,
      value: 0
    };
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    })
  }

  doTheFuckingMath = () => {
    return this.props.maxChars - this.state.input.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.input} />
        <p>{this.doTheFuckingMath()} </p>
        <p>{this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
