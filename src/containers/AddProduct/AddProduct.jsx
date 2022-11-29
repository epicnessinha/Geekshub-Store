import React from "react";
import "./AddProduct.css";

const AddProduct = () => {
  return <div className="addProduct"> Add a Product </div>;
};

/* const [product, setProduct] = useState({
      name: "",
      email: "",
      phone: "",
      adress: ""
  
  });

  const [msgError, setMsgError] = useState("");

  const handleData = (e) => {
 
      setProduct((prevState) => ({
          ...prevState, [e.target.name]: e.target.value
          
      }));
                          
  };

  const registerMe = () => {
      console.log("add product test")
      let foundError = false;
      setMsgError("");

      foundError = errorVerify();
      
      console.log("we did it, now we send data to the backend...");
  

  return (
      <div className='addProductDesign'>
          {<pre>{JSON.stringify(user, null,2)}</pre>} 
          <div className="upSection">
              <input className="myInput" type="text" name="name" id="name" title="name"
                  placeholder="Name:" autoComplete="off"
                  onChange={(e) => { handleData(e) }} onBlur={(ev)=>errorVerify("string",ev.target.value)}/>

              <input className="myInput" type="email" name="email" id="email" title="email"
                  placeholder="E-mail:" autoComplete="off"
                  onChange={(e) => { handleData(e) }} />
          </div>
          <div className="downSection">
              <input className="myInput" type="text" name="phone" id="phone" title="phone"
                  placeholder="Phone:" autoComplete="off"
                  onChange={(e) => { handleData(e) }} />

              <input className="myInput" type="address" name="address" id="address" title="address"
                  placeholder="Address:" autoComplete="off"
                  onChange={(e) => { handleData(e) }} />
          </div>
          <div className="bottomSection">
              <div className="designRegisterButton" onClick={()=>registerMe()}>Register</div>
              <div>{msgError}</div>
          </div>
      </div>
  )
} */

export default AddProduct;
