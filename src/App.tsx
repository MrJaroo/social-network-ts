import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from "./components/News/News";

const state = {
    id: 1,
    title: 'You ben',
    likeCounts: 100
}

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Routes>
                        <Route path={'profile'} element={<Profile id={state.id} title={state.title} likeCounts={state.likeCounts}/>}/>
                        <Route path={'message'} element={<Dialogs/>}/>
                        <Route path={'news'} element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
