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
import {changeTextArea, State} from "./redux/state";


export type AppPropsType = {
    state: State
    addPost: () => void
    changeTextArea:(text:string) => void

}

const App: React.FC<AppPropsType> = ({
                                         state,
    addPost,
    changeTextArea,
                                     }) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Routes>
                        <Route path={'profile'} element={<Profile state={state.profilePage}
                                                                  addPost={addPost}
                                                                  changeTextArea={changeTextArea}
                        />}/>
                        <Route path={'message'} element={<Dialogs state={state.messagePage}/>}/>
                        <Route path={'news'} element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
