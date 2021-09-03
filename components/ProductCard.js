import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, CardActions, Button, CardMedia, Card, FormControlLabel, Checkbox, Typography, Box } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NextLink from 'next/link'
import { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
const useStyles = makeStyles({
    root: {
        width: 450,
        position: 'relative'
    },
    cardImg: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cardActions: {
        justifyContent: 'flex-end'
    },
    grow: {
        flexGrow: 1
    },
    imgContainer: {
        height: 450,
        width: 450,
    },
    imgIconContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
});


export default function ProductCard({ imgUrl, id, name, price }) {
    const [loggedIn, setLoggedIn] = useState(null)
    const [checked, setChecked] = useState(false)
    const classes = useStyles();
    const handleChange = async (event) => {
        const response = await axios({
            url: '/api/users/auth',
            method: 'GET'
        })
        console.log(response.data)
        setChecked(event.target.checked)
    }
    return (
        <Box className={classes.root}>
            <NextLink href={`/sneakers/${id}`} passHref>
                <CardActionArea>
                    <div className={classes.imgContainer}>
                        <img
                            src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_450/v1629970595/ecom-portfolio/sample-sneaker_tprfhj.jpg'
                            alt={name}
                            title={name}
                            className={classes.cardImg}
                        />
                    </div>
                </CardActionArea>
            </NextLink>
            <CardActions className={classes.cardActions}>
                <Typography variant='subtitle1' component='span'>
                    {name}
                </Typography>
                <div className={classes.grow}></div>
                <Typography variant='subtitle1' component='span'>
                    {price} $
                </Typography>
            </CardActions>
            <div className={classes.imgIconContainer}>
                <FormControlLabel
                    onChange={handleChange}
                    control={<Checkbox icon={<FavoriteBorderIcon />}
                        checkedIcon={<FavoriteIcon style={{ color: 'ef476f' }} />}
                        name="heart"
                    />}
                />
            </div>
        </Box>
    );
}