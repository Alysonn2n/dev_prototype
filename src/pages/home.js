import React from 'react';
import './home.css'
import Header from '../components/header'

const Home = () => {
    return (
        <div>
            <Header/>
            <main className='main'>
                <div className='navbar'>
                    navbar
                </div>

                <div className='feed'>
                    feed
                </div>
            </main>
        </div>
    )
};

export default Home;