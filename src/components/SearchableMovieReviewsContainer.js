import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super();

        this.state = {
            reviews: [],
            searchTerm: ""
        };
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({ reviews: data.results}))
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form align="right">
                    <label>Enter a Search Term:</label>
                    <input type="text" />
                    <input type="submit" />
                </form>

                <MovieReviews reviews = {this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;