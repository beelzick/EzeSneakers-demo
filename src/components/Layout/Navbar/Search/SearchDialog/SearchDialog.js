import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SearchDialogField from './SearchDialogField/SearchDialogField';
import { selectSearchOpen, setSearchOpen } from '../../../../../redux/slices/searchDialogSlice';
import { useDispatch, useSelector } from 'react-redux';
import CloseButtonMobile from './CloseButtonMobile';
import PopularSearchTerms from './PopularSearchTerms/PopularSearchTerms';
import CloseButton from './CloseButton'
import StyledDialog from '../../../../StyledComponents/StyledDialog';
import EzeLogo from './EzeLogo';

export default function SearchDialog() {
    const theme = useTheme();
    const dispatch = useDispatch()
    const fullScreen = useMediaQuery(theme.breakpoints.down('mdlg2'));
    const searchOpen = useSelector(selectSearchOpen)

    const handleClose = () => {
        dispatch(setSearchOpen(false))
    }

    return (
        <StyledDialog
            fullScreen={fullScreen}
            open={searchOpen}
            onClose={handleClose}
            className='h-100'
        >
            <Grid container p={2} direction='column' className='h-100'>
                <Grid item container sx={{ maxHeight: '43px' }}>
                    <EzeLogo onClick={handleClose} />
                    <SearchDialogField />
                    <CloseButton onClick={handleClose} />
                    <PopularSearchTerms onClick={handleClose} />
                </Grid>
                <CloseButtonMobile onClick={handleClose} />
            </Grid>
        </StyledDialog>
    )
}