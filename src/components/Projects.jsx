import styledComponents from "styled-components";
import img1 from "../assets/photos/Screenshot (7).png";
import img2 from "../assets/photos/Screenshot (1).png";
import img3 from "../assets/photos/Screenshot (2).png";
import img4 from "../assets/photos/Screenshot (8).png";
import img5 from "../assets/photos/Screenshot (9).png";
import img6 from "../assets/photos/Screenshot (10).png";

const Container = styledComponents.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
`
const Title1 = styledComponents.div`
    font-size: 52px;
    font-weight: 400;
    margin: 40px 0 10px 0;
`
const Desc1 = styledComponents.div`
    font-size: 22px;
    color: var(--blue);
    margin-bottom: 80px;
`
const Projectss = styledComponents.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem 2rem;
`
const Project = styledComponents.div`
    position: relative;
    transition: 0.5s;
    width: 280px;
    height:200px;
`
const Hover = styledComponents.div`
    position: absolute;
    background-color: rgba(0,0,0,0.7);
    border-radius: 10px;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
   
    ${Project}:hover & {
        display: flex;
        transform: scale(1.05);
    }
`

const Title = styledComponents.div`
    font-size: 22px;
`
const Img = styledComponents.img`
    width: 280px;
    border-radius: 10%;
    height: 200px;
    overflow: hidden;
    object-fit: cover;
    cursor: pointer;
    transition: 0.3s;
    ${Project}:hover & {
        transform: scale(1.05);
    }
    
 
`

const Desc = styledComponents.div`
    padding: 20px;
`



const Projects = () => {
  return (
    <Container>
        <Title1>
            Projects
        </Title1>
        <Desc1>
            From Ideation to creation these are some projects I have developed
        </Desc1>
        <Projectss>
            <Project>
                <Img src={img1}/>
                <Hover>
                    <Title>ECommerce Website</Title>
                    <Desc>React JS</Desc>
                    <Desc>E Commerce Website which uses multiple functionalities like context api and product listing</Desc>
                </Hover>
            </Project>
            <Project>
                <Img src={img2}/>
                <Hover>
                    <Title>Church Website</Title>
                    <Desc>React JS</Desc>
                    <Desc>Official website for church included blogs & updates 5 day project</Desc>
                </Hover>
            </Project>
            <Project>
                <Img src={img3}/>
                <Hover>
                    <Title>Netflix Clone</Title>
                    <Desc>React JS</Desc>
                    <Desc>Netflix Clone app which fetches data from an API to retrieve information</Desc>
                </Hover>
            </Project>
            <Project>
                <Img src={img4}/>
                <Hover>
                    <Title>Vehicle Recovery Page</Title>
                    <Desc>HTML CSS</Desc>
                    <Desc>Official website for church included blogs & updates 5 day project</Desc>
                </Hover>
            </Project>
            <Project>
                <Img src={img5}/>
                <Hover>
                    <Title>Student Union Website</Title>
                    <Desc>HTML CSS</Desc>
                    <Desc>Official website for church included blogs & updates 5 day project</Desc>
                </Hover>
            </Project>
            <Project>
                <Img src={img6}/>
                <Hover>
                    <Title>Kerala Tourism Website</Title>
                    <Desc>HTML CSS</Desc>
                    <Desc>Official website for church included blogs & updates 5 day project</Desc>
                </Hover>
            </Project>
        </Projectss>
    </Container>
  )
}

export default Projects