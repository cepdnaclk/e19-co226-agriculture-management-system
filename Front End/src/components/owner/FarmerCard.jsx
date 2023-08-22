// FarmerCard.jsx
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';

const FarmerCard = ({ farmer }) => {
    const [open, setOpen] = useState(false);
    const [farmlands, setFarmlands] = useState([]);

    const cardStyle = { padding: '20px 30px', width: '500', margin: '0px auto',backgroundColor: 'rgb(200, 200, 200)'};
    const card2Style = {  width: '500',backgroundColor: 'rgba(1, 32, 93, 0.5)' ,};

    const handleOpenModal = () => {
        // Fetch farmland data for the farmer from API
        fetch(`http://localhost:8080/farmland/getAll/${farmer.nic}`)
            .then(response => response.json())
            .then(data => setFarmlands(data))
            .catch(error => console.error('Error fetching farmlands:', error));

        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <Card style={card2Style} variant="outlined" sx={{ mb: 2 }}>
            <CardContent style={cardStyle} >
                <Typography variant="h5">{farmer.name}</Typography>
                <Typography>NIC: {farmer.nic}</Typography>
                <Typography>Age: {farmer.age}</Typography>
                <Typography>Mobile: {farmer.mobile}</Typography>
                <Typography>Experience: {farmer.experince || 'N/A'}</Typography>
            </CardContent>
            <Button
                variant="contained"
                onClick={handleOpenModal}
                fullWidth
                sx={{backgroundColor: 'rgba(1, 32, 93, 0.6)' }}
            >
                VIEW FARMLANDS
            </Button>
            <FarmerDetailsModal  open={open} onClose={handleCloseModal} farmer={farmer} farmlands={farmlands} />
        </Card>
    );
};

const FarmerDetailsModal = ({ open, onClose, farmer, farmlands }) => {

    const cardStyle = { padding: '50px 20px', width: '500', margin: '0px auto',backgroundColor: 'rgba(1, 32, 93, 0.4)' ,};
    const card2Style = {  width: '500',backgroundColor: '#fff' ,};


    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>
                <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                    <b>{farmer.name}'s Farmlands</b>
                </h2>
            </DialogTitle>
            <DialogContent style={card2Style}>
                <List>
                    {farmlands.map(farmland => (
                        <ListItem key={farmland.farmlandID} style={{ borderBottom: '1px solid #ccc' }}>
                            <ListItemText
                                primary={
                                    <p style={{ fontSize: '18px', fontWeight: 'bold', fontStyle: 'italic', color: '#36454F' }}>
                                        {farmland.name}
                                    </p>
                                }
                                secondary={
                                    <p style={{ fontSize: '12px', lineHeight: '1.6', color: 'black' }}>
                                        <span style={{ fontWeight: 'bold' }}>Size:</span> {farmland.size}<br />
                                        <span style={{ fontWeight: 'bold' }}>Location:</span> {farmland.location}<br />
                                    </p>
                                }
                            />

                        </ListItem>
                    ))}
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>

    );
};

export default FarmerCard;
