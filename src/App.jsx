import { AppBar, Toolbar, Typography, Button, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Sidebar from '../Components/Sidebar.jsx';
import MapView from '../Components/Mapview.jsx';
import useStore from '../src/store/useStore';
import CollapsibleTable from "../Components/CollapsibleTable.jsx";

function App() {
    // Zustand state and actions
    const mapCenter = useStore((state) => state.mapCenter);
    const setMapCenter = useStore((state) => state.setMapCenter);
    const aboutOpen = useStore((state) => state.aboutOpen);
    const openAbout = useStore((state) => state.openAbout);
    const closeAbout = useStore((state) => state.closeAbout);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Top Navigation Bar */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        WebGIS Application Template
                    </Typography>
                    <Button color="inherit" onClick={() => window.location.reload()} aria-label="Reload Page">Home</Button>
                    <Button color="inherit" onClick={openAbout} aria-label="Open About Modal">About</Button>
                    <Button color="inherit" aria-label="Sign In">Sign in</Button>
                </Toolbar>
            </AppBar>

            {/* Main Content Area */}
            <Box sx={{ display: 'flex', flex: 1 }}>
                <Sidebar setMapCenter={setMapCenter} />
                <MapView mapCenter={mapCenter} />
            </Box>

            {/* About Modal */}
            <Dialog open={aboutOpen} onClose={closeAbout}>
                <DialogTitle>About This Application</DialogTitle>
                <DialogContent>
                    <Typography>
                        This WebGIS application is designed to provide interactive mapping functionality for users.
                        You can explore geospatial data, interact with map layers, and use the tools provided in the
                        sidebar to customize your experience.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeAbout} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default App;
