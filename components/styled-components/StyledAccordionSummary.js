import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    '&.MuiAccordionSummary-root.Mui-expanded': {
        minHeight: 'unset'
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: '12px 0'
    }
}));

export default StyledAccordionSummary