import styledComponents from "styled-components"
import { FaReact } from 'react-icons/fa';
import { SiRedux, SiJavascript , SiNetlify , SiStyledcomponents } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5' 
  


const Container = styledComponents.div`  
    // background: linear-gradient(#1b1b1b,#1a1a1a);
    background-color: black;
    height: 100vh;
    width: 100vw;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: white;

`
// const Circle = styledComponents.div`
// width: 350px;
// height: 350px;
// border-radius: 50%;
// background: rgb(30,97,151);
// background: linear-gradient(267deg, rgba(30,97,151,1) 0%, rgba(255,255,255,1) 78%);
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// `
const Title = styledComponents.div`
   font-size: 55px;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
`
const T1 = styledComponents.div`
    color:var(--blue);
    font-weight: 400;
`
const T2 = styledComponents.div`
   font-weight: 200;
   transition: color .9s ease-in-out, box-shadow .9s ease-in-out;
   &:hover{
    box-shadow: inset 600px 0 0 0 var(--blue);
    color: var(--white);
   }
`
const Subtitle1 = styledComponents.div`
   font-size: 20px;
   margin-bottom: 20px;
`
// const Rectangle1 = styledComponents.div`
//    background-color: #f3f3f3;
//    padding: 20px;
//    width: 95px;
//    border-radius: 10px;
//    position: absolute;
//    left: 60px;
// `
const Text = styledComponents.div`
    display: flex;
   font-size: 20px;
   margin: 10px;
   margin-bottom: 20px;
`
const Button = styledComponents.button`
   font-size: 20px;
   padding: 20px 60px;
   background-color: var(--blue);
   color: white;
   border: none;
   border-radius: 10px;
   transition: 0.5s;
   cursor: pointer;
   &:hover{
       background-color: #be0d60;
   }
`
const Icons = styledComponents.div`
    display: flex;
    margin-bottom: 20px;
`
const Icon = styledComponents.div`
    margin-right: 25px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover{
        transform: scale(1.3);
    }
`


const Header = () => {
  return (
    <Container>
        <Title>
        <Subtitle1>
            Hi, 
        </Subtitle1>
            <T1>
            I'am Anil
            </T1>
            <T2>
               Front End Developer
            </T2>
            <Text>High Level Experience in web design and development knowledge, producing high quality works.</Text>
            <Icons>
                <Icon>
                    <FaReact />
                </Icon>
                <Icon>
                    <SiRedux />
                </Icon>
                <Icon>
                    <IoLogoFirebase />
                </Icon>
                <Icon>
                    <SiNetlify />
                </Icon>
                <Icon>
                    <SiJavascript />
                </Icon>
                <Icon>
                    <SiStyledcomponents />
                </Icon>
            </Icons>
            <Button>More About Me</Button>        
        </Title>
{/* 
        <Rectangle1>
            <Text>Front End Developer</Text>
        </Rectangle1>
        <Rectangle2>
            <Text>Web Designer</Text>
        </Rectangle2> */}
    </Container>
  )
}

export default Header