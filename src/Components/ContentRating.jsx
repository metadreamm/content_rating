
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0
    };
    }
    }
  }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>
        Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!
        </p>

        <div className='rating-buttons'>
            <button className='like-button'>
                Like ({this.state.likes})
            </button>
            <button className='dislike-button'>
                Dislike ({this.state.dislikes})
            </button>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
