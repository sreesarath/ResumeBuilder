import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';


function Header() {
  let about="A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews."
  return (
    
    
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'blue' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img src="https://image.winudf.com/v2/image1/Y29tLnRhcHVuaXZlcnNlLmFpcGhvdG9lZGl0b3JfaWNvbl8xNzMwODQyMzI2XzA1Mw/icon.png?w=156&fakeurl=1" alt="" width={"40px"} /> 
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontFamily:'"Solway", serif;', fontWeight:'bold' }}>
            <Link to={'/'} className='text-light fw-bold text-decoration-none'>
            Resume Buider
            </Link>
           
          </Typography>
          <Tooltip title={about}>
            <Button color="inherit">Login</Button>
          </Tooltip>
          
        </Toolbar>
      </AppBar>
    </Box>
    
  )
}

export default Header
