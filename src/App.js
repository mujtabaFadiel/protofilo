import Intro from "./component/Intro";
import About from "./component/About";
import PorductList from "./component/ProductList/PorductList";
import Contact from "./component/contact/Contact";
import Toggle from "./component/toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
      <div className='App' style={{
        backgroundColor: darkMode ? "#fff" : "#222", 
        color: !darkMode && 'white'
        }}>
          <Toggle />
          <Intro />
          <About />
          <PorductList />
          <Contact />
      </div>
  )
}

export default App;
