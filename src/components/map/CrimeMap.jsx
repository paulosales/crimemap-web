import React from 'react'
import {
  Map,
  TileLayer,
  LayersControl,
  GeoJSON,
} from 'react-leaflet'
import './CrimeMap.css'
import cities from './geojs-23-mun.json'

function CrimeMap() {
  let position = [-5.2463974, -39.29745]
  function geoJSONStyle() {
    return {
      color: '#1f2021',
      weight: 1,
      fillOpacity: 0.3,
      fillColor: '#fff2af',
    }
  }

  function eachFeature(feature, layer) {
    const popupContent = `<Popup>${feature.properties.name}</Popup>`
    layer.bindPopup(popupContent)
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
          <GeoJSON data={cities} style={geoJSONStyle} onEachFeature={eachFeature}/>
        </LayersControl.Overlay>
      </LayersControl>
    </Map>
  )
}

export default CrimeMap
