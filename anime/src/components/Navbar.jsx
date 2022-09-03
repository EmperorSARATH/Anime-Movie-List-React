import React from 'react'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

const Navbar = () => {
  return (
    <Container sx={{backgroundColor:"coral",display:"flex",}} >
        <Box sx={{bgcolor:"skyblue",justifyItems:"center",marginLeft:"50%"}}>
            Anime Movies List
        </Box>
        </Container>
  )
}

export default Navbar