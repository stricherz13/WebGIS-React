import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';

function MapView({ mapCenter }) {
    const MapUpdater = ({ center }) => {
        const map = useMap();
        map.setView(center, map.getZoom());
        return null;
    };

    return (
        <Box sx={{ flex: 1, position: 'relative' }}>
            <MapContainer
                center={mapCenter}
                zoom={11}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <MapUpdater center={mapCenter} />
            </MapContainer>
        </Box>
    );
}

export default MapView;
