import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './compontents/Posts/Posts'
import Form from './compontents/Form/Form'
import stackcodes from './images/stackcodes.png';
import useStyles from './styles';


const App = () => {
    const [currentPostId, setcurrentPostId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentPostId, dispatch]);

    return (
        <Container maxWidth="xlg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Stack Codes</Typography>
                <img className={classes.image} src={stackcodes} alt="stackcodes" height="100" />
            </AppBar>
            <Grow in>
                <Container maxWidth="xlg">
                    <Grid container className={classes.mainGrid} justifyContent="space-between" alignItems="stretch" spacing={3} >
                        <Grid item xs={12} sm={9}>
                            <Posts setcurrentPostId={setcurrentPostId} />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Form currentPostId={currentPostId} setcurrentPostId={setcurrentPostId} />
                        </Grid>
                    </Grid>
                </Container>

            </Grow>
        </Container>
    );
}


export default App;