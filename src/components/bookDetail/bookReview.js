import React from 'react';

let BookReview =(props) =>
{
    return(
        <div className="book-review-container">
        <div className="book-star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
        </div>
        <div className="book-review">
            <p>(11)</p>
        </div>
        </div>
    )
}

export default BookReview;