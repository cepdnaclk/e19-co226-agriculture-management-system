import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import {Link, useLocation, useNavigate} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GrassIcon from '@mui/icons-material/Grass';
import {useNic} from "../NicContext.jsx";
import {useEffect, useState} from "react";

function SideNav() {
    const { collapsed } = useProSidebar();
    const theme = useTheme();
    const { nic } = useNic();
    const location = useLocation();

    const [owner, setOwner] = useState(''); // State to hold the farmer's name

    useEffect(() => {
        const fetchOwnerName = async () => {
            try {
                const response = await fetch(`http://localhost:8080/owner/${nic}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch farmer name');
                }
                const data = await response.json();
                setOwner(data);
            } catch (error) {
                console.error('Error fetching farmer name:', error);
            }
        };

        fetchOwnerName();
    }, [nic]);

    return <Sidebar
        style={{ height: "100%", top: 'auto' }}
        breakPoint="md"
        backgroundColor={'#D7FBE8'}
    >
        <Box sx={styles.avatarContainer}>
            <Avatar sx={styles.avatar} alt="Masoud" src="src/assets/avatars/login.jpg" />
            {!collapsed ? <Typography variant="body2" sx={styles.yourChannel}>Owner</Typography> : null}
            {!collapsed ? <Typography variant="overline"> {owner.name}</Typography> : null}
        </Box>

        <Menu
            menuItemStyles={{
                button: ({ level, active }) => {
                    return {
                        backgroundColor: active ? theme.palette.neutral.medium : undefined,
                    };
                },
            }}>
            <MenuItem active={window.location.pathname === "/ownerhome"} component={<Link to="/ownerhome" />} icon={<HomeOutlinedIcon />}> <Typography variant="body2">Home</Typography> </MenuItem>
            <MenuItem active={window.location.pathname === "/addfarmer"} component={<Link to="/addfarmer" />} icon={<AccountCircleIcon />}> <Typography variant="body2">Farmer Details </Typography></MenuItem>
            <MenuItem active={window.location.pathname === "/addfarmland"} component={<Link to="/addfarmland" />} icon={<GrassIcon />}> <Typography variant="body2"> Farm Land </Typography></MenuItem>

        </Menu >
    </Sidebar >; 
}

export default SideNav;

/**
 * @type {import("@mui/material").SxProps}
 */
const styles = {
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        my: 5
    },
    avatar: {
        width: '40%',
        height: 'auto'
    },
    yourChannel: {
        mt: 1
    }

}