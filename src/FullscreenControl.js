import L from 'leaflet'
import {Control} from 'react-leaflet'

import 'leaflet-fullscreen'

// Converts L.Fullscreen to a React Component
export default class FullscreenControl extends Control {
  createLeafletElement(props) {
    console.log(L)
    return L.Control.Fullscreen(props)
  }

  componentDidMount() {
		const { map } = this.context
		this.leafletElement.addTo(map)
	}
}