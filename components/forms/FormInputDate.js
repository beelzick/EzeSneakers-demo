import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Controller } from 'react-hook-form'
import Register from './RegisterForm';

export default function FormInputDate({ name, control, label, register }) {
    return <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
                <KeyboardDatePicker
                    autoOk
                    value={value}
                    onChange={onChange}
                    fullWidth
                    disableFuture
                    variant="outlined"
                    inputVariant='outlined'
                    format="MM/dd/yyyy"
                    margin="normal"
                    label={label}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            )}
        />
    </MuiPickersUtilsProvider>
}