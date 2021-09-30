import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import useOnScreen from '../useOnScreen'

export default function TypographyFade({ contentText, componentName, text, ...rest }) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    const [visible, setVisible] = useState(isVisible)

    useEffect(() => {
        if (isVisible) {
            setVisible(true)
        }
    }, [isVisible])

    return <Typography component={motion[componentName]}
        initial={{ opacity: 0 }}
        animate={visible && { opacity: 1 }}
        transition={{ duration: 0.6 }}
        ref={ref}
        {...rest}
    >
        {contentText}
    </Typography>
}


