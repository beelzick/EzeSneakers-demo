import Navbar from './navbar/Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className='main'>
                {children}
            </main>
            <Footer />
        </>
    )
}