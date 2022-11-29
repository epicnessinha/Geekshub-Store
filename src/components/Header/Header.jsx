import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button'
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { darkModeContext } from '../../providers/DarkModeProvider';

const Header = () => {
    let navigate = useNavigate();
    const{darkMode, toggleDarkMode} = useContext(darkModeContext);

    const handleClick = () => {
        toggleDarkMode();
    }

    return (
        <div className={!darkMode ? "headerDesign" : "headerDesignDark"}>
            <h2 className="titleDesign">Geekshub Store</h2>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/")},250)}>Home</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/catalogue")},250)}>Catalogue</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/add")},250)}>Add product</div>
            <Button onClick={handleClick} className="darkThemeButtonDesign" variant={darkMode ? "light" : "dark"}>{darkMode ? "Light" : "Dark"}</Button>
            
            
        </div>
    )
}

export default Header;