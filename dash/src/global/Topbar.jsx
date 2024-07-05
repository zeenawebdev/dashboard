import React, { useContext } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';





const Topbar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

  return (
    <Box  display='flex' justifyContent='flex-end' p={2}>




<Box display='flex'>

<IconButton onClick={colorMode.toggleColorMode} >

    {theme.palette.mode === 'dark' 
    ? (
        <DarkModeOutlinedIcon/>
    )
: (
<LightModeOutlinedIcon/>
)
}
    
</IconButton>
<IconButton >

<NotificationsOutlinedIcon/>

</IconButton>
<IconButton >

    <SettingsOutlinedIcon/>

</IconButton>
<IconButton >
    <PersonOutlinedIcon/>

</IconButton>

</Box>


    </Box>
  )
}

export default Topbar
