import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../Responsive'
import {useLocation} from 'react-router-dom'
import { publicRequest } from '../requestMethod'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px" , flexDirection: "column"})}
`

const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
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
    ${mobile({ width: "100%" })}

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
    ${mobile({ width: "100%" })}

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
    margin: 0px 10px;
    padding: 10px;
    
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
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({});
    const [color, setColor] = useState("");
    const [size, setSize] = useState(""); 
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
        try {
            const res = await publicRequest.get("/products/find/" + id)
            setProduct(res.data)
        } catch (err) {
            console.log(err)
        }
    }
        getProduct()
    },[id])

    const handleQuantity = (type) => {
        if(quantity > 1 && type === "dec") setQuantity(prev => prev - 1)
        else if(type === "inc") setQuantity(prev => prev + 1)
    }

    const handleClick = () => {
        dispatch(addProduct({...product, quantity, color, size}))
    }

  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImageContainer>
            <Image src = {product.img}/>
        </ImageContainer>
        <InfoContainer>
            <Title>{product.title}</Title>
            <Description>{product.desc}</Description>
            <Price>$ {product.price}</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color:</FilterTitle>
                    {product.color?.map((c) => (
                        
                        <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
                    ))}
                </Filter>
                <Filter>
                    <FilterTitle>Size:</FilterTitle>
                    <FilterSize onChange={(e) => setSize(e.target.value)}>
                        {product.size?.map((s) => (
                        <FilterSizeOption key={s}>
                            {s}
                        </FilterSizeOption>
                        ))}
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove onClick={()=>handleQuantity("dec")}/>
                    <Amount>{quantity}</Amount>
                    <Add onClick={()=>handleQuantity("inc")}/>
                </AmountContainer>
                <Button onClick={handleClick}>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
