import Box from '@mui/material/Box'
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavoritesIds } from '../../redux/slices/favoritesSlice';
import { fetchFavorites } from '../../redux/slices/favoritesSlice';
import Image from 'next/image'
import styles from './product-card.module.css'
import { useSnackbar } from 'notistack'

export default function ProductCard({ imgUrl, id, name, price }) {
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch()
    const favoritesIds = useSelector(selectFavoritesIds)
    const [checked, setChecked] = useState(false)
    const { data: session } = useSession()

    useEffect(() => {
        favoritesIds.map(favId => {
            if (favId === id) {
                setChecked(true)
            }
        })
    }, [favoritesIds, id])

    const handleChange = async (event) => {
        const reqData = {
            productId: id
        }
        const { checked } = event.target
        if (checked) {
            const response = await axios.post('/api/user/favorites', reqData)
            if (response.data.sucess) {
                dispatch(fetchFavorites())
                enqueueSnackbar('Added to favorites', {
                    variant: 'success'
                })
            }
        } else {
            const response = await axios.delete('/api/user/favorites', { data: reqData })
            if (response.data.sucess) {
                dispatch(fetchFavorites())
                enqueueSnackbar('Removed from favorites', {
                    variant: 'success'
                })
            }
        }
    }

    const handleClick = async () => {
        setChecked(prevValue => !prevValue)
    }

    const label = { inputProps: { 'aria-label': 'Checkbox Heart' } };

    return (
        <Box className={styles.root}>
            <NextLink href={`/sneakers/${id}`} passHref>
                <CardActionArea sx={{ borderRadius: '10px' }}>
                    <Image
                        src='https://res.cloudinary.com/dfvpybkta/image/upload/c_scale,h_839/v1629970595/ecom-portfolio/sample-sneaker_tprfhj.webp'
                        alt={name}
                        title={name}
                        width='600'
                        height='600'
                        className={styles.image}
                    />
                </CardActionArea>
            </NextLink>
            <CardActions>
                <Grid container>
                    <Grid item xs={8}>
                        <NextLink href={`/sneakers/${id}`} passHref>
                            <Typography variant='subtitle1' component='h2' sx={{ cursor: 'pointer' }}>
                                {name}
                            </Typography>
                        </NextLink>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='subtitle1' component='h5' align='right'>
                            {price} $
                        </Typography>
                    </Grid>
                </Grid>
            </CardActions>
            {session && <div className={styles.imgIconContainer}>
                <Checkbox
                    {...label}
                    icon={<FavoriteBorderIcon />}
                    onChange={handleChange}
                    checkedIcon={<FavoriteIcon style={{ color: 'ef476f' }} />}
                    onClick={handleClick}
                    checked={checked}
                />
            </div>}
        </Box>
    );
}