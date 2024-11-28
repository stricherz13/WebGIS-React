import React, { useState } from 'react';
import { MapContainer, TileLayer, LayersControl, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';
import useStore from '../src/store/useStore';
import CollapsibleTable from './CollapsibleTable'; // Import the table component
import useGeojson from '../hooks/useGeojson';

const MapView = () => {
    const { BaseLayer } = LayersControl;
    const mapCenter = useStore((state) => state.mapCenter);
    const [userLocation, setUserLocation] = useState(null);
    const { data: geojsonData, error } = useGeojson(
        'https://www.ncdc.noaa.gov/swdiws/geojson/nx3hail/20240821:20240920?bbox=-90.7,38.3,-90.1,38.8'
    );

    if (error) console.error('GeoJSON Fetch Error:', error);

    // Custom icon for GeoJSON points
    const customGeoJsonIcon = L.divIcon({
        className: 'custom-geojson-icon',
        iconSize: [16, 16],
        html: `<div style="
            width: 16px;
            height: 16px;
            background-color: red;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 0 6px rgba(255, 0, 0, 0.6);
        "></div>`,
    });

    // Use pointToLayer to style points
    const pointToLayer = (feature, latlng) => {
        return L.marker(latlng, { icon: customGeoJsonIcon });
    };

    return (
        <Box
            sx={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden', // Prevent overflow issues
            }}
        >
            {/* MapContainer */}
            <MapContainer
                center={mapCenter}
                zoom={11}
                style={{ flex: 1, zIndex: 1000 }}
            >
                <LayersControl position="bottomleft">
                    <BaseLayer checked name="OpenStreetMap">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; OpenStreetMap contributors"
                        />
                    </BaseLayer>
                    {geojsonData && <GeoJSON data={geojsonData} pointToLayer={pointToLayer} />}
                </LayersControl>
            </MapContainer>

            {/* Collapsible Table */}
            <CollapsibleTable />
        </Box>
    );
};

export default MapView;
