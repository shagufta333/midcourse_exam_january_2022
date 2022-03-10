import React, { Component } from "react";
import axios from "axios";
import { Item, ItemExtra } from 'semantic-ui-react';


class UserList extends Component{
  state = { users: [] }
  
  componentDidMount() {
    this.getUsers()
  }

  getUsers = async () => {

    let userData = await axios.get('https://reqres.in/api/users')
    this.setState({ users: userData.data.data})
  }
  render() {
    let userList = this.state.users.map(user => {
      return (
        <li key={user.id} className='users-item'>
          <p>{user.first_name} {user.last_name }</p>
        </li>
      )
    })
    return (
      <ui id='users-list'>
         {userList}
      </ui>
    )
  }
}

export default UserList