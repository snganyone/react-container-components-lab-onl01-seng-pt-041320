import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component{
    constructor(){
        super();

        this.state = {
            reviews: []    
        };
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({ reviews: data.results}))
    }

    // renderReviews = () => {
    //     return this.state.reviews.map((review, i) => {
    //         return(
    //             <div key={i}>
                
    //             </div>
    //         )
    //     })
    // }

    render(){
            return(
                <div className="latest-movie-reviews">
                    <MovieReviews reviews = {this.state.reviews}/>
                </div>
            )
    }
    
}

export default LatestMovieReviewsContainer;