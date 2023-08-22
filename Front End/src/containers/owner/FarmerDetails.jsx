import React, { useState, useEffect } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import FarmerCard from "../../components/owner/FarmerCard.jsx";
import backgroundImg from '../../assets/background/background1.jpg'

const FarmerDetails = () => {
    const [farmers, setFarmers] = useState([]);

    useEffect(() => {
        // Fetch farmer data from API
        fetch('http://localhost:8080/farmer/getAll')
            .then(response => response.json())
            .then(data => setFarmers(data))
            .catch(error => console.error('Error fetching farmers:', error));
    }, []);

    return (
        <Box style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', minHeight: '100vh',marginTop: '20px',marginBottom: '20px', paddingTop: 2, paddingRight: 4, paddingBottom: 6, paddingLeft: 8 , margin: 4  , maxWidth: '100%'}}>
            <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding: '10px' }}>
                ALL FARMER DETAILS
            </Typography>
            <Divider />
            <br/>
            <Box sx={styles.columnsContainer}>
                {farmers.map(farmer => (
                    <FarmerCard key={farmer.farmerID} farmer={farmer} />
                ))}
            </Box>
        </Box>
    );
};

export default FarmerDetails;

const styles = {
    columnsContainer: {
        columns: '500px 2',
        maxWidth: 3000,
    }
}