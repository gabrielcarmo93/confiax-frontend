import { Container, Wrapper, Button } from './styles';
import { useHistory } from "react-router-dom"

function Home() {
  const history = useHistory()
  return (
    <Container>
      <Wrapper>
        <Button onClick={() => history.push('/insert')}>
          Inserir
        </Button>
        <Button onClick={() => history.push('/list')}>
          Listar
        </Button>
      </Wrapper>
    </Container>
  )
}

export default Home;