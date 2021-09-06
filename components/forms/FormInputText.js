import TextField from '@material-ui/core/TextField'
import { Controller } from 'react-hook-form'
import React from 'react'
import Box from '@material-ui/core/Box'

export default function FormInputText({ name, label, control, type, errors }) {
    return <Controller
        name={name}
        control={control}
        render={
            ({ field: { onChange, value } }) => <Box pb={3}>
                <TextField
                    error={errors[name] && true}
                    helperText={errors[name]?.message}
                    onChange={onChange}
                    value={value}
                    label={label}
                    variant="outlined"
                    type={type ? type : 'text'}
                    fullWidth
                />
            </Box>
        }
    />
}