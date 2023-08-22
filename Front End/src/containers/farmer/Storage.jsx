import React, {useEffect, useState} from 'react';
import {
    Typography,
    TextField,
    Button,
    Container,
    Paper, MenuItem, Select, InputLabel, FormControl,
} from '@mui/material';
import {useNic} from "../../components/NicContext.jsx";
import backgroundImg from '../../assets/background/background1.jpg'

const AddStorageMethod = () => {
    const [storageData, setStorageData] = useState({
        name: '',
        location: '',
        capacity: '',
        humidity: '',
        temperature: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setStorageData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/storage/addNew', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(storageData),
            });

            if (!response.ok) {
                throw new Error('Failed to add storage method');
            }

            // Show success message or update state
            console.log('Storage method added successfully');
        } catch (error) {
            console.error(error);
        }
    };

    const paperStyle = { padding: '50px 20px', width: '500', margin: '20px auto',backgroundColor: 'rgba(1, 32, 93, 0.2)' ,};
    const [storageMethods, setStorageMethods] = useState([]);
    const [farmlands, setFarmlands] = useState([]);
    const [selectedStorageMethod, setSelectedStorageMethod] = useState('');
    const [selectedFarmland, setSelectedFarmland] = useState('');
    const { nic } = useNic(); // Get the nic value from context


    useEffect(() => {
        const fetchStorageMethods = async () => {
            try {
                const response = await fetch('http://localhost:8080/storage/getAll');
                if (!response.ok) {
                    throw new Error('Failed to fetch storage methods');
                }
                const data = await response.json();
                setStorageMethods(data);
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

        fetchStorageMethods();
        fetchFarmlands();
    }, [nic]);

    const handleAssignStorage = async () => {
        try {
            const response = await fetch(
                `http://localhost:8080/farmland/updateStorage/${selectedFarmland}/${selectedStorageMethod}`,
                {
                    method: 'PUT',
                }
            );

            if (!response.ok) {
                throw new Error('Failed to assign storage to farmland');
            }

            // Show success message or update state
            console.log('Storage assigned to farmland successfully');
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', minHeight: '100vh' ,paddingTop: '20px',paddingBottom: '20px' , maxWidth: '100%'}}>
            <Paper elevation={3} sx={{ p: 4, mt: 10 }} style={paperStyle}>
                <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding: '10px' }}>
                    ADD A NEW STORAGE METHOD TO THE DATABASE
                </Typography>
                <TextField
                    label="Name"
                    name="name"
                    fullWidth
                    value={storageData.name}
                    onChange={handleInputChange}
                    sx={{ mt: 2 }}
                />
                <TextField
                    label="Location"
                    name="location"
                    fullWidth
                    value={storageData.location}
                    onChange={handleInputChange}
                    sx={{ mt: 2 }}
                />
                <TextField
                    label="Capacity"
                    name="capacity"
                    fullWidth
                    value={storageData.capacity}
                    onChange={handleInputChange}
                    sx={{ mt: 2 }}
                />
                <TextField
                    label="Humidity"
                    name="humidity"
                    fullWidth
                    value={storageData.humidity}
                    onChange={handleInputChange}
                    sx={{ mt: 2 }}
                />
                <TextField
                    label="Temperature"
                    name="temperature"
                    fullWidth
                    value={storageData.temperature}
                    onChange={handleInputChange}
                    sx={{ mt: 2 }}
                />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    fullWidth
                    sx={{ mt: 3 ,backgroundColor: 'rgba(1, 32, 93, 0.6)'}}
                >
                    Add Storage Method
                </Button>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mt: 10 }} style={paperStyle}>
                <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding: '10px' }}>
                    ASSIGN STORAGE TO A FARMLAND
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
                    <InputLabel>Select the Storage Method</InputLabel>
                    <Select
                        value={selectedStorageMethod}
                        onChange={(e) => setSelectedStorageMethod(e.target.value)}
                        fullWidth
                        label="Select Storage Method"
                        sx={{ mt: 2 }}
                    >
                        {storageMethods.map((method) => (
                            <MenuItem key={method.storageID} value={method.storageID}>
                                {method.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    onClick={handleAssignStorage}
                    fullWidth
                    sx={{ mt: 3 ,backgroundColor: 'rgba(1, 32, 93, 0.6)'}}

                >
                    Assign Storage to Farmland
                </Button>
            </Paper>

        </Container>
    );
};

export default AddStorageMethod;