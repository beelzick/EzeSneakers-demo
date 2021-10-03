import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { selectDemoDialogOpen, demoDialogClose } from '../../redux/slices/demoDialogSlice';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import HappySvg from '../svg/HappySvg';
import Grid from '@mui/material/Grid'

export default function DemoDialog() {
    const dispatch = useDispatch()
    const demoDialogOpen = useSelector(selectDemoDialogOpen)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={demoDialogOpen}
                onClose={() => dispatch(demoDialogClose())}
                aria-labelledby='demo-dialog'
            >
                <DialogTitle id='demo-dialog'>
                    Showcase Project
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This is a showcase project so any features connected with placing an order are not included.
                    </DialogContentText>
                    <DialogContentText>
                        Thank you for your time
                    </DialogContentText>
                    <Grid container justifyContent='center' alignItems='center' pt={4}>
                        <HappySvg />
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => dispatch(demoDialogClose())}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}