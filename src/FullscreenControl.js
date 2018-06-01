import L from 'leaflet'
import {MapControl} from 'react-leaflet'

import 'leaflet-fullscreen'

// Converts L.Fullscreen to a React Component
export default class FullscreenControl extends MapControl {
  createLeafletElement(props) {
    return L.Control.Fullscreen(props)
  }

  componentDidMount() {
		const { map } = this.context
		this.leafletElement.addTo(map)
	}
}