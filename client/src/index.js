import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {Provider} from "react-redux" //to access tool kit from every where
import store from "./redux/store.js"

ReactDOM.render(
    <Provider store={store}>

        <App/> 
        
    </Provider>
        
        , document.getElementById('root')
)