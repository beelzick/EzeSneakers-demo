import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import styles from './navbar.module.css'
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SearchDialog from './SearchDialog';
import { selectSearchOpen, setSearchOpen } from '../../../redux/slices/searchDialogSlice';
import { useDispatch, useSelector } from 'react-redux';
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import CloseIcon from '@mui/icons-material/Close';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    crusor: 'pointer',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        cursor: 'pointer',
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '130px',
        },
    },
    '& .Mui-disabled': {
        '-webkit-text-fill-color': '#f7f7f7 !important'
    }
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-container': {
        alignItems: 'flex-start',
    },
    '& .MuiDialog-paper': {
        margin: 'unset',
        width: '100%',
        maxWidth: 'unset',
        [theme.breakpoints.up('mdlg2')]: {
            height: '15%'
        }
    }
}))

export default function SearchField() {
    const theme = useTheme();
    const dispatch = useDispatch()
    const fullScreen = useMediaQuery(theme.breakpoints.down('mdlg2'));
    const searchOpen = useSelector(selectSearchOpen)

    const handleOpenClick = () => {
        dispatch(setSearchOpen(true))
    }

    const handleClose = () => {
        dispatch(setSearchOpen(false))
    }
    return <>
        <Search className={styles.search} onClick={handleOpenClick}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                disabled
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
        <StyledDialog
            fullScreen={fullScreen}
            open={searchOpen}
            onClose={handleClose}
            className='h-100'
        >
            <Grid container p={2} direction='column' className='h-100'>
                <Grid item container direction='row' sx={{ maxHeight: '43px' }}>
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
                        <SearchDialog />
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
                </Grid>
                <div className='grow' />
                <Grid item container justifyContent='flex-end' sx={{ display: { mdlg2: 'none' } }}>
                    <Button size='large' onClick={handleClose}>
                        close
                    </Button>
                </Grid>
            </Grid>
        </StyledDialog>
    </>
}