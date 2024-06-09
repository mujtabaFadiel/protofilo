import './toggle.css';
import sun from '../../images/sun.jpg'
import moon from '../../images/moon.png';
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
    
  const theme = useContext(ThemeContext);
  const handleClick= () => {
    theme.dispatch({type: "TOGGLE"})
  }
    
  return(
        <div className="t" onClick={handleClick}>
            <img src={sun} alt="" className='t-icon'/>
            <img src={moon} alt=""  className='t-icon'/>
            <div className="t-button" 
                style={{left: theme.state.darkMode ? 0 : 25}}
            ></div>
        </div>
    )
}

export default Toggle