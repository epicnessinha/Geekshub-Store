/*import React, {useState, useEffect} from 'react';*/
import BackgroundImage from "../../images/ecommerce.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="welcomeDesign">
      <div className="background-image">{BackgroundImage}</div>
      <div className="Text-Wrapper">
        <div className="left-text">
          <h1 className="welcome-title">Fake Ecommerce</h1>
          <h2>teste</h2>
        </div>
        <div className="right-text">
          <h3>
            TESTE - Ecommerce (electronic commerce) refers to all online
            activity that involves the buying and selling of products and
            services. In other words, ecommerce is a process for conducting
            transactions online. When you go to your favorite online retailer to
            buy a new pair of shoes, you're engaging in ecommerce.
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
