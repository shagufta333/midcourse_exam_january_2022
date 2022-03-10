import React from 'react'
import Title from './components/Title'
import GHSearch from './components/GHSearch'
import { Container } from 'semantic-ui-react'
import UserList from './components/UserList'

const App = () => {
  return (
    <Container>
      <section name='title'>
        <Title />
      </section>
      <section name='main'>
        <GHSearch/>
      </section>
      <section name='list'>
        <UserList/>
      </section>
    </Container>
  )
}

export default App
