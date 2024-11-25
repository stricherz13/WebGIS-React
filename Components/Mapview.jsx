import React, {useEffect} from 'react';
import {MapContainer, TileLayer, LayersControl, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';

function MapUpdater({ mapCenter }) {
    const map = useMap();

    useEffect(() => {
        if (mapCenter) {
            map.setView(mapCenter); // Update the map view dynamically
        }
    }, [mapCenter, map]);

    return null; // This component doesn't render anything
}

function MapView({ mapCenter }) {
    const { BaseLayer } = LayersControl;

    return (
        <Box sx={{ flex: 1, position: 'relative' }}>
            <MapContainer
                center={mapCenter}
                zoom={11}
                style={{ height: '100%', width: '100%' }}
            >
                <MapUpdater mapCenter={mapCenter} />
                {/* Layers Control */}
                <LayersControl position="bottomleft">
                    {/* Base Layers */}
                    <BaseLayer checked name="OpenStreetMap">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                        />
                    </BaseLayer>
                    <BaseLayer name="OpenTopoMap">
                        <TileLayer
                            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href='https://opentopomap.org'>OpenTopoMap</a>"
                        />
                    </BaseLayer>
                    <BaseLayer name="ESRI World Imagery">
                        <TileLayer
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                            attribution="&copy; <a href='https://www.esri.com/en-us/home'>ESRI</a>"
                        />
                    </BaseLayer>
                </LayersControl>
            </MapContainer>
        </Box>
    );
}

export default MapView;
