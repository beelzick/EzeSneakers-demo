import TextField from '@mui/material/TextField'
import React from 'react'
import Box from '@mui/material/Box'

export default function FormInputText({ name, label, errors, register, type }) {
    return <Box pb={3}>
        <TextField
            name={name}
            error={errors[name] && true}
            helperText={errors[name]?.message}
            {...register(`${name}`)}
            label={label}
            type={type ? type : 'text'}
            fullWidth
        />
    </Box>

}