import { useEffect, useState } from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import StyledAccordionSummary from '../../styled-components/StyledAccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StyledAccordion from '../../styled-components/StyledAccordion';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import { bothTrue, bothFalse } from '../../../redux/slices/genderFiltersSlice';
import { useSelector } from 'react-redux';
import { setGenderAccordionExpanded, selectGenderExpanded } from '../../../redux/slices/accordionSlice';
import CollectionFilters from './CollectionFilters';
import SeasonFilters from './SeasonFilters';
import BrandFilters from './BrandFilters';

export default function Filters({ genderFiltersInitialState }) {
    const [genderFilters, setGenderFilters] = useState(genderFiltersInitialState)
    const [displayWLove, setDisplayWLove] = useState(true)
    const dispatch = useDispatch()
    const expanded = useSelector(selectGenderExpanded)
    const router = useRouter()

    useEffect(() => {
        if (!router.pathname.includes('women')) {
            setDisplayWLove(false)
        }
    }, [])

    const handleGenderFiltersChange = (e) => {
        const { name, checked } = e.target
        setGenderFilters((prevValue) => {
            return {
                ...prevValue,
                [name]: checked
            }
        })
    }

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleAccordionClick = (e) => {
        if (expanded) {
            dispatch(setGenderAccordionExpanded(false))
        } else {
            dispatch(setGenderAccordionExpanded(true))
        }
    }

    return <>
        <StyledAccordion
            onClick={handleAccordionClick}
            expanded={expanded}
            sx={{ borderTop: '1px solid rgba(0,0,0,0.12)' }}
        >
            <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
                aria-controls='filters-gender'
                id='filters-gender'
            >
                <Typography>Gender</Typography>
            </StyledAccordionSummary>
            <AccordionDetails onClick={stopPropagation}>
                <FormGroup row onChange={handleGenderFiltersChange}>
                    <FormControlLabel control={<Checkbox name='men' checked={genderFilters.men} />} label='Men' />
                    <FormControlLabel control={<Checkbox name='women' checked={genderFilters.women} />} label='Women' />
                </FormGroup>
            </AccordionDetails>
        </StyledAccordion>
        <CollectionFilters displayWLove={displayWLove} />
        <SeasonFilters />
        <BrandFilters />
    </>
}