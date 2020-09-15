import React from 'react'
import { Map as BaseMap, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

import 'leaflet/dist/leaflet.css'

// Some leaflet fix to show markers properly
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Map = ({ zoom, center }) => (
    <BaseMap
        center={center}
        zoom={zoom}
        style={{ height: '400px', width: '100%' }}
    >
        <TileLayer
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />

        <Marker position={center}>
            <Popup>
                <strong>G2Go Timisoara</strong>
                <div>office@green-2go.com</div>
            </Popup>
        </Marker>
    </BaseMap>
)

Map.defaultProps = {
    zoom: 14
}

export default Map