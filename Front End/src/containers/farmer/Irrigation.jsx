import React, { useState, useEffect } from 'react';
import {
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import {useNic} from "../../components/NicContext.jsx";
import backgroundImg from '../../assets/background/background1.jpg'

const AddIrrigationMethod = () => {
  const [irrigationData, setIrrigationData] = useState({
    delivery: '',
    source: '',
    method: '',
    maintainerNIC: '',
  });

  const [farmers, setFarmers] = useState([]);
  const paperStyle = { padding: '50px 20px', width: '500', margin: '20px auto',backgroundColor: 'rgba(1, 32, 93, 0.2)' ,};
  const [farmlands, setFarmlands] = useState([]);
  const [irrigationMethods, setIrrigationMethods] = useState([]);
  const [selectedFarmland, setSelectedFarmland] = useState('');
  const [selectedIrrigation, setSelectedIrrigation] = useState('');
  const { nic } = useNic(); // Get the nic value from context


  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await fetch('http://localhost:8080/farmer/getAll');
        if (!response.ok) {
          throw new Error('Failed to fetch farmer data');
        }
        const data = await response.json();
        setFarmers(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFarmers();
  }, []);

  useEffect(() => {
    const fetchFarmlands = async () => {
      try {
        const response = await fetch(`http://localhost:8080/farmland/getAll/${nic}`);
        if (!response.ok) {
          throw new Error('Failed to fetch farmland data');
        }
        const data = await response.json();
        setFarmlands(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFarmlands();
  }, [nic]);

  useEffect(() => {
    const fetchIrrigations = async () => {
      try {
        const response = await fetch('http://localhost:8080/irrigation/getAll');
        if (!response.ok) {
          throw new Error('Failed to fetch farmer data');
        }
        const data = await response.json();
        setIrrigationMethods(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIrrigations();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setIrrigationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddIrrigationMethod = async () => {
    try {
      const response = await fetch('http://localhost:8080/irrigation/addNew', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(irrigationData),
      });

      if (!response.ok) {
        throw new Error('Failed to add irrigation method');
      }

      // Clear the form or show a success message
      console.log('Irrigation method added successfully');
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAssignIrrigation = async () => {
    try {
      const response = await fetch(
          `http://localhost:8080/farmland/updateIrrigation/${selectedFarmland}/${selectedIrrigation}`,
          {
            method: 'PUT',
          }
      );

      if (!response.ok) {
        throw new Error('Failed to assign irrigation to farmland');
      }

      // Show success message or update state
      console.log('Irrigation assigned to farmland successfully');
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <Container style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', minHeight: '100vh',paddingTop: '20px',paddingBottom: '20px' , maxWidth: '100%' }}>
        <Paper elevation={3} sx={{ p: 4, mt: 10 }} style={paperStyle}>
          <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding: '10px' }}>
            ADD A NEW IRRIGATION METHOD TO THE DATABASE
          </Typography>

          <TextField
              label="Delivery"
              fullWidth
              name="delivery"
              value={irrigationData.delivery}
              onChange={handleInputChange}
              sx={{ mb: 2 }}
          />
          <TextField
              label="Source"
              fullWidth
              name="source"
              value={irrigationData.source}
              onChange={handleInputChange}
              sx={{ mb: 2 }}
          />
          <TextField
              label="Method"
              fullWidth
              name="method"
              value={irrigationData.method}
              onChange={handleInputChange}
              sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Maintainer NIC</InputLabel>
            <Select
                value={irrigationData.maintainerNIC}
                name="maintainerNIC"
                onChange={handleInputChange}
            >
              {farmers.map((farmer) => (
                  <MenuItem key={farmer.nic} value={farmer.nic}>
                    {farmer.name}
                  </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" onClick={handleAddIrrigationMethod} fullWidth sx={{backgroundColor: 'rgba(1, 32, 93, 0.6)'}}>
            ADD METHOD
          </Button>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, mt: 10 }} style={paperStyle}>
          <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding: '10px' }}>
            ASSIGN IRRIGATION METHOD TO A FARMLAND
          </Typography>
          {/* Other input fields and dropdowns (similar to previous code) */}
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Select the Farmland</InputLabel>
            <Select
                value={selectedFarmland}
                onChange={(e) => setSelectedFarmland(e.target.value)}
            >
              {farmlands.map((farmland) => (
                  <MenuItem key={farmland.farmlandID} value={farmland.farmlandID}>
                    {farmland.name}
                  </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Select the Irrigation Method</InputLabel>
            <Select
                value={selectedIrrigation}
                onChange={(e) => setSelectedIrrigation(e.target.value)}
            >
              {irrigationMethods.map((method) => (
                  <MenuItem key={method.systemID} value={method.systemID}>
                    {method.delivery}
                  </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
              variant="contained"
              onClick={handleAssignIrrigation}
              fullWidth
              sx={{ mt: 3 ,backgroundColor: 'rgba(1, 32, 93, 0.6)' }}

          >
            Assign Irrigation to Farmland
          </Button>
        </Paper>

      </Container>
  );
};

export default AddIrrigationMethod;