import styles from './Navbar.module.css'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import LogInForm from '../../Forms/LogInForm'
import { useDispatch, useSelector } from 'react-redux'
import { selectOpen, dialogClose } from '../../../redux/slices/loginDialogSlice'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

export default function LoginDialog() {
    const dispatch = useDispatch()
    const open = useSelector(selectOpen)
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={styles.dialog}>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={() => dispatch(dialogClose())}
                aria-labelledby='form-dialog-title'
                maxWidth='sm'
                fullWidth={true}
            >
                <DialogContent >
                    <LogInForm />
                </DialogContent>
                {fullScreen && (
                    <DialogActions>
                        <Button onClick={() => dispatch(dialogClose())}>
                            close
                        </Button>
                    </DialogActions>
                )}
            </Dialog>
        </div>
    )
}