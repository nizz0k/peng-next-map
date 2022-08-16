import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility';
import LeafletCanvasMarker from './Pengs';

const Map = () => {
  return (
    <MapContainer center={[50.1109, 8.6821]} zoom={14} scrollWheelZoom={false} style={{height: "100vh", width: "100%"}}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
  />
      <Marker 
      position={[50.1109, 8.682]}
      draggable={true}
      animate={true}
      >
        <Popup>
          Hey ! you found me
        </Popup>
      </Marker>
      <LeafletCanvasMarker />
    </MapContainer>
  )
}

export default Map