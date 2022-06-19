import React from "react";
import Card from './Card';


function CardList ({robots}){
    const cardArray = robots.map((user,i) => {
       return (<Card
        key={robots[i].id} 
        imgUrl = {'https://robohash.org/'}
        id = {robots[i].id} 
        imgSize = '200x300' 
        name = {robots[i].name} 
        description = {robots[i].email} />   
       );
    });
    return(
        <>
        {cardArray}
        </>
    );
}

export default CardList;