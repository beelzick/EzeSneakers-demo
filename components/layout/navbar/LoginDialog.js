import styles from './navbar.module.css'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import LogInForm from '../../forms/LogInForm'
import { useDispatch, useSelector } from 'react-redux'
import { selectOpen, dialogClose } from '../../../redux/slices/loginDialogSlice'

export default function LoginDialog() {
    const dispatch = useDispatch()
    const open = useSelector(selectOpen)

    return <div className={styles.dialog}>
        <Dialog
            open={open}
            onClose={() => dispatch(dialogClose())}
            aria-labelledby="form-dialog-title"
            maxWidth='sm'
            fullWidth={true}
        >
            <DialogContent >
                <LogInForm />
            </DialogContent>
        </Dialog>
    </div>
}