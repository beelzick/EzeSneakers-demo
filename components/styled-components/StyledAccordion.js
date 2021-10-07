import Accordion from '@mui/material/Accordion';
import { alpha, styled } from '@mui/material/styles';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    '&.MuiAccordion-root': {
        boxShadow: 'unset',
        margin: 'unset',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
        borderRadius: 'unset'
    },
    '&.MuiAccordion-root: before': {
        backgroundColor: 'unset'
    },
    '&.MuiSvgIcon-root': {
        color: 'black'
    }
}));

export default StyledAccordion