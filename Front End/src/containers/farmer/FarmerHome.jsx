// FarmerSignUp.jsx
import React, { useState, useEffect } from 'react';
import {Box, Button, Divider, FormControl, InputLabel, MenuItem, Paper, Select, Typography} from '@mui/material';
import FarmLandCard from '../../components/farmer/FarmLandCard.jsx';
import TextField from "@mui/material/TextField";
import {useNic} from "../../components/NicContext.jsx";
import backgroundImg from '../../assets/background/background1.jpg'
import { Padding } from '@mui/icons-material';

const FarmerHome = () => {
    const { nic } = useNic(); // Get the nic value from context
    const paperStyle = { padding: '50px 20px', width: '500', margin: '20px auto',backgroundColor: 'rgba(1, 32, 93, 0.2)' ,};

    const [cropedFarmland, setcropedFarmland] = useState([]);
    const [uncropedFarmland, setuncropedFarmland] = useState([]);

    const [name, setName] = useState('');
    const [variety, setVariety] = useState('');

    const [crops, setCrops] = useState([]); // State to store the list of crops
    const [selectedFarmland, setSelectedFarmland] = useState(''); // State to store the selected farmland
    const [selectedCrop, setSelectedCrop] = useState(''); // State to store the selected crop


    useEffect(() => {
        const fetchCropedData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/farmland/croped/${nic}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setcropedFarmland(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCropedData();
    }, [nic]);

    useEffect(() => {
        const fetchUncropedData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/farmland/uncroped/${nic}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setuncropedFarmland(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUncropedData();
    }, [nic]);

    useEffect(() => {
        const fetchCrops = async () => {
            try {
                const response = await fetch('http://localhost:8080/crop/getAll');
                if (!response.ok) {
                    throw new Error('Failed to fetch crop data');
                }
                const data = await response.json();
                setCrops(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCrops();
    }, []);


    const handleSubmit = () => {
        // Prepare the data object to send in the POST request
        const data = {
            name: name,
            variety: variety
        };

        // Make the POST request using fetch
        fetch('http://localhost:8080/crop/addNew', {
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

    const handleAssignCrop = async () => {
        if (!selectedFarmland || !selectedCrop) {
            console.error('Both farmland and crop must be selected');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/farmland/updateCrop/${selectedFarmland}/${selectedCrop}`, {
                method: 'PUT', // Use the appropriate HTTP method (e.g., PUT, POST)
            });

            if (!response.ok) {
                throw new Error('Failed to update farmland with crop');
            }
            window.location.reload();
            // Perform any additional actions after successful update
            // For example, you could refetch the data to refresh the display.
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', minHeight: '100vh',marginTop: '20px',marginBottom: '20px', paddingTop: 2, paddingRight: 4, paddingBottom: 6, paddingLeft: 8 , margin: 4  , maxWidth: '100%'}}>
            <Box sx={{
                backgroundColor: 'rgba(1, 32, 93, 0.2)', // Background color for the form box
                padding: '20px',
                borderRadius: '8px',
                marginTop:'20px',
                marginBottom:'20px',
                marginLeft:'20px',
                marginRight:'20px',
            }}>
                <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding:'10px'}}>
                    WELCOME AGAIN!
                </Typography>
            </Box>
            <Divider/>
            <Box sx={{
                backgroundColor: 'rgba(1, 32, 93, 0.2)', // Background color for the form box
                padding: '20px',
                borderRadius: '8px',
                marginTop:'20px',
                marginBottom:'20px',
                marginLeft:'20px',
                marginRight:'20px',
            }}>
                <Typography variant="h6" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding:'10px'}}>
                    CULTIVATED FARMLANDS
                </Typography>
                <Box sx={styles.columnsContainer}>
                    {cropedFarmland.map((farmland) => (
                        <FarmLandCard
                            key={farmland.farmlandID}
                            sx={styles.item}
                            farmlandID={farmland.farmlandID}
                            name={farmland.name}
                            size={farmland.size}
                            location={farmland.location}
                            experience={farmland.experience}
                            isCropped={true} // Indicate that this is a cropped farmland
                        />
                    ))}
                </Box>
            </Box>
                <Divider/>
            <Box sx={{
                backgroundColor: 'rgba(1, 32, 93, 0.2)', // Background color for the form box
                padding: '20px',
                borderRadius: '8px',
                marginTop:'20px',
                marginBottom:'20px',
                marginLeft:'20px',
                marginRight:'20px',
            }}>
                <Typography variant="h6" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding:'10px'}}>
                    UNCULTIVATED FARMLANDS
                </Typography>

            <Box sx={styles.columnsContainer}>
                {uncropedFarmland.map((farmland) => (
                    <FarmLandCard
                        key={farmland.farmlandID}
                        sx={styles.item}
                        farmlandID={farmland.farmlandID}
                        name={farmland.name}
                        size={farmland.size}
                        location={farmland.location}
                        experience={farmland.experience}
                        isCropped={false}
                    />
                ))}
            </Box>
            </Box>
            <Paper elevation={3} sx={{ p: 4, mt: 10 }} style={paperStyle}>
                <Box display="flex" justifyContent="center" alignItems="center" height={50}>
                    <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding: '10px' }}>
                        ADD A NEW CROP TO THE DATABASE
                    </Typography>
                </Box>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    fullWidth={true}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                        marginTop:'10px',
                        marginBottom:'10px',
                    }}
                />

                <TextField
                    id="outlined-basic"
                    label="Variety"
                    variant="outlined"
                    fullWidth={true}
                    value={variety}
                    onChange={(e) => setVariety(e.target.value)}
                    sx={{
                        marginTop:'10px',
                        marginBottom:'10px',
                    }}
                />

                <Box display="flex" justifyContent="left" alignItems="center" height={50} margin="auto">
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        fullWidth
                        sx={{ mt: 3 ,backgroundColor: 'rgba(1, 32, 93, 0.6)'}}

                    >
                        Assign Crop to Farmland
                    </Button>
                </Box>
            </Paper>


            <Paper elevation={3} sx={{ p: 4, mt: 10 }} style={paperStyle}>
                <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding: '10px' }}>
                    ASSIGN CROP TO A FARMLAND
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
                        {uncropedFarmland.map((farmland) => (
                            <MenuItem key={farmland.farmlandID} value={farmland.farmlandID}>
                                {farmland.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Select the Crop</InputLabel>
                    <Select
                        value={selectedCrop}
                        onChange={(e) => setSelectedCrop(e.target.value)}
                        label="Crop"
                    >
                        {crops.map((crop) => (
                            <MenuItem key={crop.cropId} value={crop.cropId}>
                                {crop.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    onClick={handleAssignCrop}
                    fullWidth
                    sx={{ mt: 3 ,backgroundColor: 'rgba(1, 32, 93, 0.6)'}}

                >
                    Assign Crop to Farmland
                </Button>
            </Paper>

        </Box>
    );
};

export default FarmerHome;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    columnsContainer: {
        columns: '500px 2',
        maxWidth: 3000,
    }
}