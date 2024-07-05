import React from 'react'
import Header from '../../components/Header'
import { Box } from '@mui/material'
import LineChart from '../../components/LineChart'

const Line = () => {
  return (
    <Box m='20px'>
        <Header title='Line Chart' subtitle='Data to Line Chart'/>
    
    <Box height='75vh'>
       <LineChart/>
    </Box>
    </Box>
  )
}

export default Line