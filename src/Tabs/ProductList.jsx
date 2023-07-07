import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { mobile } from '../Responsive'


const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;
    font-size: 28px;
    font-weight: 600;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0px 20px" , display: "flex", flexDirection: "column"})}

`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0" })}

`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}

`

const Option = styled.option`
    
`

const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <Option disable selected>Color</Option>
                <Option>White</Option>
                <Option>Red</Option>
                <Option>Black</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
                <Option>Blue</Option>
            </Select>
            <Select>
                <Option disable selected>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
                <Option selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
