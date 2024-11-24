import React, { useState } from 'react';
import { Typography, TextField, Button, Paper, Box } from '@mui/material';

function Sidebar() {
    const [formData, setFormData] = useState({});

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

    return (
        <Paper sx={{ width: '300px', padding: 2, overflowY: 'auto' }}>
            <Typography variant="h6">Interactive Form</Typography>
            <Box component="form" onSubmit={handleFormSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    size="small"
                    onChange={handleInputChange}
                />
                <TextField
                    label="Description"
                    name="description"
                    variant="outlined"
                    size="small"
                    multiline
                    rows={4}
                    onChange={handleInputChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Box>
        </Paper>
    );
}

export default Sidebar;
