import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Announcement from '../Components/Announcement'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-size: 30px;
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
    font-size: 32px;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type == "total" && 500};
    font-size: ${props=>props.type == "total" && "24px"};

`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && "none"};
    background-color: ${props => props.type === 'filled' ? "black" : "transparent"};
    color:  ${props => props.type === 'filled' && "white"};
`

const TopTexts = styled.div`

`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
display: flex;
    flex: 2;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #${props=>props.color};
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const ProductSize = styled.span`
    
`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProductAmount = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const Amount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText >Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src='https://img.freepik.com/free-photo/ice-coffee-with-whipped-cream_144627-3801.jpg?w=1060&t=st=1688642610~exp=1688643210~hmac=ceb8b55cbf5838308777e62c4d790810efbf59e5470249cbb11e7d668d9bbfc7'/>
                        <Details>
                            <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                            <ProductId><b>ID:</b> 2343243253</ProductId>
                            <ProductColor color="0769C3"/>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmount>
                            <Add/>
                            <Amount>2</Amount>
                            <Remove/>
                        </ProductAmount>
                        <ProductPrice>$ 30</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src='https://img.freepik.com/free-photo/ice-coffee-with-whipped-cream_144627-3801.jpg?w=1060&t=st=1688642610~exp=1688643210~hmac=ceb8b55cbf5838308777e62c4d790810efbf59e5470249cbb11e7d668d9bbfc7'/>
                        <Details>
                            <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                            <ProductId><b>ID:</b> 2343243253</ProductId>
                            <ProductColor color="0769C3"/>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmount>
                            <Add/>
                            <Amount>2</Amount>
                            <Remove/>
                        </ProductAmount>
                        <ProductPrice>$ 30</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 60</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Detail</SummaryItemText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$ 60</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart