import { useSession } from 'next-auth/react'
import LoadingPage from '../components/loadings/LoadingPage'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { selectFavorites } from '../redux/slices/favoritesSlice'
import { useSelector } from 'react-redux'
import SneakerNewPage from '../components/sneakers-page/SneakersNewPage'
import Head from 'next/head'

export default function Favorites() {
    const favorites = useSelector(selectFavorites)
    const router = useRouter()
    const { data: session } = useSession()

    useEffect(() => {
        if (!session) {
            router.push('/')
        }
    }, [session, router])

    return <>
        <Head>
            <title>Favorites | EzeSneakers</title>
        </Head>
        {session ? <SneakerNewPage sneakers={favorites} title='Favorites' /> : <LoadingPage />}
    </>

}

