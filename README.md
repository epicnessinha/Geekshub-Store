# Geekshub Store

Pair programming project where we're challanged to create an E-commerce Application capable of interacting with a backend through a public API. 

## Visuals
<img src="https://github.com/epicnessinha/fakeE-commerce/blob/main/src/images/homepage.png?raw=true" alt="Homepage" width="33%"/> <img src="https://github.com/epicnessinha/fakeE-commerce/blob/main/src/images/catalogue.png?raw=true" alt="Cataloge" width="30%"/> <img src="https://github.com/epicnessinha/fakeE-commerce/blob/main/src/images/AddProduct.png?raw=true" alt="Add Product" width="35%"/>


## [Platzi Fake Store API](https://fakeapi.platzi.com/)

API for prototyping E-commerce and learning about how to connect to an API with the best practices.
<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Instructions to use:

Follow this steps:

### Clone this repo:

`https://github.com/NotPako/fakeECommerce.git`

### Install npm package:

`npm install`

### Run the app:

`npm start`

## About App:

In order to develop this project, for the frontend part we used React with React-Router-Dom, Axios, functional components, debounced search, validated forms, useContext, and also, correct folder distribution with the use of services for external API calls.
<br>
Users are able to consult and filter data (all search inputs are debounced), create new products through a register form, validated (error check).
<br>
We implemented pagination for displayed elements coming from the API and a light/dark theme selector with the use of React useContenxt as a global state manager.


### Endpoints:

- "/"
- "/catalogue"
- "/details"
- "/add"


### Containers:

- Home.jsx
- Catalogue.jsx
- ProductDetails.jsx
- SearchProduct.jsx
- AddProduct.jsx


### Components:

- Header.jsx
- Body.jsx
- Footer.jsx
- Pagination.jsx
- Product.jsx
- ProductCard.jsx


### Services:

- apiCalls.js
- validate.js

### Providers:
- ProductProvider.jsx
- DarkModeProvider.jsx


## Team contacts: 
[Pablo Juan](https://www.linkedin.com/in/pabgra/)
<br>
[Vanessa Ferreira](https://www.linkedin.com/in/vanessabio/)


## License
[MIT](https://choosealicense.com/licenses/mit/)
