import React, {useEffect, useState} from 'react';
import {
    Typography,
    TextField,
    Button,
    Container,
    Grid,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem, Divider
} from '@mui/material';
import Box from "@mui/material/Box";
import {useNic} from "../../components/NicContext.jsx";
import backgroundImg from '../../assets/background/background1.jpg'

const AddMachine = () => {

    const { nic } = useNic(); // Get the nic value from context

    const [selectedMachinery, setSelectedMachinery] = useState('');
    const [selectedFarmland, setSelectedFarmland] = useState('');
    const paperStyle = { padding: '50px 20px', width: '500', margin: '20px auto',backgroundColor: 'rgba(1, 32, 93, 0.2)' ,marginTop: '20px'};
    const [farmlandData, setFarmlandData] = useState([]);
    const [machineryData, setMachineryData] = useState([]);

    const [machineData, setMachineData] = useState({
        name: '',
        cost: '',
        type: '',
        envir_impact: '',
        safely: '',
    });

    useEffect(() => {
        const fetchFarmLandData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/farmland/getAll/${nic}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch farmer data');
                }
                const data = await response.json();
                setFarmlandData(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFarmLandData();
    }, [nic]);

    useEffect(() => {
        const fetchMachineryData = async () => {
            try {
                const response = await fetch('http://localhost:8080/machinery/getAll');
                if (!response.ok) {
                    throw new Error('Failed to fetch farmer data');
                }
                const data = await response.json();
                setMachineryData(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMachineryData();
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMachineData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddMachine = async () => {
        try {
            const response = await fetch('http://localhost:8080/machinery/addNew', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(machineData),
            });

            if (!response.ok) {
                throw new Error('Failed to add machine');
            }

            // Clear the form or show a success message
            console.log('Machine added successfully');
        } catch (error) {
            console.error(error);
        }
    };

    const handleMachineUsageSubmit = () => {
        // Prepare the data object to send in the POST request
        const data = {
            farmlandID: selectedFarmland,
            machineryID: selectedMachinery,
            nic: nic,
            machineryName: machineryData.find((machine) => machine.machineID === selectedMachinery)?.name,
            date: new Date().toISOString(),
        };

        // Make the POST request using fetch
        fetch('http://localhost:8080/machineryusage/addNew', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to submit the form.');
                }
                return response.json();
            })
            .then((responseData) => {
                // Handle the response from the backend if needed
                console.log('Form submitted successfully:', responseData);
                // Add any logic you need here after the form is successfully submitted
            })
            .catch((error) => {
                // Handle errors
                console.error('Error submitting the form:', error);
                // Add any error handling logic here if needed
            });
    };

    return (
        <Container style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', minHeight: '100vh' ,paddingTop: '20px',paddingBottom: '20px'  , maxWidth: '100%'}}>
            <Paper elevation={3} sx={{ p: 4, mt: 10 }} style={paperStyle}>
                <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding: '10px' }}>
                    ADD A NEW MACHINERY TO THE DATABASE
                </Typography>
                <TextField
                    label="Name"
                    fullWidth
                    name="name"
                    value={machineData.name}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Cost"
                    fullWidth
                    name="cost"
                    value={machineData.cost}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Type"
                    fullWidth
                    name="type"
                    value={machineData.type}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Environmental Impact"
                    fullWidth
                    name="environmentalImpact"
                    value={machineData.envir_impact}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Safety"
                    fullWidth
                    name="safety"
                    value={machineData.safely}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                />
                <Button variant="contained" onClick={handleAddMachine} fullWidth sx={{backgroundColor: 'rgba(1, 32, 93, 0.6)'}}>
                    ADD MACHINERY
                </Button>
            </Paper>

            <Divider/>
            <Paper elevation={3} sx={{ p: 4, mt: 10 }} style={paperStyle}>
                <Box display="flex" justifyContent="center" alignItems="center" height={50}>
                    <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding: '10px' }}>
                        REPORT A MACHINERY USAGE
                    </Typography>
                </Box>
                <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                    <InputLabel>Select the Farm Land</InputLabel>
                    <Select
                        value={selectedFarmland}
                        onChange={(e) => setSelectedFarmland(e.target.value)}
                        label="Farmeland"
                    >
                        {farmlandData.map((farmland) => (
                            <MenuItem key={farmland.farmlandID} value={farmland.farmlandID}>
                                {farmland.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                    <InputLabel>Select the Machinery</InputLabel>
                    <Select
                        value={selectedMachinery}
                        onChange={(e) => setSelectedMachinery(e.target.value)}
                        label="Machinery"
                    >
                        {machineryData.map((machinery) => (
                            <MenuItem key={machinery.machineID} value={machinery.machineID}>
                                {machinery.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <br />
                <Box display="flex" justifyContent="left" alignItems="center" height={50} margin="auto">
                    <Button fullWidth variant="contained" color="primary" sx={{backgroundColor: 'rgba(1, 32, 93, 0.6)'}} onClick={handleMachineUsageSubmit} >
                        ADD A MACHINERY USAGE
                    </Button>
                </Box>
            </Paper>

        </Container>
    );
};

export default AddMachine;