import React from 'react';
//import './home.css'
import Header from '../components/header'
import Feed from '../components/feed'
import Navbar from '../components/navbar'
import { makeStyles} from '@material-ui/core';


import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column', 
    },
    main: {
        height: '100vh',
        padding: 24,

    },
    toolbar: {
        display: 'flex',
        minHeight: '64px',
    },
})
const Home = () => {
    const classes = useStyles();
    return (
        <div className= {classes.root}>
            <Header/>
            <div className={classes.toolbar}></div>
            <main className= {classes.main}>
                <Container maxWidth='lg'>
                    <Box display='flex'>
                        <Navbar/>
                        <Feed />  
                    </Box>
                </Container>
            </main>
        </div>
    )
};

export default Home;