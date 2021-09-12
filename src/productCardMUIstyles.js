import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: 450,
        position: 'relative'
    },
    cardImg: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cardActions: {
        justifyContent: 'flex-end'
    },
    grow: {
        flexGrow: 1
    },
    imgContainer: {
        height: 450,
        width: 450,
    },
    imgIconContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
});

export default useStyles