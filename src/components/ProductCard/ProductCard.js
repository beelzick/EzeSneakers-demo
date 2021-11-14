import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { fetchFavorites } from '../../redux/slices/favoritesSlice';
import styles from './ProductCard.module.css'
import { useSnackbar } from 'notistack'
import ProductCardImage from './ProductCardImage';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductCardCheckbox from './ProductCardCheckbox/ProductCardCheckbox';

export default function ProductCard({ imgUrl, id, name, price }) {
    const { status } = useSession()
    return (
        <div>
            <ProductCardImage imgUrl={imgUrl} id={id} name={name} />
            <Grid container p={1}>
                <ProductName name={name} id={id} />
                <ProductPrice price={price} />
                <ProductCardCheckbox status={status} id={id} />
            </Grid>
        </div>
    );
}