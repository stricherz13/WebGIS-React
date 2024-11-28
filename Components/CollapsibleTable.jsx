import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Collapse,
} from '@mui/material';
import useStore from '../src/store/useStore.js';

const CollapsibleTable = () => {
    console.log('CollapsibleTable');
    const [open, setOpen] = useState(false);
    const geoJsonData = useStore((state) => state.geoJsonData);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div
            style={{
                position: 'fixed', // Align relative to the parent container
                bottom: open ? 0 : '-300px',
                left: 0,
                right: 0, // Matches width of the parent container
                transition: 'bottom 0.3s ease-in-out',
                zIndex: 2000,
                backgroundColor: 'white',
                boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.2)',
            }}
        >
            <Collapse in={open}>
                <Paper elevation={3} style={{ height: '300px', overflowY: 'auto' }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Property 1</TableCell>
                                    <TableCell>Property 2</TableCell>
                                    <TableCell>Coordinates</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {geoJsonData?.features?.length ? (
                                    geoJsonData.features.map((feature, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{feature.properties?.property1 || 'N/A'}</TableCell>
                                            <TableCell>{feature.properties?.property2 || 'N/A'}</TableCell>
                                            <TableCell>
                                                {feature.geometry.coordinates.join(', ')}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={3} align="center">
                                            No data available
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Collapse>

            <Button
                variant="contained"
                color="primary"
                onClick={handleToggle}
                style={{
                    position: 'fixed', // Keeps button tied to the viewport
                    bottom: open ? '310px' : '10px', // Adjusts position with the table
                    left: '50%', // Centers the button
                    transform: 'translateX(-50%)',
                    zIndex: 3000, // Ensure it's always above everything else
                }}
            >
                {open ? 'Close Table' : 'Open Table'}
            </Button>
        </div>
    );
};

export default CollapsibleTable;
