import React from 'react'
import {render} from 'react-dom'
import {Map, TileLayer} from 'react-leaflet'

import './leaflet/leaflet.js'
import './leaflet/leaflet.css'

import '../../src/lib/leaflet.fullscreen.css'
import '../../src/lib/leaflet.fullscreen.min.js'

const App = () => (
  <Map
    fullscreenControl
    style={{
    height: '100vh'
  }}
    zoom={13}
    center={[51.505, -0.09]}>

    <TileLayer
      attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
  </Map>
)

render(
  <App/>, document.getElementById('root'))