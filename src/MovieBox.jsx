import React  from 'react';
import Rating from './Components/Rating';


const MovieBox = (props) => {
    return(
        <div key={props.index} className='moviesWrapper-Container'>
        <div className='movieImg' > 
                <img src={props.element.img} alt=''></img>
           <hr></hr>
            <div className='movieTitle'>{props.element.name}</div>
            <div className='movieLanguage'>{props.element.language}</div>
            <div className='movieType'>{props.element.type}</div>
            <div className='movieRating'><Rating rating={props.element.rating}/></div>
        </div>
     </div>)
    
}
export default MovieBox