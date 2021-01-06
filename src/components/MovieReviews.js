// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => (
    <div className="review-list">
        <div className="review">
            <ul>
            {props.reviews.map((r, i) => (
                <li key={i}>{r.display_title}</li>
            ))}
            </ul>
        </div>
    </div>
)

export default MovieReviews;