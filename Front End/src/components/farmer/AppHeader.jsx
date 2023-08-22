import React from 'react';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useProSidebar } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useNic } from '../NicContext'; // Make sure to import the NicContext
import TextField from '@mui/material/TextField';

function AppHeader() {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
    const { clearNic } = useNic(); // Get the clearNic function from the context

    const handleSignOut = () => {
        clearNic(); // Clear the NIC value
        navigate('/'); // Navigate to the "/" route
    };

    return (
        <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar>
                <IconButton
                    onClick={() => (broken ? toggleSidebar() : collapseSidebar())}
                    color="secondary"
                >
                    <MenuIcon />
                </IconButton>
                <Box component={TextField} sx={styles.appLogo} value="Crop Master" />

                <Box sx={{ flexGrow: 1 }} />

                <IconButton title="Sign Out" color="secondary" onClick={handleSignOut}>
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: '#6D8B74',
    },
    appLogo: {
        borderRadius: 5,
        width: 120,
        marginLeft: 2,
        cursor: 'pointer',
    },
};

export default AppHeader;
