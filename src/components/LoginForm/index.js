import React, { Component } from 'react'

export default class LoginForm extends Component {

  constructor() {
    super();
    this.myInput = React.createRef();
  }

  state = {
    inputValue: '',
  };

  componentDidMount() {
    // console.log(this.myInput);
    this.myInput.current.focus();
  }


  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    const { inputValue } = this.state;


    return (
      <div>
        <label>
          <span>Login:</span>
          <input
            type="text"
            name="login"
            ref={this.myInput}
            // autoFocus={true}
            value={inputValue}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          <span>Password:</span>
          <input type="password" name="passwords"
          />
        </label>
      </div>
    )
  }
}
