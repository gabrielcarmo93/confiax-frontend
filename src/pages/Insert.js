import { useEffect, useState } from 'react';
import { Container, Form, HomeButton } from './styles';
import { Icon } from 'semantic-ui-react'
import api from '../services/api'
import { useHistory } from "react-router-dom"

function Insert() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const signup = async (e) => {
    e.preventDefault()
    if (!email || !name || !age) {
      alert('Preencha todos os Campos')
      return false
    }
    const data = {
      email,
      name,
      age: Number(age)
    }

    const response = await api.post('users', {user: data})

    if (response.data?.error) {
      alert(response.data?.message)
    }

    alert('Criado com Sucesso')

    setEmail('')
    setName('')
    setAge('')
  }
  return (
    <Container>
      <Form>
        <input
          type={'text'}
          placeholder={'e-mail'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type={'text'}
          placeholder={'nome'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type={'text'}
          placeholder={'idade'}
          value={age}
          onChange={(e) => setAge(isNaN(Number(e.target.value)) ? '' : Number(e.target.value))}
        />

        <button
          type={'submit'}
          onClick={signup}
        >
          Cadastrar
        </button>

        <HomeButton
          type={'button'}
          onClick={() => history.push('/')}
        >
          <Icon name={'home'} />
        </HomeButton>
      </Form>
    </Container>
  )
}
  
  export default Insert;