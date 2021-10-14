import Box from '@mui/material/Box'
import CardActionArea from '@mui/material/CardActionArea';
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

    const createBlurDataUrl = (imgUrl) => {
        if (imgUrl.includes('w_800')) {
            return imgUrl.replace('h_800,w_800', 'h_100,q_10,w_100')
        } else {
            return imgUrl.replace('h_800', 'h_100,q_10')
        }
    }

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
        <Box>
            <NextLink href={`/sneakers/${id}`} passHref>
                <CardActionArea sx={{ borderRadius: '10px' }}>
                    <Image
                        quality={100}
                        src={imgUrl}
                        alt={name}
                        title={name}
                        width={800}
                        height={800}
                        className={styles.image}
                        placeholder='blur'
                        blurDataURL={createBlurDataUrl(imgUrl)}
                    />
                </CardActionArea>
            </NextLink>
            <Box p={1}>
                <Grid container >
                    <Grid item xs={8} sm={11} md={7}>
                        <NextLink href={`/sneakers/${id}`} passHref>
                            <Typography variant='subtitle1' component='h2' sx={{ cursor: 'pointer' }}>
                                {name}
                            </Typography>
                        </NextLink>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sm={12}
                        md={4}
                        container
                        order={{ sm: 3 }}
                        sx={{ justifyContent: { xs: 'flex-end', sm: 'unset', md: 'flex-end' } }}
                    >
                        <Typography
                            variant='subtitle1'
                            component='span'
                            align='right'
                        >
                            {price} $
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={1}
                        className={styles['checkbox-container']}
                        order={{ md: 3 }}
                    >
                        {session && <Checkbox
                            {...label}
                            sx={{ marginTop: '-8px' }}
                            icon={<FavoriteBorderIcon />}
                            onChange={handleChange}
                            checkedIcon={<FavoriteIcon sx={{ color: '#ef476f' }} />}
                            onClick={handleClick}
                            checked={checked}
                        />
                        }
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}