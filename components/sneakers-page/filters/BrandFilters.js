import AccordionDetails from '@mui/material/AccordionDetails';
import StyledAccordionSummary from '../../styled-components/StyledAccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StyledAccordion from '../../styled-components/StyledAccordion';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectBrandExpanded, setBrandAccordionExpanded } from '../../../redux/slices/accordionSlice';
import { selectFilters, setBrandFilter } from '../../../redux/slices/filtersSlice';


export default function BrandFilters() {
    const filters = useSelector(selectFilters)
    const dispatch = useDispatch()
    const expanded = useSelector(selectBrandExpanded)


    const handleAccordionClick = () => {
        if (expanded) {
            dispatch(setBrandAccordionExpanded(false))
        } else {
            dispatch(setBrandAccordionExpanded(true))
        }
    }

    const handleFiltersChange = (e) => {
        const { name, checked } = e.target
        dispatch(setBrandFilter({ [name]: checked }))
    }

    const stopPropagation = (e) => {
        e.stopPropagation()
    }
    return <StyledAccordion
        onClick={handleAccordionClick}
        expanded={expanded}
    >
        <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
            aria-controls='filters-brand'
            id='filters-brand'
        >
            <Typography>Brand</Typography>
        </StyledAccordionSummary>
        <AccordionDetails
            onClick={stopPropagation}
        >
            <FormGroup onChange={handleFiltersChange}>
                <FormControlLabel control={<Checkbox checked={filters.brand.nike} name='nike' />} label='Nike' />
                <FormControlLabel control={<Checkbox checked={filters.brand.adidas} name='adidas' />} label='Adidas' />
                <FormControlLabel control={<Checkbox checked={filters.brand.reebok} name='reebok' />} label='Reebok' />
            </FormGroup>
        </AccordionDetails>
    </StyledAccordion>
}