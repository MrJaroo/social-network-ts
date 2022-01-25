import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, {ProfileType} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import {PostType} from "./components/Profile/MyPosts/Post/Post";

const postData:Array<PostType> = [
    {id: 1, title: 'You ben', likeCounts: 100},
    {id: 2, title: 'How title', likeCounts: 100},
    {id: 3, title: 'I love react', likeCounts: 100},
]

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Routes>
                        <Route path={'profile'} element={<Profile state={postData}/>}/>
                        <Route path={'message'} element={<Dialogs/>}/>
                        <Route path={'news'} element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
