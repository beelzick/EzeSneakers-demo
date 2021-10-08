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
import { selectSeasonExpanded, setSeasonAccordionExpanded } from '../../../redux/slices/accordionSlice';
import { selectFilters, setSeasonFilter } from '../../../redux/slices/filtersSlice';

export default function SeasonFilters() {
    const filters = useSelector(selectFilters)
    const dispatch = useDispatch()
    const expanded = useSelector(selectSeasonExpanded)


    const handleAccordionClick = () => {
        if (expanded) {
            dispatch(setSeasonAccordionExpanded(false))
        } else {
            dispatch(setSeasonAccordionExpanded(true))
        }
    }

    const handleFiltersChange = (e) => {
        const { name, checked } = e.target
        dispatch(setSeasonFilter({ [name]: checked }))
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
            aria-controls='filters-season'
            id='filters-season'
        >
            <Typography>Season</Typography>
        </StyledAccordionSummary>
        <AccordionDetails onClick={stopPropagation}>
            <FormGroup onChange={handleFiltersChange}>
                <FormControlLabel control={<Checkbox checked={filters.season.spring} name='spring' />} label='Spring' />
                <FormControlLabel control={<Checkbox checked={filters.season.summer} name='summer' />} label='Summer' />
                <FormControlLabel control={<Checkbox checked={filters.season.autumn} name='autumn' />} label=' Autumn' />
                <FormControlLabel control={<Checkbox checked={filters.season.winter} name='winter' />} label=' Winter' />
            </FormGroup>
        </AccordionDetails>
    </StyledAccordion >
}