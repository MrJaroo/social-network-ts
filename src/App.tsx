import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, {ProfileType} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import {PostTypeProps} from "./components/Profile/MyPosts/Post/Post";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {DialogItemProps} from "./components/Dialogs/DialogItem/DialogItem";



export type AppPropsType = {
    messages: Array<MessagePropsType>,
    dialogs: Array<DialogItemProps>,
    postData:Array<PostTypeProps>

}

const App:React.FC<AppPropsType> = ({
    messages,
    dialogs,
    postData
                                    }) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Routes>
                        <Route path={'profile'} element={<Profile state={postData}/>}/>
                        <Route path={'message'} element={<Dialogs
                            dialogs={dialogs}
                            messages={messages}
                        />}/>
                        <Route path={'news'} element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
