import React from "react";
import "./AddProduct.css";
import { useState } from "react";



function AddProduct() {

    
  const [inputField, setInputField] = useState({
    product_name: "",
    client_name: "",
    email: "",
    payment:"",
  });

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitButton = () => {
    alert(inputField.first_name);
  };

  return (
    <div className="formDesign">
      <input
        type="text"
        name="product_name"
        onChange={inputsHandler}
        placeholder="Product Name"
        value={inputField.product_name}
      />

      <br />

      <input
        type="text"
        name="client_name"
        onChange={inputsHandler}
        placeholder="Name"
        value={inputField.client_name}
      />

      <br />

      <input
        type="email"
        name="email"
        onChange={inputsHandler}
        placeholder="Email"
        value={inputField.email}
      />

      <br />

      <input
        type="payment"
        name="payment"
        onChange={inputsHandler}
        placeholder="Payment Method"
        value={inputField.payment}
      />

      <br />

<div className="button">
      <button onClick={submitButton}>Buy Now</button>
    </div>
    </div>
  );
}

export default AddProduct;
