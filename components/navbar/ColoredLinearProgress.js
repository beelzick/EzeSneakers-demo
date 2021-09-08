import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
    colorPrimary: {
        backgroundColor: '#404040',
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
