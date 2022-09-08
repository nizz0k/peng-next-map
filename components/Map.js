import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility';
import { geoJSON, latLng } from 'leaflet';
import { useRef } from 'react';
import { useState } from 'react'
import Modal from '../components/Modal'


const Map = ({points}) => {
// Component States
const [show, setShow] = useState(false)  
const [modal, setModal] = useState({
  image: "",
  type: "",
  date: "",
})




//Marker Base styles
const markerOptions = {radius: 2, weight: 1, opacity: 1, fillOpacity: 0.8, }

//Marker styles based on types
const markerStyles = function(feature) {
  switch (feature.properties.art_type) {
      case 'Sticker': return {color: "#800026"};
      case 'Mural':   return {color: "#BD0026"};
      case 'Marker':   return {color: "#E31A1C"};
      case 'Characters':   return {color: "#FC4E2A"};
      case 'Letters':   return {color: "#FD8D3C"};
      case 'Tippex':   return {color: "#FEB24C"};
      case 'Spray':    return {color: "#FED976"}
      }
}
// Events  events
const geoJsonRef = useRef();

const onMouseOut = (e) => {
  var layer = e.target;
  geoJsonRef.current.setStyle(markerOptions);

}

const onMouseOver = (e) => {
  var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}



function zoomToFeature (e) {
  console.log('onClick', e)
  const clickedUrl = e.target.feature.properties.filename
  const type = e.target.feature.properties.art_type
  const artDate = e.target.feature.properties.timestamp
 setShow(true)
 setModal({...modal, image: clickedUrl, type: type, date: artDate })
 
}

//console.log(props)
console.log("outside", modal)

function onEachFeature(feature, layer){
  layer.on({
      mouseover: onMouseOver,
      mouseout: onMouseOut,
      click: zoomToFeature
  });
}

function pointToLayer(feature, latLng){
  return L.circleMarker(latLng, markerOptions)
}


  return (
    <>
    <MapContainer center={[50.1109, 8.6821]} zoom={14} scrollWheelZoom={false} style={{height: "100vh", width: "100%"}} renderer={L.canvas()}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
  />
     
    <GeoJSON data={points} pointToLayer={pointToLayer} pathOptions={markerStyles} onEachFeature={onEachFeature} ref={geoJsonRef} />
    </MapContainer>
    <Modal onClose={() => setShow(false)} show={show} modal={modal} />
    </>
  )
}

export default Map