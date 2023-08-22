// Home.jsx
import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import AppHeader from "../components/farmer/AppHeader.jsx";
import SideNav from "../components/farmer/SideNav.jsx";
import {Outlet} from "react-router-dom";
import {useNic} from "../components/NicContext.jsx";

const FarmerLayout = () => {
    const { nic } = useNic(); // Get the nic value from context

    return (
        <>
            <AppHeader />

            <Box sx={styles.container}>
                <SideNav />
                <Box component={'main'} sx={styles.mainSection}>
                    {/* Pass the nic value to child components */}
                    <Outlet nic={nic} />
                </Box>
            </Box>
        </>
    );
};

const styles = {
    container: {
        display: 'flex',
        bgcolor: 'neutral.light',
        height: 'calc(100% - 64px)'
    },
    mainSection: {
        p: 4,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        margin:'0px',
        padding:'0px',
    }
}

export default FarmerLayout;
