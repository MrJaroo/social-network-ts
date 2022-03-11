import reportWebVitals from './reportWebVitals';
import {addPost, changeTextArea, State, state, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import './index.css';
import App from "./App";
// Bll:
 let rerenderIntaerThree = (state:State) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeTextArea={changeTextArea}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderIntaerThree(state)
subscribe(()=> rerenderIntaerThree(state))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


