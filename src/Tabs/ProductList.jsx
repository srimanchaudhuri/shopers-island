import React, {useState, useEffect} from 'react'
import { styled } from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom'


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
    const location = useLocation()
    const category = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")
    const handleFilters = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
            [e.target.name] : value,
        })
    }

  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name='color' onChange={handleFilters}>
                <Option>color</Option>
                <Option>white</Option>
                <Option>red</Option>
                <Option>black</Option>
                <Option>yellow</Option>
                <Option>green</Option>
                <Option>blue</Option>
            </Select>
            <Select name='size' onChange={handleFilters}>
                <Option>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={e=>setSort(e.target.value)}>
                <Option value="newest">Newest</Option>
                <Option value="asc">Price (asc)</Option>
                <Option value="desc">Price (desc)</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <Products cat={category} filters={filters} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
