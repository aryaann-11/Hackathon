import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './Style';
import { Button, Container } from '@material-ui/core';


export default function Info(props) {
    const classes = useStyles();

    const {name, host, address } = props;
    return (
        <div className={classes.container2}>
            <Container>
                <Paper className={classes.paper}>
                    <Grid container direction="column" justify="flex-start" alignItems="flex-start" xs={12}>
                        <Grid item xs={12} className={classes.paper}>
                            <Typography color='secondary' variant='h6'>NAME :
                                <Typography>{name}</Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container direction="column" justify="flex-start" alignItems="flex-start" xs={12}>
                        <Grid item xs={12} className={classes.paper}>
                            <Typography color='secondary' variant='h6'>VENUE : 
                            <Typography>{address}</Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container direction="column" justify="flex-start" alignItems="flex-start" xs={12}>
                        <Grid item xs={12} className={classes.paper}>
                            <Typography color='secondary' variant='h6'>DESCRIPTION : </Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container direction="column" justify="flex-start" alignItems="flex-start" xs={12}>
                        <Grid item xs={12} className={classes.paper}>
                            <Typography color='secondary' variant='h6'>DATE AND TIME : </Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container direction="column" justify="flex-start" alignItems="flex-start" xs={12}>
                        <Grid item xs={12} className={classes.paper}>
                            <Typography color='secondary' variant='h6'>NOTES : </Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paper}>
                    <Grid container direction="column" justify="flex-start" alignItems="flex-start" xs={12}>
                        <Grid item xs={12} className={classes.paper}>
                            <Typography color='secondary' variant='h6'>HOSTED BY : 
                            <Typography>{host}</Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

            <Grid container direction="column" alignItems="center" >
                <Grid item xs={12} className={classes.paper}>
                    <Button color='secondary' variant='contained'>RSVP</Button>
                </Grid>
            </Grid>
        </div >
    );
}
