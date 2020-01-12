import React from 'react'
import {
  Map,
  TileLayer,
  Popup,
  FeatureGroup,
  Circle,
  LayerGroup,
  Rectangle,
  LayersControl,
  Marker,
  GeoJSON,
} from 'react-leaflet'
import './CrimeMap.css'
import cities from './geojs-23-mun.json'

function CrimeMap() {
  let position = [-5.2463974, -39.29745]
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]
  function geoJSONStyle() {
    console.log(arguments)
    return {
      color: '#1f2021',
      weight: 1,
      borderStyle: 'dotted',
      fillOpacity: 0.3,
      fillColor: '#fff2af',
    }
  }
  return (
    <Map center={position} zoom={8}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Colored">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Black and white">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay checked name="Cities">
          <GeoJSON data={cities} style={geoJSONStyle} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Marker with popup">
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="Layer group with circles">
          <LayerGroup>
            <Circle center={position} fillColor="blue" radius={200} />
            <Circle
              center={position}
              fillColor="red"
              radius={100}
              stroke={false}
            />
            <LayerGroup>
              <Circle
                center={position}
                color="green"
                fillColor="green"
                radius={100}
              />
            </LayerGroup>
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Feature group">
          <FeatureGroup color="purple">
            <Popup>Popup in FeatureGroup</Popup>
            <Circle center={position} radius={200} />
            <Rectangle bounds={rectangle} />
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </Map>
  )
}

export default CrimeMap
