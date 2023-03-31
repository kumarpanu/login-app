// Write your code here

import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  onClickButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="main-container">
        <div className="inside-container">
          {isLogin ? (
            <h1 className="heading">Welcome User</h1>
          ) : (
            <h1 className="heading">Please Login</h1>
          )}
          {isLogin ? (
            <button
              className="button"
              type="button"
              onClick={this.onClickButton}
            >
              Logout
            </button>
          ) : (
            <button
              className="button"
              type="button"
              onClick={this.onClickButton}
            >
              Login
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Home
