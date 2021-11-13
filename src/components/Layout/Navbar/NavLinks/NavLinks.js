import Link from '@mui/material/Link'
import { useDispatch } from 'react-redux'
import styles from './NavLinks.module.css'
import NextLink from 'next/link'
import { navLinksData } from '../../../../helpers/navbarHelpers'
import { v4 as uuidv4 } from 'uuid'

export default function NavLink() {
    const dispatch = useDispatch()
    return (
        <div className={styles.navLinks}>
            {navLinksData.map(({ link, func }) => (
                <div
                    key={uuidv4()}
                    className={styles.linkContainer}
                    onMouseEnter={() => dispatch(func(true))}
                    onMouseLeave={() => dispatch(func(false))}
                >
                    <NextLink href={`/sneakers/${link}`} passHref>
                        <Link underline='none' variant='button' color='inherit'>
                            {link}
                        </Link>
                    </NextLink>
                </div>
            ))}
        </div>
    )
}