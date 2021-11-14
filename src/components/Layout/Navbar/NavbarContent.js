import NextLink from 'next/link'
import Link from '@mui/material/Link';
import NavLinks from './NavLinks/NavLinks'
import Search from './Search/Search'
import MoreIconButton from './RightSideMenu/Mobile/MoreIconButton';
import SearchIconButton from './RightSideMenu/SearchIconButton';
import NavIcons from './NavIcons/NavIcons';
import MenuIconButton from './NavIcons/MenuIconButton';
import useStyles from '../../../helpers/navbarMUIstyles';

export default function NavbarContent({ status }) {
    const classes = useStyles();
    return (
        <>
            <MenuIconButton />
            <NextLink href='/' passHref>
                <Link className={classes.title} variant='h6' noWrap color='secondary' underline='none'>
                    EzeSneakers
                </Link>
            </NextLink>
            <div style={{ flexGrow: 1.655 }} />
            <NavLinks />
            <div className='grow' />
            <Search />
            <SearchIconButton />
            <NavIcons status={status} />
            <MoreIconButton />
        </>
    )
}