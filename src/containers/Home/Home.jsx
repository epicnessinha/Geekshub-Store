/*import React, {useState, useEffect} from 'react';*/
import BackgroundImage from "../../images/ecommerce.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="welcomeDesign">
      <div className="background-image">{BackgroundImage}</div>
      <div className="Text-Wrapper">
        <div className="left-text">
          <h1 className="welcome-title">A Fake E-commerce</h1>
          <h4>By Pablo Juan & Vanessa Ferreira</h4>
        </div>
        <div className="right-text">
          <h3>

          </h3>
        </div>
      </div>
    </div>
  );
};

/*const Home = () => {

    const[/* name, setName ] = useState([]);

    useEffect(()=> {

    })

    return(
        <div className='home'>
            <h1>This is the home page</h1>
        </div>
    )

} */

export default Home;
