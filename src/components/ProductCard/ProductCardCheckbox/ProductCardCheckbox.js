import styles from './ProductCardCheckbox.module.css'
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavorites } from '../../../redux/slices/favoritesSlice';
import { useSnackbar } from 'notistack'
import { selectFavoritesIds } from '../../../redux/slices/favoritesSlice';
const label = { inputProps: { 'aria-label': 'Checkbox Heart' } };

export default function ProductCardCheckbox({ status, id }) {
    const favoritesIds = useSelector(selectFavoritesIds)
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(false)

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

    return (
        <Grid
            item
            xs={1}
            className={styles.checkboxContainer}
            order={{ md: 3 }}
            container
            justifyContent='flex-end'
        >
            {status === 'authenticated' && (
                <Checkbox
                    {...label}
                    sx={{ marginTop: '-8px' }}
                    icon={<FavoriteBorderIcon />}
                    onChange={handleChange}
                    checkedIcon={<FavoriteIcon sx={{ color: '#ef476f' }} />}
                    onClick={handleClick}
                    checked={checked}
                />

            )}
        </Grid>
    )
}