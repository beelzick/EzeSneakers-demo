import makeStyles from '@mui/styles/makeStyles';
import LinearProgress from '@mui/material/LinearProgress';

const useStyles = makeStyles({
    colorPrimary: {
        backgroundColor: 'black',
    },
    barColorPrimary: {
        backgroundColor: '#404040',
    }
})

export default function ColoredLinearProgress() {
    const classes = useStyles();
    return <LinearProgress
        classes={{ barColorPrimary: classes.barColorPrimary }}
    />
}
