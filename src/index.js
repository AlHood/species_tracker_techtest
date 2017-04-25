import React from 'react'
import ReactDOM from 'react-dom'
import { Map, TileLayer } from 'react-leaflet'
const position = [51.0, -0.09]


class MapView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
        <div>
          <Map
            style={{height: "100vh"}}
            center={position}
            zoom={10}>
            <TileLayer
              url="https://api.mapbox.com/styles/v1/alhood/cj1vzc34t001j2rn0kh5q9s7b/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxob29kIiwiYSI6ImNqMXZ5ODliYjAwMG4zM3BvamFoa2t5cmkifQ.J1ERoh9pmCB3qY7cKGBg7g"
              attribution="<attribution>" />
          </Map>
        </div>
      )
    }
  }

ReactDOM.render(
  <MapView />,
  document.getElementById("root")
)



// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// mapboxgl.accessToken = 'pk.eyJ1IjoiYWxob29kIiwiYSI6ImNqMXZ5ODliYjAwMG4zM3BvamFoa2t5cmkifQ.J1ERoh9pmCB3qY7cKGBg7g';
// var map = new mapboxgl.Map({
//   container: 'YOUR_CONTAINER_ELEMENT_ID',
//   style: 'mapbox://styles/mapbox/light-v9'
// });


// https://api.mapbox.com/styles/v1/alhood/cj1vzc34t001j2rn0kh5q9s7b/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxob29kIiwiYSI6ImNqMXZ5ODliYjAwMG4zM3BvamFoa2t5cmkifQ.J1ERoh9pmCB3qY7cKGBg7g


