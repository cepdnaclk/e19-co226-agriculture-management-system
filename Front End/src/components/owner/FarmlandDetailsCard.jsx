import React, { useState, useEffect } from 'react';
import { Box, Button, Divider, Typography, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText } from '@mui/material';

const FarmlandDetailsCard = ({ farmlands }) => {
    const [selectedFarmland, setSelectedFarmland] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [soilData, setSoilData] = useState(null);
    const [openWeatherDialog, setOpenWeatherDialog] = useState(false);
    const [openSoilDialog, setOpenSoilDialog] = useState(false);
    const [diseaseData, setDiseaseData] = useState(null);
    const [chemicalData, setChemicalData] = useState(null);
    const [openDiseaseDialog, setOpenDiseaseDialog] = useState(false);
    const [openChemicalDialog, setOpenChemicalDialog] = useState(false);
    const [machineData, setMachineData] = useState(null);
    const [openMachineDialog, setOpenMachineDialog] = useState(false);


    const cardStyle = { padding: '20px 30px', width: '500', margin: '0px auto',backgroundColor: 'rgb(200, 200, 200)'};
    const card2Style = {  width: '500',backgroundColor: 'rgba(1, 32, 93, 0.5)' ,};

    const listItemStyles = {
        borderBottom: '1px solid #ccc',
        padding: '10px 0',
        fontSize: '16px',
    };

    useEffect(() => {
        // Fetch weather data
        if (selectedFarmland) {
            fetch(`http://localhost:8080/weather/getDetails/${selectedFarmland.farmlandID}`)
                .then((response) => response.json())
                .then((data) => setWeatherData(data))
                .catch((error) => console.error('Error fetching weather data:', error));

            // Fetch soil data
            fetch(`http://localhost:8080/soil/getDetails/${selectedFarmland.farmlandID}`)
                .then((response) => response.json())
                .then((data) => setSoilData(data))
                .catch((error) => console.error('Error fetching soil data:', error));

            fetch(`http://localhost:8080/hostcrop/getDisease/${selectedFarmland.farmlandID}`)
                .then((response) => response.json())
                .then((data) => setDiseaseData(data))
                .catch((error) => console.error('Error fetching soil data:', error));

            fetch(`http://localhost:8080/chemicalusage/getChemical/${selectedFarmland.farmlandID}`)
                .then((response) => response.json())
                .then((data) => setChemicalData(data))
                .catch((error) => console.error('Error fetching soil data:', error));

            fetch(`http://localhost:8080/machineryusage/getMachinery/${selectedFarmland.farmlandID}`)
                .then((response) => response.json())
                .then((data) => setMachineData(data))
                .catch((error) => console.error('Error fetching soil data:', error));
        }
    }, [selectedFarmland]);

    const handleOpenWeatherDialog = () => {
        setOpenWeatherDialog(true);
    };

    const handleCloseWeatherDialog = () => {
        setOpenWeatherDialog(false);
    };

    const handleOpenSoilDialog = () => {
        setOpenSoilDialog(true);
    };

    const handleCloseSoilDialog = () => {
        setOpenSoilDialog(false);
    };

    const handleOpenDiseaseDialog = () => {
        setOpenDiseaseDialog(true);
    };

    const handleCloseDiseaseDialog = () => {
        setOpenDiseaseDialog(false);
    };

    const handleOpenChemicalDialog = () => {
        setOpenChemicalDialog(true);
    };

    const handleCloseChemicalDialog = () => {
        setOpenChemicalDialog(false);
    };

    const handleOpenMachineDialog = () => {
        setOpenMachineDialog(true);
    };

    const handleCloseMachineDialog = () => {
        setOpenMachineDialog(false);
    };

    return (
        <div  style={{ padding: '10px' }}>
            <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding:'10px'}}>
                FARMLAND DETAILS
            </Typography>
            <Divider />
            {selectedFarmland && (
                <div style={{ ...cardStyle, margin: '10px', padding: '20px', backgroundColor: 'rgba(1, 32, 93, 0.4)', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
                    <Typography variant="h5" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#fff', padding:'10px'}}>
                        <p style={{ fontSize: '25px', fontWeight: 'bold', fontStyle: 'italic', color: '#000' }}>
                            Selected Farmland: {selectedFarmland.name}
                        </p>
                    </Typography>
                    <div style={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            onClick={handleOpenWeatherDialog}
                            sx={{ ml: 3 ,backgroundColor: 'rgba(1, 32, 93, 0.6)'}}

                        >
                            WEATHER DATA
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleOpenSoilDialog}
                            sx={{ ml: 3 ,backgroundColor: 'rgba(1, 32, 93, 0.6)'}}

                        >
                            SOIL DATA
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleOpenDiseaseDialog}
                            sx={{ ml: 3 ,backgroundColor: 'rgba(1, 32, 93, 0.6)'}}

                        >
                            REPORTED DISEASE
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleOpenChemicalDialog}
                            sx={{ ml: 3 ,backgroundColor: 'rgba(1, 32, 93, 0.6)'}}

                        >
                            USED CHEMICALS
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleOpenMachineDialog}
                            sx={{ ml: 3 ,backgroundColor: 'rgba(1, 32, 93, 0.6)'}}

                        >
                            USED MACHINERY
                        </Button>
                    </div>
                </div>
            )}
            <Divider/>
            <Divider/>
            <Divider/>
            <Divider/>
            <Divider/>

            {farmlands.map((farmland) => (
                <div style={{ ...cardStyle, margin: '10px', padding: '20px', backgroundColor: 'rgba(1, 32, 93, 0.4)', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }} key={farmland.farmlandID}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Farmland ID: {farmland.farmlandID}
                    </Typography>
                    <Typography variant="h5" style={{ marginBottom: '10px', color: '#fff' }}>{farmland.name}</Typography>
                    <Typography style={{ marginBottom: '5px', color: '#fff' }}>Size: {farmland.size}</Typography>
                    <Typography style={{ marginBottom: '10px', color: '#fff' }}>Location: {farmland.location}</Typography>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: '#1976D2', color: '#fff', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)' }}
                        onClick={() => setSelectedFarmland(farmland)}
                    >
                        View Details
                    </Button>
                </div>

            ))}
            <Dialog open={openWeatherDialog} onClose={handleCloseWeatherDialog}>
                <DialogTitle>
                    <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                        <b>Weather Data for {selectedFarmland?.name}</b>
                    </h2>
                </DialogTitle>
                <DialogContent>
                    {weatherData ? (
                        <List>
                            <ListItem style={listItemStyles}>
                                <ListItemText primary={`Temperature: ${weatherData.temperature}`} />
                            </ListItem>
                            <ListItem style={listItemStyles}>
                                <ListItemText primary={`Humidity: ${weatherData.humidity}`} />
                            </ListItem>
                            <ListItem style={listItemStyles}>
                                <ListItemText primary={`Wind Speed: ${weatherData.windspeed}`} />
                            </ListItem>
                            <ListItem style={listItemStyles}>
                                <ListItemText primary={`Rainfall: ${weatherData.rainfall}`} />
                            </ListItem>
                            <ListItem style={{ padding: '10px 0', fontSize: '16px' }}>
                                <ListItemText primary={`Radiation: ${weatherData.radiation}`} />
                            </ListItem>
                        </List>

                    ) : (
                        <Typography>No weather data available.</Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseWeatherDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Soil Data Dialog */}
            <Dialog open={openSoilDialog} onClose={handleCloseSoilDialog}>
                <DialogTitle>
                    <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                        <b>Soil Data for {selectedFarmland?.name}</b>
                    </h2>
                </DialogTitle>
                <DialogContent>
                    {soilData ? (
                        <List>
                            <ListItem style={{ borderBottom: '1px solid #ccc', padding: '10px 0', fontSize: '16px' }}>
                                <ListItemText primary={`Temperature: ${soilData.temperature}`} />
                            </ListItem>
                            <ListItem style={{ borderBottom: '1px solid #ccc', padding: '10px 0', fontSize: '16px' }}>
                                <ListItemText primary={`pH: ${soilData.ph}`} />
                            </ListItem>
                            <ListItem style={{ borderBottom: '1px solid #ccc', padding: '10px 0', fontSize: '16px' }}>
                                <ListItemText primary={`Structure: ${soilData.structure}`} />
                            </ListItem>
                            <ListItem style={{ borderBottom: '1px solid #ccc', padding: '10px 0', fontSize: '16px' }}>
                                <ListItemText primary={`Water Holding: ${soilData.waterholding}`} />
                            </ListItem>
                            <ListItem style={{ padding: '10px 0', fontSize: '16px' }}>
                                <ListItemText primary={`Nutrition: ${soilData.nutrition}`} />
                            </ListItem>
                        </List>

                    ) : (
                        <Typography>No soil data available.</Typography>
                    )}
                </DialogContent>
                <DialogActions >
                    <Button onClick={handleCloseSoilDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openDiseaseDialog} onClose={handleCloseDiseaseDialog}>
                <DialogTitle>
                    <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                        <b>Reported Diseases for {selectedFarmland?.name}</b>
                    </h2>
                </DialogTitle>
                <DialogContent>
                    {diseaseData ? (
                        <List>
                            {diseaseData && diseaseData.map((disease, index) => (
                                <ListItem style={listItemStyles} key={index}>
                                    <ListItemText primary={`Disease Name: ${disease.diseaseName}`} />
                                    <ListItemText primary={`Reporter NIC: ${disease.nic}`} />
                                    <ListItemText primary={`Reported Date: ${disease.date}`} />
                                </ListItem>
                            ))}
                        </List>


                    ) : (
                        <Typography>No disease data available.</Typography>
                    )}
                </DialogContent>
                <DialogActions >
                    <Button onClick={handleCloseDiseaseDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openChemicalDialog} onClose={handleCloseChemicalDialog}>
                <DialogTitle>
                    <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                        <b>Used Chemical for {selectedFarmland?.name}</b>
                    </h2>
                </DialogTitle>
                <DialogContent>
                    {chemicalData ? (
                        <List>
                            {chemicalData && chemicalData.map((chemical, index) => (
                                <ListItem style={listItemStyles} key={index}>
                                    <ListItemText primary={`Chemical Name: ${chemical.chemicalName}`} />
                                    <ListItemText primary={`User NIC: ${chemical.nic}`} />
                                    <ListItemText primary={`Used Date: ${chemical.date}`} />
                                </ListItem>
                            ))}
                        </List>


                    ) : (
                        <Typography>No chemical data available.</Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseChemicalDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openMachineDialog} onClose={handleCloseMachineDialog}>
                <DialogTitle>
                    <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                        <b>Machine Data for {selectedFarmland?.name}</b>
                    </h2>
                </DialogTitle>
                <DialogContent>
                    {machineData ? (
                        <List>
                            {machineData && machineData.map((machine, index) => (
                                <ListItem style={listItemStyles} key={index}>
                                    <ListItemText primary={`Machinery Name: ${machine.machineryName}`} />
                                    <ListItemText primary={`User NIC: ${machine.nic}`} />
                                    <ListItemText primary={`Used Date: ${machine.date}`} />
                                </ListItem>
                            ))}
                        </List>


                    ) : (
                        <Typography>No machine data available.</Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseMachineDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
};

export default FarmlandDetailsCard;
