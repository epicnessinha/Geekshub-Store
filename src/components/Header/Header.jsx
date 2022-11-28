import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();

    return (
        <div className="headerDesign">
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/catalogue")},250)}>Catalogue</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/add")},250)}>Add product</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/")},250)}>Home</div>
            
        </div>
    )
}

export default Header;