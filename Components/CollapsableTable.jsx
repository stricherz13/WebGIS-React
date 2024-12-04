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
        <Box
            sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1500,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Button */}
            <Box
                sx={{
                    alignSelf: 'flex-end',
                    margin: 1,
                    marginBottom: 3,
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
                        height: 600,
                        width: '100%',
                        backgroundColor: 'white',
                        boxShadow: 3,
                        borderRadius: 1,
                        overflow: 'hidden',
                        zIndex: 1,
                    }}
                >
                    <Typography variant="h6" sx={{ padding: 1 }}>
                        Collapsible Table
                    </Typography>
                    <Box sx={{ height: 550, width: '100%' }}>
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
