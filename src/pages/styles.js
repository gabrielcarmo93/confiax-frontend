import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  flex-direction: ${props => props.row ? 'row' : 'column'}
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;
`

export const Button = styled.button`
  border: 1px solid rgba(200, 200, 200, 1);
  width: 40%;
  height: 80%;
  background-color: #24A0ED;
  border-radius: 8px;
  cursor: pointer;
  color: white;

  :hover {
    opacity: .8;

    transition: .3s all
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > input {
    border: 0;
    border-radius: 4px;
    min-width: 400px;
    padding: 13px 10px;
  }

  > button {
    border: 0;
    border-radius: 4px;
    min-width: 400px;
    padding: 13px 10px;
    background-color: #24A0ED;
    color: white;
    cursor: pointer;

    : hover {
      opacity: .8;

      transition: .3s all
    }
  }
`

export const HomeButton = styled.button`
  border: 0;
  border-radius: 4px;
  min-width: 400px;
  padding: 13px 10px;
  background-color: #24A0ED;
  color: white;
  cursor: pointer;

  : hover {
    opacity: .8;

    transition: .3s all
  }
`