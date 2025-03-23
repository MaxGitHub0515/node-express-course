
# 🔥MERN APPLICATION

## STACK:

- [*React/Redux (RTK Query Toolkit)*](#setting-up-reactredux) 
- [*Express/Node*](#setting-up-expressnode)  
- [*MongoDB/Mongoose*](#setting-up-mongodbmongoose)  
- [*Firebase*](#setting-up-firebase) 
- [*TailwindCSS* (with Vite)](#setting-up-tailwind-css)


###  To Be Implemented:
- **`Auth`**:
    - **User**  
    - **Admin Dashboard**  

#### Auth Details:
Auth has options of signing in or signing up with **Google & GitHub**, apart from doing it manually.  
For that, I used `Firebase`.  

**Admin can:**  
- Add new books  
- Delete created books  
- Edit book details (e.g., description, title, etc.)  
- See all available books  
- View charts like revenue, etc.  

**User can:**  
- View products and their details  
- Add a product to the cart / Remove a product from the cart  
- Proceed to checkout or continue shopping  
- Fill in the form with personal information  
- Pay for the product and delivery (Total Price)  

---

- **`Cookies`**:  
  Cookies allow users to easily close/open a new tab while keeping credentials valid if referring to the same URL recently used.  

- **`Payment Method`**:  
  Using **Stripe** & **PayPal**  


## Setting up [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
**With Vite**
``` shell
  npm install tailwindcss @tailwindcss/vite
```
**Create a vite.config.js file and add the @tailwindcss/vite plugin to it**
```shell
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
**Add an @import to your CSS file**
```shell
@import "tailwindcss";
```
**Run your build process**
```shell
npm run dev
```
**Add Tailwind to your HTML**
```shell
<link href="/src/styles.css" rel="stylesheet">
```



## Setting up [React/Redux](https://redux.js.org/introduction/getting-started)
**Installing Redux Toolkit**
``` shell
  npm install @reduxjs/toolkit
```
**Adding react-redux bindings for use with React**
```shell
 npm install react-redux
```
**Create a Redux Store which is located in `redux/store.js`**
>

```shell
import { configureStore } from '@reduxjs/toolkit'
# // Add the import below only after defining cartSlice.js. cartSlice.reducer was imported as cartReducer
# import {cartReducer} from .../cartSlice

export const store = configureStore({
  reducer: {
  # /*cart: cartReducer*/
},
})
```
* This creates a Redux store and also automatically configures the Redux DevTools extension so that you can inspect the store while developing.

**Adding React/Redux `<Provider>`**
>
Add the following to main.jsx to set up the Redux store with React-Redux's `<Provider>`
```shell
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  )
```
**Create a Redux State Slice for Cart in `redux/features/cart/cartSlice.js` (e.g redux/features/feature-name/feature-nameSlice.js**

```shell
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: InitialState,
  reducers: {},
})

# /* export the actions */
export const {} = cartSlice.actions; 
export default cartSlice.reducer;


```
* Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.
## Setting up [MongoDB/Mongoose]()
``` shell
npm install mongoose --save

```
**Then, set up  a connection string in `db/connect.js`  amd  assign it to MONGO_URI which should look similar to :**
```shell
mongodb+srv://username:password@cluster0.abcd123.mongodb.net/myDatabase?retryWrites=true&w=majority

```
## Setting up [Firebase](https://firebase.google.com/)
**🔗 To see the docs, click the following [link](https://firebase.google.com/docs/auth/web/start)**
>
**installing Firebase to your project**
``` shell
npm install firebase
```
**Then, add a config file at `firebase/firebase.config.js` and paste the code generated when you created your project on firebase.com. It should look sth like this :**
```shell
# // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

# // TODO: Add SDKs for Firebase products that you want to use
# // https://firebase.google.com/docs/web/setup#available-libraries

# // Your web app's Firebase configuration e.g:
# /* Keep the values like apiKey etc below in .env file starting  with VITE_
# // You can find more info on variants of .env here: (https://vite.dev/guide/env-and-mode#env-files)
# // .env.local is ignored by git (by default) 

const firebaseConfig = {
  apiKey: "AIzaSyCXvDIC4MPrkaMdeg_O2iij88wLpfj3qBA",
  authDomain: "book-store-mern-app.firebaseapp.com",
  projectId: "book-store-mern-app",
  storageBucket: "book-store-mern-app.appspot.com",
  messagingSenderId: "205632822247",
  appId: "1:205632822247:web:b0b0ec66bf6de0bbb3b42"
};

# // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```
**With .env, in `firebase.config.js` we should get :**
```shell
# // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};
```
**Notion .env :**
* To prevent accidentally leaking env variables to the client, only variables prefixed with VITE_ are exposed to your Vite-processed code. e.g. for the following env variables:
```shell 
VITE_SOME_KEY=123
DB_PASSWORD=foobar
```
* Only VITE_SOME_KEY will be exposed as import.meta.env.VITE_SOME_KEY to your client source code, but DB_PASSWORD will not.
```shell
console.log(import.meta.env.VITE_SOME_KEY) // "123"
console.log(import.meta.env.DB_PASSWORD) // undefined

```
## Setting up [Express/Node]()
``` shell
npm i express
```
**Server Starter**
```shell
const express = require('express');
const app = express()

require('dotenv').config();
const connectDB = require('./db/connect');

//optional
require('colors');


const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI || 8000;

const start = async () => {
    try {
      app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`.green)
      );
      await connectDB(process.env.MONGO_URI);
      if(connectDB ){
       console.log('Successfully Connected To The DB!'.green);

      }
    } catch (error) {
        if(error){
            console.log(error); console.log("|||--CAUGHT A CONNECT_DB ERROR OR A SERVER ERROR--|||".red)
        }
     
    }
};

module.exports = start;
```