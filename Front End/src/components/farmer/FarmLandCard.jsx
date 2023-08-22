import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import {Divider} from "@mui/material";

function FarmLandCard({
                          farmlandID,
                          name,
                          size,
                          location,
                          isCropped,
                      }) {

    const [plantDetails, setPlantDetails] = React.useState(null);
    const [soilDetails, setSoilDetails] = React.useState(null);
    const [weatherDetails, setWeatherDetails] = React.useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);

    const [openPlantDialog, setOpenPlantDialog] = React.useState(false);
    const [openSoilDialog, setOpenSoilDialog] = React.useState(false);
    const [openWeatherDialog, setOpenWeatherDialog] = React.useState(false);
    const [openDiseaseDialog, setOpenDiseaseDialog] = React.useState(false);
    const [diseaseData, setDiseaseData] = React.useState([]);

    const [openChemicalDialog, setOpenChemicalDialog] = React.useState(false);
    const [chemicalData, setChemicalData] = React.useState([]);

    const [openMachineryDialog, setOpenMachineryDialog] = React.useState(false);
    const [machineryData, setMachineryData] = React.useState([]);


    const handleViewPlantClick = async () => {
        try {
            // Fetch the cropID from the first URL
            const response = await fetch(`http://localhost:8080/farmland/getCrop/${farmlandID}`);
            // Assuming the response only contains the cropID as an integer value
            const cropID = await response.text();
            // Fetch the plant details using the received crop ID
            const plantResponse = await fetch(`http://localhost:8080/crop/getbyID/${cropID}`);
            // Assuming the plantResponse is a JSON containing plant details
            const plantData = await plantResponse.json();
            setPlantDetails(plantData);
            setOpenPlantDialog(true);
        } catch (error) {
            console.error('Error fetching plant details:', error);
        }
    };

    const handleViewSoilClick = () => {
        fetch(`http://localhost:8080/soil/getDetails/${farmlandID}`)
            .then((response) => response.json())
            .then((data) => {
                setSoilDetails(data);
                setOpenSoilDialog(true);
            })
            .catch((error) => {
                console.error('Error fetching soil details:', error);
            });
    };

    const handleViewWeatherClick = () => {
        fetch(`http://localhost:8080/weather/getDetails/${farmlandID}`)
            .then((response) => response.json())
            .then((data) => {
                setWeatherDetails(data);
                setOpenWeatherDialog(true);
            })
            .catch((error) => {
                console.error('Error fetching weather details:', error);
            });
    };

    const handleClosePlantDialog = () => {
        setOpenPlantDialog(false);
    };

    const handleCloseSoilDialog = () => {
        setOpenSoilDialog(false);
    };

    const handleCloseWeatherDialog = () => {
        setOpenWeatherDialog(false);
    };

    const handleViewDiseaseClick = () => {
        fetch(`http://localhost:8080/hostcrop/getDisease/${farmlandID}`)
            .then((response) => response.json())
            .then((data) => {
                setDiseaseData(data);
                setOpenDiseaseDialog(true);
            })
            .catch((error) => {
                console.error('Error fetching disease data:', error);
            });
    };

    const handleCloseDiseaseDialog = () => {
        setOpenDiseaseDialog(false);
    };

    const handleViewChemicalClick = () => {
        fetch(`http://localhost:8080/chemicalusage/getChemical/${farmlandID}`)
            .then((response) => response.json())
            .then((data) => {
                setChemicalData(data);
                setOpenChemicalDialog(true);
            })
            .catch((error) => {
                console.error('Error fetching chemical usage data:', error);
            });
    };

    const handleCloseChemicalDialog = () => {
        setOpenChemicalDialog(false);
    };

    const handleViewMachineryClick = () => {
        fetch(`http://localhost:8080/machineryusage/getMachinery/${farmlandID}`)
            .then((response) => response.json())
            .then((data) => {
                setMachineryData(data);
                setOpenMachineryDialog(true);
            })
            .catch((error) => {
                console.error('Error fetching machinery usage data:', error);
            });
    };

    const handleCloseMachineryDialog = () => {
        setOpenMachineryDialog(false);
    };



    const cardStyle = { padding: '20px 30px', width: '500', margin: '0px auto',backgroundColor: 'rgb(200, 200, 200)'};
    const card2Style = {  width: '500',backgroundColor: 'rgba(1, 32, 93, 0.5)' ,};


    const cardContent = (
        <React.Fragment >
            <CardContent style={cardStyle}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Farmland ID: {farmlandID}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Size: {size}
                </Typography>
                <Typography variant="body2">Location: {location}</Typography>
            </CardContent>
            <Divider/>
            <CardActions style={cardStyle}>

                <Button size="small" color="primary" variant="contained" sx={{backgroundColor: 'rgba(1, 32, 93, 0.6)'}} onClick={handleViewSoilClick}>
                    SOIL DATA
                </Button>
                <Button size="small" color="primary" variant="contained" sx={{backgroundColor: 'rgba(1, 32, 93, 0.6)'}} onClick={handleViewWeatherClick}>
                    WEATHER DATA
                </Button>
                <Button size="small" color="primary" variant="contained" sx={{backgroundColor: 'rgba(1, 32, 93, 0.6)'}} onClick={handleViewDiseaseClick}>
                    REPORTED DISEASES
                </Button>
                <Button size="small" color="primary" variant="contained" sx={{backgroundColor: 'rgba(1, 32, 93, 0.6)'}} onClick={handleViewChemicalClick}>
                    USED CHEMICALS
                </Button>
                <Button size="small" color="primary" variant="contained" sx={{backgroundColor: 'rgba(1, 32, 93, 0.6)'}} onClick={handleViewMachineryClick}>
                    USED MACHINERY
                </Button>
                {isCropped && (
                    <>
                        <Button size="small" color="primary" variant="contained" sx={{backgroundColor: 'rgba(1, 32, 93, 0.6)'}} onClick={handleViewPlantClick}>
                            CROP DATA
                        </Button>
                    </>
                )}
            </CardActions>
        </React.Fragment>
    );

    return (
        <Box sx={{ minWidth: 275 }} >
            <Card  variant="outlined" style={card2Style}>{cardContent}</Card>
            <Dialog open={openPlantDialog} onClose={handleClosePlantDialog}>
                <DialogContent style={cardStyle}>
                    {plantDetails ? (
                        <Typography variant="body2" style={{ textAlign: 'left', padding: '16px' }}>
                            <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                                <b>PLANT DETAILS</b>
                            </h2>
                            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                <span style={{ fontWeight: 'bold' }}>Name:</span> {plantDetails.name}<br />
                                <span style={{ fontWeight: 'bold' }}>Variety:</span> {plantDetails.variety}<br />
                            </p>
                        </Typography>
                    ) : (
                        <Typography variant="body2" style={{ textAlign: 'center', padding: '16px' }}>
                            No plant details available
                        </Typography>
                    )}
                </DialogContent>



            </Dialog>
            <Dialog open={openSoilDialog} onClose={handleCloseSoilDialog}>
                <DialogContent style={cardStyle}>
                    {soilDetails ? (
                        <Typography variant="body2" style={{ textAlign: 'left', padding: '16px' }}>
                            <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                                <b>SOIL DETAILS</b>
                            </h2>
                            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                <span style={{ fontWeight: 'bold' }}>Temperature:</span> {soilDetails.temperature}<br />
                                <span style={{ fontWeight: 'bold' }}>pH:</span> {soilDetails.ph}<br />
                                <span style={{ fontWeight: 'bold' }}>Structure:</span> {soilDetails.structure}<br />
                                <span style={{ fontWeight: 'bold' }}>Water Holding:</span> {soilDetails.waterholding}<br />
                                <span style={{ fontWeight: 'bold' }}>Nutrition:</span> {soilDetails.nutrition}<br />
                                <br />
                            </p>
                        </Typography>
                    ) : (
                        <Typography variant="body2" style={{ textAlign: 'center', padding: '16px' }}>
                            <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                                <b>No Data Available</b>
                            </h2>
                        </Typography>
                    )}
                </DialogContent>

            </Dialog>
            <Dialog open={openWeatherDialog} onClose={handleCloseWeatherDialog}>
                <DialogContent style={cardStyle}>
                    {weatherDetails ? (
                        <Typography variant="body2" style={{ textAlign: 'left', padding: '16px' }}>
                            <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                                <b>WEATHER DETAILS</b>
                            </h2>
                            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                <span style={{ fontWeight: 'bold' }}>Temperature:</span> {weatherDetails.temperature}<br />
                                <span style={{ fontWeight: 'bold' }}>Rainfall:</span> {weatherDetails.rainfall}<br />
                                <span style={{ fontWeight: 'bold' }}>Humidity:</span> {weatherDetails.humidity}<br />
                                <span style={{ fontWeight: 'bold' }}>Wind Speed:</span> {weatherDetails.windspeed}<br />
                                <span style={{ fontWeight: 'bold' }}>Radiation:</span> {weatherDetails.radiation}<br />
                                <br />
                            </p>
                        </Typography>
                    ) : (
                        <Typography variant="body2" style={{ textAlign: 'center', padding: '16px' }}>
                            <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                                <b>No Data Available</b>
                            </h2>
                        </Typography>
                    )}
                </DialogContent>

            </Dialog>
            <Dialog open={openDiseaseDialog} onClose={handleCloseDiseaseDialog}>
                <DialogContent style={cardStyle}>
                    {diseaseData && diseaseData.length > 0 ? (
                        diseaseData.map((disease) => (
                            <Typography variant="body2" style={{ textAlign: 'left', padding: '16px' }} key={disease.hostcropID}>
                                <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                                    <b>REPORTED DISEASES</b>
                                </h2>
                                <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                    <span style={{ fontWeight: 'bold' }}>Disease Name:</span> {disease.diseaseName}<br />
                                    <span style={{ fontWeight: 'bold' }}>Reported NIC:</span> {disease.nic}<br />
                                    <span style={{ fontWeight: 'bold' }}>Reported Date:</span> {disease.date}<br />
                                    <br />
                                </p>
                            </Typography>
                        ))
                    ) : (
                        <Typography variant="body2" style={{ textAlign: 'center', padding: '16px' }}>
                            <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                                <b>No Data Available</b>
                            </h2>
                        </Typography>
                    )}
                </DialogContent>

            </Dialog>
            <Dialog open={openChemicalDialog} onClose={handleCloseChemicalDialog}>
                <DialogContent style={cardStyle}>
                    {chemicalData && chemicalData.length > 0 ? (
                        chemicalData.map((chemical) => (
                            <Typography variant="body2" style={{ textAlign: 'left', padding: '16px' }} key={chemical.chemicalUsageID}>
                                <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                                    <b>USED CHEMICALS</b>
                                </h2>
                                <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                    <span style={{ fontWeight: 'bold' }}>Chemical Name:</span> {chemical.chemicalName}<br />
                                    <span style={{ fontWeight: 'bold' }}>User NIC:</span> {chemical.nic}<br />
                                    <span style={{ fontWeight: 'bold' }}>Use Date:</span> {chemical.date}<br />
                                    <br />
                                </p>
                            </Typography>
                        ))
                    ) : (
                        <Typography variant="body2" style={{ textAlign: 'center', padding: '16px' }}>
                            <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                                <b>No Data Available</b>
                            </h2>
                        </Typography>
                    )}
                </DialogContent>

            </Dialog>
            <Dialog open={openMachineryDialog} onClose={handleCloseMachineryDialog}>
                <DialogContent style={cardStyle}>
                    {machineryData && machineryData.length > 0 ? (
                        machineryData.map((machinery) => (
                            <Typography variant="body2" style={{ textAlign: 'left', padding: '16px' }} key={machinery.machineryusageID}>
                                <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                                    <b>USED MACHINERY</b>
                                </h2>
                                <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                    <span style={{ fontWeight: 'bold' }}>Machinery Name:</span> {machinery.machineryName}<br />
                                    <span style={{ fontWeight: 'bold' }}>User NIC:</span> {machinery.nic}<br />
                                    <span style={{ fontWeight: 'bold' }}>Use Date:</span> {machinery.date}<br />
                                    <br />
                                </p>
                            </Typography>
                        ))
                    ) : (
                        <Typography variant="body2" style={{ textAlign: 'center', padding: '16px' }}>
                            <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '8px' }}>
                                <b>No Data Available</b>
                            </h2>
                        </Typography>
                    )}
                </DialogContent>

            </Dialog>
        </Box>
    );
}

export default FarmLandCard;