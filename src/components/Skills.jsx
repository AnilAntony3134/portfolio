import styledComponents from "styled-components"
import { FaReact } from 'react-icons/fa';
import { SiRedux, SiJavascript , SiNetlify } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5' ;
import { DiJqueryLogo, DiCss3 } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
// import { BsFillBootstrapFill } from 'react-icons/bs';
import { mobile } from "../responsive";


const Container = styledComponents.div`
    height: 80vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styledComponents.div`
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 20px;
`
const Description = styledComponents.div`
    font-size: 22px;
    color: var(--blue);
    margin-bottom: 20px;
    text-align: center;
    ${mobile({ fontSize: "18px" })};
`
const Icons = styledComponents.div`
    display: grid;
    margin-top: 25px;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4rem 2rem;
    ${mobile({  gridTemplateColumns: "repeat(3, 1fr)",})}
`
const Icon = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover{
        transform: scale(1.1)
    }
`
const P = styledComponents.div`
    font-size: 20px;
`

const Skills = () => {
  return (
    <Container>
        <Title>
            Skills
        </Title>
        <Description>
            Languages and Technologies that I have learned and apllied in my projects.
        </Description>
        <Icons>
        <Icon>
            <FaReact />
            <P>React</P>
        </Icon>
        <Icon>
            <SiJavascript />
            <P>JavaScript</P>
        </Icon>
        <Icon>
            <SiRedux />
            <P>Redux</P>
        </Icon>
        <Icon>
            <DiJqueryLogo />
            <P>JQuery</P>
        </Icon>
        <Icon>
            <AiFillHtml5 />
            <P>HTML 5</P>
        </Icon>
        <Icon>
            <DiCss3 />
            <P>CSS 3</P>
        </Icon>
        <Icon>
            <IoLogoFirebase />
            <P>Firebase</P>
        </Icon>
        <Icon>
            <SiNetlify />
            <P>Netlify</P>
        </Icon>
        {/* <Icon>
            <BsFillBootstrapFill />
            <P>BootStrap</P>
        </Icon> */}
        </Icons>
    </Container>
  )
}

export default Skills