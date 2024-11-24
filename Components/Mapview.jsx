import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';

function MapView() {
    return (
        <Box sx={{ flex: 1, position: 'relative' }}>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A sample marker.
                    </Popup>
                </Marker>
            </MapContainer>
        </Box>
    );
}

export default MapView;
