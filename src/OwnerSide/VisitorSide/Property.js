import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import styles from './modules/Property.module.css';
import {Link} from 'react-router-dom';

const Property = () => {

  const classes={
    card: {
      maxWidth: "100%",
      margin:'15px'
    },
    media: {
      height: 240,
      width:'100%',
      // margin:'20px'
    },
  }

    return (
        <div>
          <h1 style={{fontWeight:'bold'}}>PLEASE SELECT YOUR FAVOURITE CATEGORY</h1>
          <div className={styles.ShailuData} style={{marginTop:'10px'}}>
          <Grid item xs={12} sm={6} md={4}>
                <Link to="/visitor/display-property-by-single-page">
            <Card style={classes.card}>
              <CardActionArea>
                <CardMedia
                  style={classes.media}
                  image="https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                  title="Contemplative Reptile"
                  alt="description"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Elite ornate
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component={'span'}>
                  <p>3,4 BHK villa </p>
                    <p>Tamilnadu,chennai</p>
                    <p>₹50lakh</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            
            </Card>
            </Link>
          </Grid>
             <Grid item xs={12} sm={6} md={4}>
          <Link to="/visitor/display-property-by-single-page">
            <Card style={classes.card}>
              <CardActionArea>
                <CardMedia
                  style={classes.media}
                  image="https://realtybiznews.com/wp-content/uploads/2016/10/maxresdefault.jpg"
                  title="Contemplative Reptile"
                  alt="description"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Elite ornate
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component={'span'}>
                  <p>3,4 BHK villa </p>
                    <p>Tamilnadu,chennai</p>
                    <p>₹50lakh</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            
            </Card>
            </Link>
          </Grid>
             <Grid item xs={12} sm={6} md={4}>
             <Link to="/visitor/display-property-by-single-page">
            <Card style={classes.card}>
              <CardActionArea>
                <CardMedia
                  style={classes.media}
                  image="https://www.moneyworksmagazine.com/wp-content/uploads/2019/12/20191206175302-hero-background2x-6.jpeg"
                  title="Contemplative Reptile"
                  alt="description"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Elite ornate
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component={'span'}>
                  <p>3,4 BHK villa </p>
                    <p>Tamilnadu,chennai</p>
                    <p>₹50lakh</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            
            </Card>
            </Link>
          </Grid>
             <Grid item xs={12} sm={6} md={4}>
             <Link to="/visitor/display-property-by-single-page">
            <Card style={classes.card}>
              <CardActionArea>
                <CardMedia
                  style={classes.media}
                  image="http://lefthandadvertising.com/wp-content/uploads/2015/12/real-estate-photography9.jpg"
                  title="Contemplative Reptile"
                  alt="description"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Elite ornate
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component={'span'}>
                  <p>3,4 BHK villa </p>
                    <p>Tamilnadu,chennai</p>
                    <p>₹50lakh</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            
            </Card>
            </Link>
          </Grid>
          </div>
        </div>
    )
}

export default Property;
