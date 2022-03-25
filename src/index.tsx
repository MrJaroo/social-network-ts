import reportWebVitals from './reportWebVitals';
import {State, store} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import './index.css';
import App from "./App";
// Bll:
 let rerenderIntaerThree = (state:State) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)} changeTextArea={store.changeTextArea.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderIntaerThree(store.getState())
store.subscribe(()=> rerenderIntaerThree(store.getState()))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


