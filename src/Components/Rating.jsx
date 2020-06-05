import React, { Component } from 'react'


const Rating = (props) => {
let stars = props.rating, starsArray = [];

for(let i=1; i<=5; i++ ){
    starsArray.push(  
            <img src={i<=stars ? './Images/star1.png' : './Images/star0.png'} alt=''></img>    
    )
}

return starsArray;
}

export default Rating;

