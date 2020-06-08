import React, { Component } from 'react'
import MoviesList from './JSONs/Movies.json';
import Rating from './Components/Rating';
import MovieBox from './MovieBox';

class Movies extends Component {
    constructor(props){
        super(props)
        this.state = {  }
}

createMovieBoxes = (data) => {
    let moviesArray = [],list = data.movies;

    list.forEach((element,index) => {moviesArray.push(
    <MovieBox index = {index} element = {element}/>)
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