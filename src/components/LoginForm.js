import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  updateUsername = (event) => {
      this.setState({
        username: event.target.value
      })
    }

  updatePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  checkFields = (event) => {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.onSubmit
    }
  }



  render() {
    return (
      <form onSubmit={this.checkFields}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.updateUsername} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.updatePassword}  value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
