import React from 'react'
import { tokens } from '../theme'
import { Typography , Box , useTheme } from '@mui/material'

const Header = ({title , subtitle})=> {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
  <Box mb='30px' >
    <Typography
    variant='h2'
    color={colors.grey[100]} fontWeight='bold'
    sx={{mb:'5px', ml:'10px'}}
    >
{title}
    </Typography>
    <Typography variant='h5' sx={{ml:'10px'}}
     color={colors.greenAccent[400]}>
        {subtitle}
    </Typography>

  </Box>
  )
}

export default Header
