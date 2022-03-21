import React from 'react'
import logo from '../assests/logo.png'
import '../App.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <div className='header'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{backgroundColor:"#E8E8E8"}} position="static">
                    <Toolbar>
                        <img src={logo} />
                        
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Header