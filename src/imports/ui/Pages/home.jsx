import React from 'react'

import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import '@fontsource/roboto';
import useStyles from './Style';



export const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Container maxWidth='sm'>
                <Typography align='center' variant='h2' color='secondary' gutterBottom >TREEFER</Typography>
                <Typography align='center' paragraph>A place to find 'green-minded' people and events from all around the world. A place where you can take your first step and initiate a drive to make our Earth a better place to live in!</Typography>
            </Container>
            
        </div>
    )
}
