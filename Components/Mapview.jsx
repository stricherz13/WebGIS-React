import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, LayersControl, useMap, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../src/App.css';
import { Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import useStore from '../src/store/useStore';

const gpsLocationIcon = L.divIcon({
    className: 'gps-location-icon',
    iconSize: [16, 16],
    html: `<div class="gps-marker"></div>`,
});

function HomeButton() {
    const map = useMap();
    const defaultCenter = useStore((state) => state.defaultCenter);

    const handleHomeClick = () => {
        map.setView(defaultCenter, 11);
    };

    return (
        <IconButton
            onClick={handleHomeClick}
            sx={{
                position: 'absolute',
                top: 85,
                left: 9,
                zIndex: 1000,
                width: '36px',
                height: '36px',
                padding: '4px',
                backgroundColor: 'white',
                border: 'grey 1px solid',
                '&:hover': {
                    backgroundColor: '#f0f0f0',
                },
            }}
        >
            <HomeIcon />
        </IconButton>
    );
}

function GpsButton({ setUserLocation }) {
    const map = useMap();

    const handleGpsClick = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    map.setView([latitude, longitude], 14);
                    setUserLocation([latitude, longitude]);
                },
                (error) => {
                    console.error('Error fetching GPS location:', error);
                    alert('Unable to retrieve your location.');
                }
            );
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    };

    return (
        <IconButton
            onClick={handleGpsClick}
            sx={{
                position: 'absolute',
                top: 130,
                left: 9,
                zIndex: 1000,
                width: '36px',
                height: '36px',
                padding: '4px',
                backgroundColor: 'white',
                border: 'grey 1px solid',
                '&:hover': {
                    backgroundColor: '#f0f0f0',
                },
            }}
        >
            <GpsFixedIcon />
        </IconButton>
    );
}

function MapUpdater() {
    const map = useMap();
    const mapCenter = useStore((state) => state.mapCenter);


    useEffect(() => {
        if (mapCenter) {
            map.setView(mapCenter); // Update the map view dynamically
        }
    }, [mapCenter, map]);

    return null; // This component doesn't render anything
}

function MapView() {
    const { BaseLayer } = LayersControl;
    const mapCenter = useStore((state) => state.mapCenter);
    const [userLocation, setUserLocation] = useState(null);

    return (
        <Box sx={{ flex: 1, position: 'relative' }}>
            <MapContainer
                center={mapCenter}
                zoom={11}
                style={{ height: '100%', width: '100%' }}
            >
                <HomeButton />
                <GpsButton setUserLocation={setUserLocation} />
                <MapUpdater />
                {userLocation && (
                    <Marker position={userLocation} icon={gpsLocationIcon} />
                )}
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
