import { Box, Button, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import useStore from '../src/store/useStore';

const CollapsibleTable = () => {
    const { isTableCollapsed, toggleTable } = useStore();
    const { data, loading } = useDemoData({
        dataSet: 'Employee',
        rowLength: 100,
    });

    return (
        <Box>
            {/* Floating Button */}
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    zIndex: 1000, // Ensure visibility above all components
                }}
            >
                <Button variant="contained" onClick={toggleTable}>
                    {isTableCollapsed ? 'Show Table' : 'Hide Table'}
                </Button>
            </Box>

            {/* Table */}
            {!isTableCollapsed && (
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 60, // Offset above the button
                        right: 16,
                        width: '90vw',
                        maxWidth: 800,
                        height: 400,
                        backgroundColor: 'white',
                        boxShadow: 3,
                        borderRadius: 1,
                        overflow: 'hidden',
                        zIndex: 999, // Below button, above map
                    }}
                >
                    <Typography variant="h6" sx={{ padding: 1 }}>
                        Collapsible Table
                    </Typography>
                    <Box sx={{ height: 350, width: '100%' }}>
                        <DataGrid
                            {...data}
                            loading={loading}
                            slots={{
                                toolbar: GridToolbar,
                            }}
                        />
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default CollapsibleTable;
