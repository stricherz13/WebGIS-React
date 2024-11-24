import React, { useState } from 'react';
import { Typography, TextField, Button, Paper, Box } from '@mui/material';

function Sidebar({ setMapCenter }) {
    const [formData, setFormData] = useState({});
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleSearch = async () => {
        if (!searchText.trim()) return;

        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                    searchText
                )}`
            );
            const results = await response.json();
            if (results.length > 0) {
                const { lat, lon } = results[0];
                setMapCenter([parseFloat(lat), parseFloat(lon)]);
            } else {
                alert('Location not found.');
            }
        } catch (error) {
            console.error('Error fetching location:', error);
        }
    };

    return (
        <Paper sx={{ width: '300px', padding: 2, overflowY: 'auto' }}>
            <Box sx={{ marginTop: 2 }}>
                <Typography variant="h6">Search Location</Typography>
                <TextField
                    label="Search"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    sx={{ marginBottom: 1 }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Typography variant="h6">Query Data</Typography>
            <Box component="form" onSubmit={handleFormSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                    <Button type="reset" variant="contained" color="secondary">
                        Reset
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
}

export default Sidebar;
