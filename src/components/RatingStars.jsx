import React from 'react'

const RatingStars = React.createClass({
  propTypes: {
    rating: React.PropTypes.string
  },

  renderStars () {
    let ratingStars
    let i = 0

    if (this.props.rating) {
      ratingStars = ''
      while (i < this.props.rating) {
        i++
        ratingStars += '✩'
      }
    }
    return ratingStars || null
  },

  render () {
    return (
      <span className='whiskey-note__range-rating rating-stars'>{this.renderStars()}</span>
    )
  }
})

module.exports = RatingStars
