import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    height: 60px;
    display: flex;
    padding: auto;
    box-shadow: 0px 2px 5px lightgray;
    `
const Wrapper = styled.div`
    padding: 10px 20px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px; 
    padding: 5px;
    cursor: pointer;
`

const Input = styled.input`
    border: none;
    padding: 0;
    &:focus{ outline: none; }
`

const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`;
const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
`

const Logo = styled.h1`
    font-weight: bold;
    font-size: 24px;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                <SearchContainer>
                <Input/>
                <Search style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
                </Left>
                <Center><Logo>Shopper's Island</Logo></Center>
                <Right>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
