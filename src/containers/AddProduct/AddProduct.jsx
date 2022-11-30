
import "./AddProduct.css";
import { useState } from "react";
import {errorCheck} from '../../services/validate';
import { Button, Form, Input } from "antd";



const AddProduct = () => {
  const [form] = Form.useForm();

  const [newProduct, setNewProduct] = useState({
    strTitle: "",
    strPrice: "",
    strDescription: "",
    strCategory: "",
    strImages: "",
  });

  const [formError, setFormError] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const inputHandler = (e) => {
    setNewProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const errorHandler = (e) => {
    let error = "";
    error = errorCheck(e.target.value);
    setFormError(error);
  };

  const createNewProduct = () => {
    if (formError === "no error") {
      JSON.stringify(newProduct);
      setFeedbackMessage("The Product was add to the Catalogue with success!");
    } else setFeedbackMessage(formError);
  };

  return (
    <div className="productsForm">
      <Form form={form} layout="vertical" requiredMark="optional" >
        <Form.Item label="Name" required tooltip="Please write the product name" >
          <Input className="topics"
            type="text" 
            name="strProduct"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Item >
        <Form.Item 
          label ="Price"
          required
          tooltip="Please write the product's price"
        >
          <Input className="topics"
            type="text"
            name="strPrice"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Item>
        <Form.Item
          label="Description"
          required
          tooltip="Please describe your Product"
        >
          <Input className="topics"
            type="text"
            name="strDescription"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Item>
        <Form.Item
          label="Category"
          required
          tooltip="Please write the category of your Product"
        >
          <Input className="topics"
            type="text"
            name="strCategory"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Item>
        <Form.Item 
          label="Image" 
          required
          tooltip="Please write the Product's Image url"
        >
          <Input className="topics"
            type="text"
            name="strImages"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Item>
        <Form.Item>
          <Button className="button" onClick={(e) => createNewProduct(e)} type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <span
        className={
          feedbackMessage === "Your Product was add to the Catalogue with success!"
            ? "feedbackMessageSuccess"
            : "feedbackMessageError"
        }
      >
        {" "}
        {feedbackMessage ? feedbackMessage : null}
      </span>
    </div>
  );
};

export default AddProduct;






/*const AddProduct = () => {


  const [inputField, setInputField] = useState({
    product_title: "",
    product_price: "",
    description: "",
    category:"",
    images:"",
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
        name="product_title"
        onChange={inputsHandler}

        placeholder="Product Name"
        value={inputField.product_title}
      />

      <br />

      <input
        type="text"
        name="product_price"
        onChange={inputsHandler}
        placeholder="Price"
        value={inputField.product_price}
      />

      <br />

      <input
        type="description"
        name="description"
        onChange={inputsHandler}
        placeholder="Description"
        value={inputField.description}
      />

      <br />

      <input
        type="category"
        name="category"
        onChange={inputsHandler}
        placeholder="Category (ID)"
        value={inputField.category}
      />

      <br />

      <input
        type="images"
        name="images"
        onChange={inputsHandler}
        placeholder="Images"
        value={inputField.images}
      />

      <br />

<div className="button">
      <button onClick={submitButton}>Add Product</button>
    </div>
    </div>
  );
}

export default AddProduct; */
