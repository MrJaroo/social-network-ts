import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const state = {
    id: 1,
    title: 'You ben',
    likeCounts: 100
}

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile id={state.id} title={state.title} likeCounts={state.likeCounts}/>
        </div>
    )
}

export default App;
