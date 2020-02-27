import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardTemplate from './CardTemplate'
import './grid.css'

var CardList = () => {
    return(
        <div className="gridLayout">
            <div id="card1">
                <CardTemplate/>
            </div>

            <div id="card2">
                <CardTemplate/>
            </div>

            <div id="card3">
                <CardTemplate/>
            </div>

            <a href="/" id="evench-logo" >
                <img src="evench-logo-temp.png" alt='logo'/>
            </a>

            <div id="card4">
                <CardTemplate/>
            </div>

            <div id="card5">
                <CardTemplate/>
            </div>

            <div id="card6">
                <CardTemplate/>
            </div>
        </div>

    );
}


export default CardList;