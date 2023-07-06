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
    width: 40%;
    background-color: white;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Agreement = styled.div`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder='first name'/>
            <Input placeholder='last name'/>
            <Input placeholder='username'/>
            <Input placeholder='email'/>
            <Input placeholder='password'/>
            <Input placeholder='consirm password'/>
            <Agreement>
              By creating an account, I consent to the processing of my personal data
              in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
