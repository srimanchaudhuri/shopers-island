import { styled } from "styled-components"

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: #ffffff;
    font-size: 20px;
    font-weight: 1000;
    opacity: 0.75;
`
const Button = styled.button`
    margin-top: 20px;
    background-color: transparent;
    color: beige;
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    font-weight: 200px;
    box-shadow: 1.5px 1.5px 1.5px 1.5px black;
    height: 40px;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
