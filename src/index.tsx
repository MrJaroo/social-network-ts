import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DialogItemProps} from "./components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {PostTypeProps} from "./components/Profile/MyPosts/Post/Post";
// Bll:
const dialogs: Array<DialogItemProps> = [
    {id: 1, name: 'Mike', lastName: 'Dolinin'},
    {id: 2, name: 'Nik', lastName:'White'},
    {id: 3, name: 'Steve', lastName:'Porerie'},
    {id: 3, name: 'Bob', lastName:'Lucas'},

]
const messages: Array<MessagePropsType> = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'I wont to learn this lesson'},
    {id: 4, message: 'I am Bob '},
    {id: 5, message: 'Hello my friend '},
]
const postData:Array<PostTypeProps> = [
    {id: 1, message: 'You ben', likeCounts: 100},
    {id: 2, message: 'How title', likeCounts: 1},
    {id: 3, message: 'I love react', likeCounts: 43},
];

ReactDOM.render(
    <React.StrictMode>
        <App messages={messages}
             dialogs={dialogs}
             postData={postData}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

