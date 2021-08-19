import { Container, HomeButton } from './styles';
import { Table } from "semantic-ui-react";
import api from '../services/api'
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
import { Icon } from 'semantic-ui-react'

function List() {
  const history = useHistory()
  const [users, setUsers] = useState([])

  async function getUsers() {
    const response = await api.get('/users')

    if (response.data.length) {
      setUsers(response.data)
    }
  }

  useEffect(() => {
    if (!users.length)
      getUsers()
  }, [users])
  return (
    <>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Idade</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            users.map(user => (
              <Table.Row>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.age}</Table.Cell>
              </Table.Row>
            ))
          }
          
        </Table.Body>
      </Table>

      <HomeButton
        type={'button'}
        onClick={() => history.push('/')}
      >
        <Icon name={'home'} />
      </HomeButton>
    </>
  )
}

  export default List;