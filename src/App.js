import './App.css';
import { BrowserRouter} from "react-router-dom";
import { Aboutme, Contact, Header, Navbar, Projects ,Skills} from "./components"
// import { Routers } from 'react-routers';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    {/* <Routes> */}
      <Navbar />
      <Header />
      <Aboutme />
      <Projects />
      <Skills />
      <Contact/>
      {/* </Routes> */}
    </div>
    </BrowserRouter>
    
  );
}

export default App;
