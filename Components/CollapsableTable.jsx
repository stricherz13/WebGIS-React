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
                zIndex: 1000,
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
                        height: 700,
                        width: '100%',
                        backgroundColor: 'white',
                        boxShadow: 3,
                        borderRadius: 1,
                        overflow: 'hidden', // Prevents unintended overflow
                        zIndex: 10, // Ensures the table stays under the toolbar menu
                    }}
                >
                    <Typography variant="h6" sx={{ padding: 1 }}>
                        Attribute Table
                    </Typography>
                    <Box
                        sx={{
                            height: 650,
                            width: '100%',
                            position: 'relative', // Allows proper stacking of dropdown menus
                        }}
                    >
                        <DataGrid
                            {...data}
                            loading={loading}
                            slots={{
                                toolbar: GridToolbar,
                            }}
                            componentsProps={{
                                toolbar: {
                                    sx: {
                                        zIndex: 2000, // Ensures the toolbar is above the table
                                    },
                                },
                            }}
                        />
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default CollapsibleTable;
