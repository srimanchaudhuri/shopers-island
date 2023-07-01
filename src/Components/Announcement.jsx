import { styled } from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #009688;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`
const Announcement = () => {
  return (
    <div>
      <Container>
        Super Deal! Free Shiping on orders over $50
      </Container>
    </div>
  )
}

export default Announcement
