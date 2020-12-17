import React from 'react';
import '../css/Home.css';
import CardsForHome from './CardsForHome';

function Home() {
 
    

    return (
        <div>
            <div className="Home__header">
                <h3>Home</h3>
            </div>
            <div className="HomeBody">
               <CardsForHome/>
               <CardsForHome/>
               <CardsForHome/>
               <CardsForHome/>
               <CardsForHome/>
               <CardsForHome/>
            </div>
        </div>
    )
}

export default Home
