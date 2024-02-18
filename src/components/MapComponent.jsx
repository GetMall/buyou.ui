import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import getMarker from '../assets/maps/getMark.svg';
import userMarker from '../assets/maps/userMark.svg';

const MapComponent = ({ shoppings, lat, long }) => {
  const defaultCenter = lat && long ? [lat, long] : [-23.586494541094943, -46.68252095236397];
  
  const customIcon = new L.Icon({
    iconUrl: getMarker,
    iconSize: [60, 60],
    iconAnchor: [15, 30], 
    popupAnchor: [0, -30] 
  });

  const customCenterIcon = new L.Icon({
    iconUrl: userMarker,
    iconSize: [60, 60],
    iconAnchor: [15, 30], 
    popupAnchor: [0, -30] 
  });

  return (
    <MapContainer center={defaultCenter} zoom={13} style={{borderBottom:'3px solid var(--color-orange)', borderTop:'3px solid var(--color-orange)', opacity:'0.7', height: '90%', width: '100%', position: 'relative' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker key={1} position={defaultCenter} icon={customCenterIcon}> 
        <Popup>Você está aqui.</Popup>
      </Marker>

      {/* Marcadores para os shoppings */}
      {shoppings.length > 0 && shoppings.map(shop => (
        <Marker key={shop.id} position={[shop.endereco.latitude, shop.endereco.longitude]} icon={customIcon}>
          <Popup>{shop.nome}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
