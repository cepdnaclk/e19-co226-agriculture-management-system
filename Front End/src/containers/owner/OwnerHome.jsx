import React, { useState, useEffect } from 'react';
import {Box, Divider, Paper, Typography} from '@mui/material';
import FarmlandDetailsCard from "../../components/owner/FarmlandDetailsCard.jsx";
import './OwnerHome.css'; // Import the CSS file for styling
import backgroundImg from '../../assets/background/background1.jpg';
import { Container } from '@mui/system';
import {BarChart} from "@mui/icons-material";

const Home = () => {
    const [farmlands, setFarmlands] = useState([]);
    const [farmers, setFarmers] = useState([]);
    const paperStyle = { padding: '50px 20px', width: '500', margin: '20px auto',backgroundColor: 'rgba(1, 32, 93, 0.2)' ,marginTop: '20px'};


    useEffect(() => {
        fetch('http://localhost:8080/farmland/getAll')
            .then((response) => response.json())
            .then((data) => setFarmlands(data))
            .catch((error) => console.error('Error fetching farmlands:', error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:8080/farmer/getAll')
            .then((response) => response.json())
            .then((data) => setFarmers(data))
            .catch((error) => console.error('Error fetching farmlands:', error));
    }, []);

    const totalFarmlands = farmlands.length;
    const croppedFarmlands = farmlands.filter((farmland) => farmland.cropID !== 0).length;
    const uncroppedFarmlands = totalFarmlands - croppedFarmlands;

    const totalFarmers = farmers.length;
    const experincedFarmers = farmers.filter((farmer) => farmer.experince !== '').length;



    return (
        <Container style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', minHeight: '100vh', paddingTop: '20px', paddingBottom: '20px'  , maxWidth: '100%'}} >
            <Paper elevation={3} sx={{ p: 4, mt: 10 }} style={paperStyle}>
                <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding: '10px' }}>
                    WELCOME TO THE DASHBOARD
                </Typography>
                <Divider />

                <div className="count-box" style={{ textAlign: 'center', backgroundColor: 'rgba(1, 32, 93, 0.2)', padding: '10px' }}>
                    <Typography className="count-label" style={{ fontSize: '18px', fontWeight: 'bold', color: '#36454F' }}>
                        TOTAL FARMLANDS
                    </Typography>
                    <Typography className="count-value" style={{ fontSize: '24px', color: '#000' }}>
                        {totalFarmlands}
                    </Typography>
                </div>
                <div className="count-box" style={{ textAlign: 'center', backgroundColor: 'rgba(1, 32, 93, 0.2)', padding: '10px' }}>
                    <Typography className="count-label" style={{ fontSize: '18px', fontWeight: 'bold', color: '#36454F' }}>
                        CULTIVATED FARMLANDS
                    </Typography>
                    <Typography className="count-value" style={{ fontSize: '24px', color: '#000' }}>
                        {croppedFarmlands}
                    </Typography>
                </div>
                <div className="count-box" style={{ textAlign: 'center', backgroundColor: 'rgba(1, 32, 93, 0.2)', padding: '10px' }}>
                    <Typography className="count-label" style={{ fontSize: '18px', fontWeight: 'bold', color: '#36454F' }}>
                        UNCULTIVATED FARMLANDS
                    </Typography>
                    <Typography className="count-value" style={{ fontSize: '24px', color: '#000' }}>
                        {uncroppedFarmlands}
                    </Typography>
                </div>
                <Divider style={{ margin: '20px 0' }} />
                <div className="count-box" style={{ textAlign: 'center', backgroundColor: 'rgba(1, 32, 93, 0.2)', padding: '10px' }}>
                    <Typography className="count-label" style={{ fontSize: '18px', fontWeight: 'bold', color: '#36454F' }}>
                        TOTAL FARMERS
                    </Typography>
                    <Typography className="count-value" style={{ fontSize: '24px', color: '#000' }}>
                        {totalFarmers}
                    </Typography>
                </div>
                <div className="count-box" style={{ textAlign: 'center', backgroundColor: 'rgba(1, 32, 93, 0.2)', padding: '10px' }}>
                    <Typography className="count-label" style={{ fontSize: '18px', fontWeight: 'bold', color: '#36454F' }}>
                        EXPERIENCED FARMERS
                    </Typography>
                    <Typography className="count-value" style={{ fontSize: '24px', color: '#000' }}>
                        {experincedFarmers}
                    </Typography>
                </div>
                <div className="count-box" style={{ textAlign: 'center', backgroundColor: 'rgba(1, 32, 93, 0.2)', padding: '10px' }}>
                    <Typography className="count-label" style={{ fontSize: '18px', fontWeight: 'bold', color: '#36454F' }}>
                        INEXPERIENCED FARMERS
                    </Typography>
                    <Typography className="count-value" style={{ fontSize: '24px', color: '#000' }}>
                        {totalFarmers-experincedFarmers}
                    </Typography>
                </div>


            </Paper>
            <Paper elevation={3} sx={{ p: 4, mt: 10 }} style={paperStyle}>

                    <FarmlandDetailsCard farmlands={farmlands} />
            </Paper>
        </Container>
    );
};

export default Home;

const styles = {
    columnsContainer: {
        columns: '500px 2',
        maxWidth: 3000,
    }
}