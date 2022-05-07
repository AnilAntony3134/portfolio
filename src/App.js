import './App.css';
import { Aboutme, Contact, Header, Navbar, Projects ,Skills} from "./components"

function App() {
  return (
    <div className="App">
       <Navbar />
      <Header />
      <Aboutme />
      <Projects />
      <Skills />
      <Contact/> 
      
    </div>
  );
}

export default App;
