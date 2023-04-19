import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box display="flex" justifyContent="space-around" backgroundColor="rgb(0, 35, 50)" color="white" padding="10px" >
        <Link to="/" >Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
    </Box>
  )
}

export default Navbar