import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { Controller } from 'react-hook-form'

export default function FormInputDate({ name, control, label, errors }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <DatePicker
                        openTo='year'
                        disableFuture
                        views={['year', 'month', 'day']}
                        minDate={new Date('1900-01-01')}
                        value={value}
                        onChange={onChange}
                        label={label}
                        renderInput={(params) => <TextField fullWidth error={errors[name] && true} {...params} />}
                    />
                )}
            />
        </LocalizationProvider>
    )
}