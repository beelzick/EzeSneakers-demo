import { CardActionArea, CardActions, FormControlLabel, Checkbox, Typography, Box } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import useStyles from '../src/productCardMUIstyles'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavoritesIds } from '../redux/slices/favoritesSlice';
import { fetchFavorites } from '../redux/slices/favoritesSlice';

export default function ProductCard({ imgUrl, id, name, price }) {
    const dispatch = useDispatch()
    const favoritesIds = useSelector(selectFavoritesIds)
    const [checked, setChecked] = useState(false)
    const { data: session } = useSession()
    const classes = useStyles()

    useEffect(() => {
        favoritesIds.map(favId => {
            if (favId === id) {
                setChecked(true)
            }
        })
    }, [])

    const handleChange = async (event) => {
        const reqData = {
            productId: id
        }
        const { checked } = event.target
        if (checked) {
            const response = await axios.post('/api/user/favorites', reqData)
            response.data.sucess && await dispatch(fetchFavorites())


        } else {
            const response = await axios.delete('/api/user/favorites', { data: reqData })
            response.data.sucess && await dispatch(fetchFavorites())
        }
    }
    
    const handleClick = async () => {
        setChecked(prevValue => !prevValue)
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
            {session && <div className={classes.imgIconContainer}>
                <FormControlLabel
                    control={<Checkbox checked={checked} onChange={handleChange} onClick={handleClick} icon={<FavoriteBorderIcon />}
                        checkedIcon={<FavoriteIcon style={{ color: 'ef476f' }} />}
                        name="heart"
                    />}
                />
            </div>}
        </Box>
    );
}