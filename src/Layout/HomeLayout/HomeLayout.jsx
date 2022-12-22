import React from 'react'
import Grid from '@mui/material/Grid'
import SideBar from '../SideBar/SideBar'
import MainContent from '../Main/MainContent'
import Container from '../Container/Container'
import Header from '../Header/Header'
import RightBar from '../RightBar/RightBar'
import Divider from '@mui/material/Divider';
import HeaderD from '../Header/Header2'
import AsideBar from '../AsideBar/AsideBar'


const HomeLayout = ({ children }) => {
  return (
    <>
        <HeaderD />
        <Grid
          sx={{
            display: 'flex',
            width: '94%',
            // bgcolor: 'lightblue',
            m: 'auto',
            gap: 0.5
            // mx: 6,
            // ml: 6,
            }}
        >
          <SideBar />
          <AsideBar />
          <MainContent>{children}</MainContent>
            <Divider></Divider>
          <RightBar />
        </Grid>
    </>
  )
}

export default HomeLayout