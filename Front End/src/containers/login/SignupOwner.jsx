import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    Snackbar,
    Box,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import backgroundImg from '../../assets/background/background.jpg'
import backgroundImage from "../../assets/background/background.jpg";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignupOwner = () => {
    const [nic, setNic] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');

    const navigate = useNavigate();
    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const containerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        transition: 'transform 0.3s ease',
        transform: 'scale(1)', // Initial scale
        '&:hover': {
            transform: 'scale(1.1)', // Enlarge the size on hover
        },

        maxWidth: '100%', // Set the maximum width to 100% of the parent container
        width: '100%',    // Set the actual width to 100% of the available space

        /* Media query for larger screen sizes */
        '@media (min-width: 1200px)': {
            maxWidth: '1200px', // Set a maximum width for large screens
            width: '100%',      // Keep the width at 100%
            padding: '0 20px',  // Add padding on the sides if needed
            margin: '0 auto',   // Center the container horizontally
        }

    };

    const handleSignUp = async () => {
        if (!nic || !name || !password) {
            setErrorMessage('All required fields must be filled.');
            setErrorSnackbarOpen(true);
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/owner/addNew`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nic: nic,
                    password: password,
                    name: name,
                    mobile: mobile,
                    age: age,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Signup successful, navigate to corresponding page
                navigate(`/`);
            } else {
                // Handle signup error and show snackbar with error message
                setErrorMessage(data.error);
                setErrorSnackbarOpen(true);
            }
        } catch (error) {
            console.error('Error during signup:', error);
            // Handle error (e.g., network issue)
        }
    };

    const handleSnackbarClose = () => {
        setErrorSnackbarOpen(false);
        setErrorMessage('');
    };

    return (
        <Container style={containerStyle}>
            <Box
                sx={{
                    backgroundColor: 'rgba(1, 32, 93, 0.2)',// Background color for the form box
                    padding: '20px',
                    borderRadius: '8px',
                }}
            >
                <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding:'10px'}}>
                    SIGN UP AS A OWNER
                </Typography>
                <TextField
                    label="NIC *"
                    fullWidth
                    margin="normal"
                    value={nic}
                    onChange={(e) => setNic(e.target.value)}
                />
                <TextField
                    label="Name *"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Mobile *"
                    fullWidth
                    margin="normal"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                <TextField
                    label="Age *"
                    fullWidth
                    margin="normal"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <TextField
                    label="Password *"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleSignUp}>
                    Sign Up
                </Button>
                <Typography variant="h6" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(1, 32, 93,1)', padding:'10px'}}>
                    Already have an account? <Link to="/">Log in</Link>
                </Typography>
            </Box>
            <Snackbar open={errorSnackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="error">
                    {errorMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default SignupOwner;