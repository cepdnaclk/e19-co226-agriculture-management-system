// AddFarmland.jsx
import React, {useEffect, useState} from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    MenuItem,
    Select,
    Paper,
    InputLabel,
    FormControl
} from '@mui/material';
import {useNic} from "../../components/NicContext.jsx";
import backgroundImg from '../../assets/background/background1.jpg'

const AddFarmland = () => {
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [location, setLocation] = useState('');
    const { nic } = useNic(); // Get the nic value from context

    const [farmers, setFarmers] = useState([]);
    const [farmlands, setFarmlands] = useState([]);
    const [nicFarmlands, setNicFarmlands] = useState([]);
    const [selectedFarmer, setSelectedFarmer] = useState('');
    const [selectedFarmland, setSelectedFarmland] = useState('');

    const [selectedAssignFarmer, setSelectedAssignFarmer] = useState('');
    const [selectedAssignFarmland, setSelectedAssignFarmland] = useState('');

    const paperStyle = { padding: '50px 20px', width: '500', margin: '20px auto',backgroundColor: 'rgba(1, 32, 93, 0.2)' ,marginTop: '20px'};


    useEffect(() => {
        // Fetch list of farmers
        fetch('http://localhost:8080/farmer/getAll')
            .then(response => response.json())
            .then(data => setFarmers(data))
            .catch(error => console.error(error));

        // Fetch list of farmlands with no assigned NIC
        fetch('http://localhost:8080/farmland/noNic')
            .then(response => response.json())
            .then(data => setFarmlands(data))
            .catch(error => console.error(error));

        fetch('http://localhost:8080/farmland/nic')
            .then(response => response.json())
            .then(data => setNicFarmlands(data))
            .catch(error => console.error(error));
    }, []);


    const handleAddFarmland = () => {
        const newFarmland = {
            name: name,
            size: size,
            location: location,
        };

        fetch('http://localhost:8080/farmland/addNew', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFarmland),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add farmland');
                }
                console.log('Farmland added successfully');
                // Refresh the screen
                window.location.reload();
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleAssignFarmer = () => {
        // Perform logic to assign farmer to farmland using selectedFarmer and selectedFarmland
        // For example, you can send an API request to the backend to update the assignment.
        if (selectedFarmer && selectedFarmland) {
            const url = `http://localhost:8080/farmland/updateFarmer/${selectedFarmland}/${selectedFarmer}`;
            fetch(url, { method: 'PUT' })
                .then(response => {
                    if (response.ok) {
                        // Perform any additional actions (e.g., show success message, refresh data)
                        console.log('Successfully assigned farmer to farmland');
                        window.location.reload(); // Refresh the page
                    } else {
                        console.error('Failed to assign farmer to farmland');
                    }
                })
                .catch(error => {
                    console.error('Error assigning farmer to farmland:', error);
                });
        }
    };

    const handleUpdateAssignFarmer = () => {
        // Perform logic to assign farmer to farmland using selectedFarmer and selectedFarmland
        // For example, you can send an API request to the backend to update the assignment.
        if (selectedAssignFarmland && selectedAssignFarmer) {
            const url = `http://localhost:8080/farmland/updateFarmer/${selectedAssignFarmland}/${selectedAssignFarmer}`;
            fetch(url, { method: 'PUT' })
                .then(response => {
                    if (response.ok) {
                        // Perform any additional actions (e.g., show success message, refresh data)
                        console.log('Successfully update assigned farmer to farmland');
                        window.location.reload(); // Refresh the page
                    } else {
                        console.error('Failed to update assign farmer to farmland');
                    }
                })
                .catch(error => {
                    console.error('Error assigning farmer to farmland:', error);
                });
        }
    };



    return (
        <Container style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', minHeight: '100vh' ,paddingTop: '20px',paddingBottom: '20px' , maxWidth: '100%'}}>
            <Paper elevation={3} sx={{ p: 4, mt: 10 }} style={paperStyle}>
                <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding: '10px' }}>
                    ADD A NEW FARM LAND TO THE DATABASE
                </Typography>

                    <TextField
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        sx={{ mt: 2 }}
                    />
                    <TextField
                        label="Size"
                        variant="outlined"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        fullWidth
                        sx={{ mt: 2 }}
                    />
                    <TextField
                        label="Location"
                        variant="outlined"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        fullWidth
                        sx={{ mt: 2 }}
                    />
                <Button
                    variant="contained"
                    onClick={handleAddFarmland}
                    fullWidth
                    sx={{ mt: 3 ,backgroundColor: 'rgba(1, 32, 93, 0.6)'}}

                >
                        ADD FARMLAND
                    </Button>

            </Paper>
            <Paper elevation={3} sx={{ p: 4, mt: 10 }} style={paperStyle}>
                <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding:'10px'}}>
                    ASSIGN FARMER TO A FARMLAND
                </Typography>
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Select the Farmer</InputLabel>
                    <Select
                        value={selectedFarmer}
                        onChange={(e) => setSelectedFarmer(e.target.value)}
                        displayEmpty
                        fullWidth
                        sx={{ mb: 2}}
                    >
                        <MenuItem value="" disabled>
                        </MenuItem>
                        {farmers.map(farmer => (
                            <MenuItem key={farmer.nic} value={farmer.nic}>
                                {farmer.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Select the Farmland</InputLabel>
                    <Select
                        value={selectedFarmland}
                        onChange={(e) => setSelectedFarmland(e.target.value)}
                        displayEmpty
                        fullWidth
                        sx={{ mb: 3, width: '70%' }}
                    >
                        <MenuItem value="" disabled>
                        </MenuItem>
                        {farmlands.map(farmland => (
                            <MenuItem key={farmland.farmlandID} value={farmland.farmlandID}>
                                {farmland.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    onClick={handleAssignFarmer}
                    fullWidth
                    sx={{ mt: 3,backgroundColor: 'rgba(1, 32, 93, 0.6)' }}
                >
                        ASSIGN FARMER
                    </Button>
            </Paper>
            <Paper elevation={3} sx={{ p: 4, mt: 10 }} style={paperStyle}>
                <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding:'10px'}}>
                    CHANGE ASSIGN FARMER TO A FARMLAND
                </Typography>
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Select the Farmer</InputLabel>
                    <Select
                        value={selectedAssignFarmer}
                        onChange={(e) => setSelectedAssignFarmer(e.target.value)}
                        displayEmpty
                        fullWidth
                        sx={{ mb: 2}}
                    >
                        <MenuItem value="" disabled>
                        </MenuItem>
                        {farmers.map(farmer => (
                            <MenuItem key={farmer.nic} value={farmer.nic}>
                                {farmer.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Select the Farmland</InputLabel>
                    <Select
                        value={selectedAssignFarmland}
                        onChange={(e) => setSelectedAssignFarmland(e.target.value)}
                        displayEmpty
                        fullWidth
                        sx={{ mb: 3}}
                    >
                        <MenuItem value="" disabled>
                        </MenuItem>
                        {nicFarmlands.map(farmland => (
                            <MenuItem key={farmland.farmlandID} value={farmland.farmlandID}>
                                {farmland.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    onClick={handleUpdateAssignFarmer}
                    fullWidth
                    sx={{ mt: 3,backgroundColor: 'rgba(1, 32, 93, 0.6)' }}
                >
                        CHANGE ASSIGN FARMER
                    </Button>

            </Paper>
        </Container>
    );
};

export default AddFarmland;