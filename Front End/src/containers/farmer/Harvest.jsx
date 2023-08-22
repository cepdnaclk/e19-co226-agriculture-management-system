import React, { useState, useEffect } from 'react';
import {
    Typography,
    Select,
    MenuItem,
    Button,
    Container,
    Paper, TextField, InputLabel, FormControl,
} from '@mui/material';
import {useNic} from "../../components/NicContext.jsx";
import backgroundImg from '../../assets/background/background1.jpg'

const AddHarvestMethod = () => {
    const [harvestData, setHarvestData] = useState({
        method: '',
        time: '',
        cost: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setHarvestData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/harvest/addNew', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(harvestData),
            });

            if (!response.ok) {
                throw new Error('Failed to add harvest method');
            }

            // Show success message or update state
            console.log('Harvest method added successfully');
        } catch (error) {
            console.error(error);
        }
    };



    const paperStyle = { padding: '50px 20px', width: '500', margin: '20px auto',backgroundColor: 'rgba(1, 32, 93, 0.2)' ,marginTop: '20px'};
    const [harvestMethods, setHarvestMethods] = useState([]);
    const [farmlands, setFarmlands] = useState([]);
    const [selectedHarvestMethod, setSelectedHarvestMethod] = useState('');
    const [selectedFarmland, setSelectedFarmland] = useState('');
    const { nic } = useNic(); // Get the nic value from context


    useEffect(() => {
        const fetchHarvestMethods = async () => {
            try {
                const response = await fetch('http://localhost:8080/harvest/getAll');
                if (!response.ok) {
                    throw new Error('Failed to fetch harvest methods');
                }
                const data = await response.json();
                setHarvestMethods(data);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchFarmlands = async () => {
            try {
                const response = await fetch(`http://localhost:8080/farmland/getAll/${nic}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch farmlands');
                }
                const data = await response.json();
                setFarmlands(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchHarvestMethods();
        fetchFarmlands();
    }, [nic]);

    const handleAssignHarvest = async () => {
        try {
            const response = await fetch(
                `http://localhost:8080/farmland/updateHarvest/${selectedFarmland}/${selectedHarvestMethod}`,
                {
                    method: 'PUT',
                }
            );

            if (!response.ok) {
                throw new Error('Failed to assign harvest to farmland');
            }

            // Show success message or update state
            console.log('Harvest assigned to farmland successfully');
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', minHeight: '100vh' ,paddingTop: '20px',paddingBottom: '20px'  , maxWidth: '100%'}}>
            <Paper elevation={3} sx={{ p: 4, mt: 10 }} style={paperStyle}>
                <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding: '10px' }}>
                    ADD A NEW HARVEST METHOD TO THE DATABASE
                </Typography>
                <TextField
                    label="Method"
                    name="method"
                    fullWidth
                    value={harvestData.method}
                    onChange={handleInputChange}
                    sx={{ mt: 2 }}
                />
                <TextField
                    label="Time"
                    name="time"
                    fullWidth
                    value={harvestData.time}
                    onChange={handleInputChange}
                    sx={{ mt: 2 }}
                />
                <TextField
                    label="Cost"
                    name="cost"
                    fullWidth
                    value={harvestData.cost}
                    onChange={handleInputChange}
                    sx={{ mt: 2 }}
                />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    fullWidth
                    sx={{ mt: 3 ,backgroundColor: 'rgba(1, 32, 93, 0.6)'}}

                >
                    Add Harvest Method
                </Button>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mt: 10 }} style={paperStyle}>
                <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding:'10px'}}>
                    ASSIGN HARVEST METHOD TO A FARMLAND
                </Typography>

                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Select the Farmland</InputLabel>
                    <Select
                        value={selectedFarmland}
                        onChange={(e) => setSelectedFarmland(e.target.value)}
                        fullWidth
                        label="Select Farmland"
                        sx={{ mt: 2 }}
                    >
                        {farmlands.map((farmland) => (
                            <MenuItem key={farmland.farmlandID} value={farmland.farmlandID}>
                                {farmland.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Select the Harvest Method</InputLabel>
                    <Select
                        value={selectedHarvestMethod}
                        onChange={(e) => setSelectedHarvestMethod(e.target.value)}
                        fullWidth
                        label="Select Harvest Method"
                        sx={{ mt: 2 }}
                    >
                        {harvestMethods.map((method) => (
                            <MenuItem key={method.methodID} value={method.methodID}>
                                {method.method}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    onClick={handleAssignHarvest}
                    fullWidth
                    sx={{ mt: 3,backgroundColor: 'rgba(1, 32, 93, 0.6)' }}
                >
                    Assign Harvest Method to Farmland
                </Button>
            </Paper>

        </Container>
    );
};

export default AddHarvestMethod;