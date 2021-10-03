import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    customBadge: {
        backgroundColor: 'rgb(239, 71, 111)',
        color: 'white'
    },
    list: {
        width: 250,
    },
}));
export default useStyles