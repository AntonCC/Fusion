import React, { useState } from 'react'
import Leaflet from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './contact-info.styles.scss'
import 'leaflet/dist/leaflet.css';

// Icon fix for map
Leaflet.Icon.Default.imagePath =
'../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const ContactInfo = () => {
  const [viewport, setViewport] = useState({
    lat: 51.505,
    lng: -0.09,
    zoom: 13
  })

  return (
    <div className="contact-info">
      <div className="container">
        <div className="sideA">
          <p>Feel free to contact Fusion with any questions or inquiries you might have. Representatives are available 24/7 to assist you.</p>
          <h2 className="brand-name">Fusion Inc.</h2>
          <p>1245 Seadrive View, Brooklyn NY</p>
          <h2>PO Box</h2>
          <p>1445 Oceanway Drive, Brooklyn NY</p>
        </div>
        <div className="sideB">
          <Map center={[viewport.lat, viewport.lng]} zoom={viewport.zoom} style={{height: '400px', width: '100%'}}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[viewport.lat, viewport.lng]}>
              <Popup>
                A pretty CSS popup
              </Popup>                          
            </Marker>
          </Map>
        </div>      
      </div>
    </div>
  )
}
export default ContactInfo