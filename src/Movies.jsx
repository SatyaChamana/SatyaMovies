import React, { Component } from 'react'
import MoviesList from './JSONs/Movies.json';
import Rating from './Components/Rating';

class Movies extends Component {
    constructor(props){
        super(props)
        this.state = {  }
}

createMovieBoxes = (data) => {
    let moviesArray = [],list = data.movies;

    list.forEach((element,index) => {moviesArray.push(
    <div key={index} className='moviesWrapper-Container'>
        <div className='movieImg' > 
                <img src={element.img} alt=''></img>
           <hr></hr>
            <div className='movieTitle'>{element.name}</div>
            <div className='movieLanguage'>{element.language}</div>
            <div className='movieType'>{element.type}</div>
            <div className='movieRating'><Rating rating={element.rating}/></div>
        </div>
     </div>)
    });
    return moviesArray;
}

    render() { 
        
        let datatoDisplay = this.createMovieBoxes(MoviesList)
        return (<div className="moviesWrapper">
            {datatoDisplay}
        </div>  );
    }
}
 
export default Movies;