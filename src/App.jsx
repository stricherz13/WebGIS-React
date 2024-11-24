import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Sidebar from '../Components/Sidebar.jsx'
import MapView from '../Components/Mapview.jsx';

function App() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        WebGIS Template
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                </Toolbar>
            </AppBar>

            <Box sx={{ display: 'flex', flex: 1 }}>
                <Sidebar />
                <MapView />
            </Box>
        </Box>
    );
}

export default App;
