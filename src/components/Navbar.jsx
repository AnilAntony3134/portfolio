import { Link } from "react-router-dom"
import styledComponents from "styled-components"

const Container = styledComponents.div`
    display: flex;
    background-color: #000000;
    color: white;
    height: 60px;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 999;
`
const Left = styledComponents.div`
    flex: 1;
`
const Title = styledComponents.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 12px;
    margin-top: 12px;
    font-size: 28px;
`
const T1 = styledComponents.div`
    // font-size: 25px;
    font-weight: 400;
`
const T2 = styledComponents.div`
    color: var(--blue);
    font-weight: 400;
`
const Center = styledComponents.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Items = styledComponents.div`
    margin-right: 15px;
    margin-top: 10px;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        color:var(--blue);
    }
`
const Right = styledComponents.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`
const Img = styledComponents.img`
    width: 55px;
    background-color: #000000;
    filter: invert(100%); 

`
const style =
{
    textDecoration: "none",
    color: "white",
}


const Navbar = () => {
  return (
      <Container>
          <Left>
            <Title>
                <T1>
                    Anil
                </T1>
                <T2>
                    Antony
                </T2>
            </Title>
          </Left>
          <Center>
            <Items>
                Home
            </Items>
            <Items>
                About
            </Items>
            <Items>
                Work
            </Items>
            <Items>
                Skills
            </Items>
            <Items>
                Contact
            </Items>
          
          </Center>
          <Right>
          <a target="_blank" href="https://github.com/AnilAntony3134" style={style}>
              <Img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png">
              </Img>
 
              </a>
          
          </Right>
      </Container>
  )
}

export default Navbar