import React from 'react';
import styledComponents from 'styled-components';
import image from '../assets/photos/IMG_0677.JPG'
const Container = styledComponents.div`
    height: 100vh;
    width: 100vw;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styledComponents.div`
    flex: 1;
`
const Right = styledComponents.div`
    flex: 2;
    margin: 20px 10px;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
const Title = styledComponents.div`
    font-size: 26px;
    font-weight: 600;
    margin-left: 12px;
    align-text: left;

`
const Description = styledComponents.div`
    margin-top: 25px;
    width: 500px;


`
const P = styledComponents.div`
    font-size: 16px;
    margin-bottom: 20px;
`
const B = styledComponents.div`
font-size: 17px;    
font-weight: 600;
margin-bottom: 10px;
`
const Button = styledComponents.button`
    padding: 20px;
    background-color: black;
    // background-color:var(--blue);
    color: white;
    // color:var(--blue);
    font-size: 15px;
    border: none;
`

const Image = styledComponents.img`
    width: 380px;
    height: 380px;
    object-fit: cover;
    padding: 10px;
    border-radius: 50%;
`

const Aboutme = () => {
  return (
    <Container>
        
        <Right>
            <Title>
                Hello! I'm Anil Antony </Title>       
                <Title>A Front End Developer
                From Bangalore India</Title>
        
            <Description>
                <P>
                After passing out as biology student after +2 my aspiration was to to tell stories, 
                and thats when I realised my college doesn't offer a film degree and  I started doing my Bachelors in Computer Science, 
                I was creating videos trying to to tell inspiring stories. 
                </P>
                <P>That's when I was asked upon to create a website for my church, and thats when I entered the world of code and realized the modern way of telling stories is through technology, I created a react app with no prior knowledge about react in 5 days and delivered the website and thats why I started learning and acquring a strong understanding of javascript React and CSS.
                </P>
                <P>As a developer I find a lot of joy and exitement utilizing my skills to help troubleshoot bugs and pushing projects forward. I enjoy learning new technologies and growing in a field that is contantly pushed.</P>  
               <P> Feel free to connect with me lets talk about web dev , tech , sports , filmmaking and cooking or how I can be of help to your team or business. I'd love to connect with other dreamers and grow together. </P>
                <B>Lets build something cool:</B>
               {/* <B>Mail:</B> <P> anilantony3134@gmail.com</P>
                <B>Phone:</B> <P> +91 9037210582</P> */}
                <B>LinkedIn:</B><P> https://www.linkedin.com/in/anil-antony-24b3461b7</P> 
                <B>Github:</B><P> https://github.com/AnilAntony3134</P>
                <Button> Resume </Button>
            </Description>
        </Right>
        <Left>
        <Image src={image} />
        </Left>
    </Container>
  )
}

export default Aboutme