import React from 'react';
import './Card.css'



const randNum = (max) => {
    return Math.floor(Math.random() * max);
  }

function Card (props) {
    const {name,description,imgUrl,imgSize,id} = props;
    return (
        <div className = 'tc f0 bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = 'robots' src = {imgUrl + id + imgSize}></img>
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
        );

}

export default Card;