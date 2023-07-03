import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

const Title = styled.h1`
    font-weight: 200;
    font-size: 36px;
`
const Description = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 36px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option`
    
`
const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`

    width: 30;
    height: 30;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    
`



const Button = styled.button`
    transition: all 0.5s ease;
    border-radius: 4px;
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
        
    }
`

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImageContainer>
            <Image src = "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"/>
        </ImageContainer>
        <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium quo id quaerat, nobis veritatis consequuntur soluta quae possimus. Reiciendis asperiores magnam quisquam sint fuga consequuntur similique, pariatur assumenda! Reiciendis?</Description>
            <Price>$ 20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color:</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="red"/>
                    <FilterColor color="gray"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size:</FilterTitle>
                    <FilterSize> 
                        <FilterSizeOption>
                            XS
                        </FilterSizeOption>
                        <FilterSizeOption>
                            S
                        </FilterSizeOption>
                        <FilterSizeOption>
                            M
                        </FilterSizeOption>
                        <FilterSizeOption>
                            L
                        </FilterSizeOption>
                        <FilterSizeOption>
                            XL
                        </FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
