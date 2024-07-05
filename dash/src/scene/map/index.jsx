import React from 'react'
import Header from '../../components/Header'
import { Box } from '@mui/material'
import GeographyChart from '../../components/GeographyChart'

const Geography = () => {
  return (
    <Box m='20px'>
        <Header title='Geo map' subtitle='Data to Map'/>
    
    <Box height='75vh'>
     <GeographyChart/>
    </Box>
    </Box>
  )
}

export default Geography