import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SearchDialogField from './SearchDialogField';
import { selectSearchOpen, setSearchOpen } from '../../../../redux/slices/searchDialogSlice';
import { useDispatch, useSelector } from 'react-redux';
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import { v4 as uuidv4 } from 'uuid';

const StyledLink = styled(Link)(() => ({
    '&.MuiTypography-root.MuiLink-root': {
        color: '#7e7e7e',
        width: 'fit-content'
    },
    '&.MuiTypography-root.MuiLink-root:hover': {
        color: 'black'
    }
}))

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-container': {
        alignItems: 'flex-start',
    },
    '& .MuiDialog-paper': {
        margin: 'unset',
        width: '100%',
        maxWidth: 'unset',
        [theme.breakpoints.up('mdlg2')]: {
            minHeight: '260px',
        }
    }
}))

export default function SearchDialog() {
    const theme = useTheme();
    const dispatch = useDispatch()
    const fullScreen = useMediaQuery(theme.breakpoints.down('mdlg2'));
    const searchOpen = useSelector(selectSearchOpen)

    const handleClose = () => {
        dispatch(setSearchOpen(false))
    }

    return <StyledDialog
        fullScreen={fullScreen}
        open={searchOpen}
        onClose={handleClose}
        className='h-100'
    >
        <Grid container p={2} direction='column' className='h-100'>
            <Grid item container sx={{ maxHeight: '43px' }}>
                <Grid
                    item
                    xs={12} sm={3} xl={4} pr={1} mb={1}
                >
                    <NextLink href='/' passHref>
                        <Link variant='h6' noWrap color='black' underline='none'>
                            EzeSneakers
                        </Link>
                    </NextLink>
                </Grid>
                <Grid
                    item
                    xs={12} sm={8} md={7} lg={6} xl={4}
                    container
                    alignItems='flex-start'>
                    <SearchDialogField />
                </Grid>
                <Grid
                    item
                    xs={1} md={2} mdlg2={2} lg={3} xl={4}
                    container
                    justifyContent='flex-end'
                    sx={{ display: { xs: 'none', mdlg2: 'flex' } }}
                >
                    <IconButton
                        sx={{ marginTop: '-8px', marginRight: { xs: 'unset', md: '20px' } }}
                        onClick={handleClose}
                    >
                        <CloseIcon fontSize='large' sx={{ color: 'black' }} />
                    </IconButton>
                </Grid>
                <Grid item container direction='row' sx={{ marginTop: { xs: '12px', mdlg2: 'unset' } }}>
                    <Grid item xs={12} mdlg2={3} xl={4} />
                    <Grid
                        container
                        direction='column'
                        item
                        xs={12} sm={8} md={7} lg={6} xl={4}
                        sx={{ zIndex: 0 }}
                    >
                        <Typography variant='h5' component='span' gutterBottom sx={{ fontWeight: 500 }} mt={2}>
                            Popular search terms
                        </Typography>
                        {['adidas', 'puma men', 'nike air max'].map((term) => (
                            <NextLink href={`/search/${term}`} passHref key={uuidv4()}>
                                <StyledLink color='primary' underline='none' variant='button' fontSize='large' onClick={handleClose}>
                                    {term}
                                </StyledLink>
                            </NextLink>
                        ))}
                        <NextLink href='/sneakers/women/women-love' passHref>
                            <StyledLink color='primary' underline='none' variant='button' fontSize='large' onClick={handleClose}>
                                women love
                            </StyledLink>
                        </NextLink>
                    </Grid>
                </Grid>
            </Grid>
            <div className='grow' />
            <Grid item container justifyContent='flex-end' sx={{ display: { mdlg2: 'none' } }}>
                <Button size='large' onClick={handleClose}>
                    close
                </Button>
            </Grid>
        </Grid>
    </StyledDialog>
}