import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'

export class Map extends Component {
  state = {
    viewport: {
      latitude: 42.358429,
      longitude: -71.059769,
      zoom: 12,
    },
  }

  onViewportChange = viewport => {
    const { width, height, ...etc } = viewport
    this.setState({ viewport: etc })
  }

  render() {
    const { viewport } = this.state

    return (
      <ReactMapGL
        width={'100%'}
        height={'100%'}
        {...viewport}
        mapStyle={'mapbox://styles/mapbox/light-v9'}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => this.onViewportChange(viewport)}
      />
    )
  }
}
