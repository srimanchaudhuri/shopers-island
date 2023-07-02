import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    font-size: 30px;
    font-weight: 550;
`
const Desc = styled.p`
    margin: 20px 0px;
    line-height: 16pt;
`
const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shopeer's Island</Logo>
        <Desc>Discover the perfect blend of style, quality, and convenience at Shopper's Island. 
            We strive to provide an exceptional online shopping experience, offering an extensive collection of Wearables to suit every taste and occasion.
            From trendy fashion essentials to innovative gadgets, our curated selection ensures that you stay ahead of the curve.
            Enjoy seamless browsing, secure transactions, and lightning-fast shipping, as we bring the joy of shopping right to your doorstep.
            Elevate your lifestyle with Shopper's Island – where shopping meets satisfaction.</Desc>
        <SocialContainer>
            <SocialIcon color="3B5999"><Facebook/></SocialIcon>
            <SocialIcon color="E44054"><Instagram/></SocialIcon>
            <SocialIcon color="55ACEE"><Twitter/></SocialIcon>
            <SocialIcon color="E60023"><Pinterest/></SocialIcon>
        </SocialContainer>
        </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right></Right>
    </Container>
  )
}

export default Footer