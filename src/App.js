import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    loading: false,
    users: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    try {
      this.setState({ loading: true })
      const res = await fetch('/api/users')
      const users = await res.json()
      this.setState({
        users,
        loading: false
      })
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }

  render() {
    if(this.state.loading) {
      return (
        <div>LOADING!!!!</div>
      )
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className='user-list'>this is a list of users</div>
        {this.state.users.map((user, i) => {
          return (
            <div className='list-item'>{user.name}</div>
          )
        })}
      </div>
    );
  }
}

export default App;
