import { useSession } from 'next-auth/react'
import LoadingPage from '../components/loadings/LoadingPage'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { selectFavorites } from '../redux/slices/favoritesSlice'
import { useSelector } from 'react-redux'
import SneakersFavoritesPage from '../components/sneakers-page/SneakersFavoritesPage'
import Head from 'next/head'
import { useSnackbar } from 'notistack'

export default function Favorites() {
    const { enqueueSnackbar } = useSnackbar()
    const favorites = useSelector(selectFavorites)
    const router = useRouter()
    const { data: session } = useSession()

    useEffect(() => {
        if (!session) {
            router.push('/')
            enqueueSnackbar('You have to be logged in to go there', {
                variant: 'error'
            })
        }
    }, [session, router])

    return <>
        <Head>
            <title>Favorites | EzeSneakers</title>
            <meta name='robots' content='noindex' />
        </Head>
        {session ? <SneakersFavoritesPage sneakers={favorites} title='Favorites' /> : <LoadingPage />}
    </>

}

