import React from 'react'
import {render} from 'react-dom'

import FullscreenControl from '../../src'

import './leaflet/leaflet.js'
import './leaflet/leaflet.css'

import 'leaflet-fullscreen'

import {Map, TileLayer} from 'react-leaflet'

const App = () => (
  <Map 
  fullscreenControl
  style={{
    height: '100vh'
  }} zoom={13} center={[51.505, -0.09]}>
    {/* <FullscreenControl/> */}

    <TileLayer
      attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
  </Map>
)

render(
  <App/>, document.getElementById('root'))