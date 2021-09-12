import { Grid, Typography, Box } from '@material-ui/core'
import ProductCard from '../components/ProductCard'
import { useSession } from 'next-auth/react'
import LoadingPage from '../components/loadings/LoadingPage'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { selectFavorites } from '../redux/slices/favoritesSlice'
import { useSelector } from 'react-redux'

export default function Favorites() {
    const favorites = useSelector(selectFavorites)
    const router = useRouter()
    const { data: session } = useSession()

    useEffect(() => {
        if (!session) {
            router.push('/')
        }
    }, [])

    if (session) {
        return (
            <Grid container direction='column' className='page-container'>
                <Grid item xs={12}>
                    <Box mb={4}>
                        <Typography variant='h4' component='h1'>
                            Favorites
                        </Typography>
                    </Box>
                </Grid>
                <Grid container direction='row' justifyContent='space-between' alignItems='flex-start'>
                    {favorites.map(favorite => (
                        <Box key={favorite._id} mb={4}>
                            <ProductCard
                                name={favorite.name}
                                id={favorite._id}
                                imgUrl={favorite.imgUrl}
                                price={favorite.price}
                            />
                        </Box>
                    ))}
                </Grid>
            </Grid>
        )
    } else {
        return <LoadingPage />
    }

}

