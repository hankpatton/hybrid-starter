import React, { Component } from 'react';
import Users from '../../components/Users'

class UsersContainer extends Component {
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
      <Users users={this.state.users} />
    );
  }
}

export default UsersContainer;
