import Button from '@mui/material/Button'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import useOnScreen from '../useOnScreen'

export default function ButtonFade({ buttonText, ...rest }) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    const [visible, setVisible] = useState(isVisible)

    useEffect(() => {
        if (isVisible) {
            setVisible(true)
        }
    }, [isVisible])


    return (
        <Button component={motion.button} {...rest} ref={ref}
            initial={{ opacity: 0 }}
            animate={visible && { opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            {buttonText}
        </Button>
    )
}