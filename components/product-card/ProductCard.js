import Box from '@mui/material/Box'
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
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
import styles from './productCard.module.css'

export default function ProductCard({ imgUrl, id, name, price }) {
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
    }, [])

    const handleChange = async (event) => {
        const reqData = {
            productId: id
        }
        const { checked } = event.target
        if (checked) {
            const response = await axios.post('/api/user/favorites', reqData)
            response.data.sucess && (await dispatch(fetchFavorites()))


        } else {
            const response = await axios.delete('/api/user/favorites', { data: reqData })
            response.data.sucess && (await dispatch(fetchFavorites()))
        }
    }

    const handleClick = async () => {
        setChecked(prevValue => !prevValue)
    }
    const label = { inputProps: { 'aria-label': 'Checkbox Heart' } };

    return (
        <Box className={styles.root}>
            <NextLink href={`/sneakers/${id}`} passHref>
                <CardActionArea>
                    <Image
                        src='https://res.cloudinary.com/dfvpybkta/image/upload/v1629970595/ecom-portfolio/sample-sneaker_tprfhj.jpg'
                        alt={name}
                        title={name}
                        width='600'
                        height='600'
                    />
                </CardActionArea>
            </NextLink>
            <CardActions className={styles.cardActions}>
                <Typography variant='subtitle1' component='span'>
                    {name}
                </Typography>
                <div className='grow'></div>
                <Typography variant='subtitle1' component='span'>
                    {price} $
                </Typography>
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