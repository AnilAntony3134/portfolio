import styledComponents from "styled-components"
import { mobile } from "../responsive"

const Container = styledComponents.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 25vh;
    align-items: center;
    background-color: black;
    color: white;
    padding-top: 25px;
    ${mobile({ height: "100%" , paddingBottom: "20px" })}
`
const Title = styledComponents.div`
    font-size: 40px;
`

const Desc = styledComponents.div`
    font-size: 20px;
    color: var(--blue);
    text-align: center;
`

const Items = styledComponents.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    ${mobile({ flexDirection: "column" , })}
`

const Item = styledComponents.div`
    display: flex;
    flex-direction: column;
    justfiy-content: center;
    align-items: center;
    ${mobile({ marginBottom: "20px" })}
`

const Title1 = styledComponents.div`
    font-size: 16px;
`
const Desc1 = styledComponents.div`
    font-size: 20px
`


const Contact = () => {
  return (
    <Container>
        <Title>
            Contact Info
        </Title>
        <Desc>
            Feel free to contact me for career prospects, business services and other professional enquiries
        </Desc>
        <Items>
        <Item>
            {/* <Icon>
                <GoLocation />
            </Icon> */}
            <Title1>
                Location
            </Title1>
            <Desc1>
                Bengaluru, Karnataka
            </Desc1>
        </Item>
        <Item>
            {/* <Icon>
                <FiPhoneCall />
            </Icon> */}
            <Title1>
                Phone
            </Title1>
            <Desc1>
                9037210582
            </Desc1>
        </Item>
        <Item>
            {/* <Icon>
                <HiMail />
            </Icon> */}
            <Title1>
                Mail
            </Title1>
            <Desc1>
                anilantony3134@gmail.com
            </Desc1>
        </Item>
        </Items>
    </Container>
  )
}

export default Contact
