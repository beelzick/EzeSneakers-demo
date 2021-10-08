import { useEffect, useState } from 'react';
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
import { selectCollectionExpanded, setCollectionAccordionExpanded } from '../../../redux/slices/accordionSlice';
import { selectFilters, setCollectionFilter } from '../../../redux/slices/filtersSlice';

export default function CollectionFilters({ displayWLove }) {
    const filters = useSelector(selectFilters)
    const dispatch = useDispatch()
    const expanded = useSelector(selectCollectionExpanded)


    const handleAccordionClick = () => {
        if (expanded) {
            dispatch(setCollectionAccordionExpanded(false))
        } else {
            dispatch(setCollectionAccordionExpanded(true))
        }
    }

    const handleFiltersChange = (e) => {
        const { name, checked } = e.target
        dispatch(setCollectionFilter({ [name]: checked }))
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
            aria-controls='filters-collection'
            id='filters-collection'
        >
            <Typography>Collection</Typography>
        </StyledAccordionSummary>
        <AccordionDetails onClick={stopPropagation}>
            <FormGroup onChange={handleFiltersChange}>
                <FormControlLabel control={<Checkbox checked={filters.collection.featured} name='featured' />} label='Featured' />
                <FormControlLabel control={<Checkbox checked={filters.collection.new} />} name='new' label='New' />
                <FormControlLabel control={<Checkbox checked={filters.collection.mostRated} />} name='mostRated' label='Most Rated' />
                {displayWLove && <FormControlLabel control={<Checkbox checked={filters.collection.womenLove} />} name='womenLove' label='Women Love' />}
            </FormGroup>
        </AccordionDetails>
    </StyledAccordion>
}