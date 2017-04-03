import React from 'react'
import { Radar } from 'react-chartjs'

const { object } = React.PropTypes
let chartData = {
  labels: [],
  datasets: [{
    fillColor: 'transparent',
    strokeColor: 'lightgray',
    pointColor: 'saddlebrown',
    pointStrokeColor: 'saddlebrown',
    pointHighlightFill: 'darkred',
    pointHighlightStroke: 'darkred',
    data: []
  }]
}

const Flavor = React.createClass({
  propTypes: {
    data: object,
    options: object
  },

  render () {
    chartData.labels = Object.keys(this.props.data)
    // Map 'flavor' object into array of just values for Chart.js
    chartData.datasets[0].data = Object.keys(this.props.data).map((flav) => (this.props.data[flav]))

    return (
      <Radar data={chartData} width={window.innerWidth - 20} height={window.innerWidth - 20} />
    )
  }
})

module.exports = Flavor
