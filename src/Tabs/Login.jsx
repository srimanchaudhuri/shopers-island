import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)) ,url("https://img.freepik.com/free-photo/full-shot-woman-online-fashion-shopping_23-2150460083.jpg?w=2000&t=st=1688640292~exp=1688640892~hmac=8cf5e93ba6e30bba9b99ca35c0b82a6a6ce3db0e8b5d7a49573922e503ec125a") center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: none;
    background-color: teal;
    color: white;
    margin-bottom: 10px;
    cursor: pointer;
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
          <Form>
            <Input placeholder='username'/>
            <Input placeholder='password'/>
            <Button>LOGIN</Button>
            <Link>FORGOT PASSWORD...</Link>
            <Link>CREATE NEW ACCOUNT</Link>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
