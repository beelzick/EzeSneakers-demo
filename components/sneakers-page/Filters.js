import { useEffect, useState } from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import StyledAccordionSummary from '../styled-components/StyledAccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StyledAccordion from '../styled-components/StyledAccordion';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { accordionExpandedInitialState, filtersInitialState } from '../../src/sneakerPageHelpers';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import { bothTrue, bothFalse } from '../../redux/slices/genderFiltersSlice';

export default function Filters({ genderFiltersInitialState }) {
    const [filters, setFilters] = useState(filtersInitialState)
    const [genderFilters, setGenderFilters] = useState(genderFiltersInitialState)
    const dispatch = useDispatch()
    const [accordionExpanded, setAccordionExpanded] = useState(accordionExpandedInitialState)
    const router = useRouter()

    useEffect(() => {
        const { pathname } = router
        const { men, women } = genderFilters
        if (!women && !men && pathname !== '/sneakers') {
            dispatch(bothFalse())
            return router.push('/sneakers')
        } else if (women && men && pathname !== '/sneakers') {
            dispatch(bothTrue())
            return router.push('/sneakers')
        } else if (women && !men && pathname !== '/sneakers/women') {
            return router.push('/sneakers/women')
        } else if (!women && men && pathname !== '/sneakers/men') {
            return router.push('/sneakers/men')
        }

    }, [genderFilters])



    const handleGenderFiltersChange = (e) => {
        const { name, checked } = e.target
        setGenderFilters((prevValue) => {
            return {
                ...prevValue,
                [name]: checked
            }
        })
    }

    const handleFiltersChange = (filterGroup) => (e) => {
        const { name, checked } = e.target
        setFilters((prevValue) => {
            return {
                ...prevValue,
                [filterGroup]: {
                    ...prevValue[filterGroup],
                    [name]: checked
                }
            }
        })
    }

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleAccordionClick = name => () => {
        setAccordionExpanded(prevValue => {
            return {
                ...prevValue,
                [name]: !prevValue[name]
            }
        })
    }

    return <>
        <StyledAccordion
            onClick={handleAccordionClick('gender')}
            expanded={accordionExpanded.gender}
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
        <StyledAccordion
            onClick={handleAccordionClick('collection')}
            expanded={accordionExpanded.collection}
        >
            <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
                aria-controls='filters-collection'
                id='filters-collection'
            >
                <Typography>Collection</Typography>
            </StyledAccordionSummary>
            <AccordionDetails onClick={stopPropagation}>
                <FormGroup onChange={handleFiltersChange('collection')}>
                    <FormControlLabel control={<Checkbox checked={filters.collection.featured} name='featured' />} label='Featured' />
                    <FormControlLabel control={<Checkbox checked={filters.collection.new} />} name='new' label='New' />
                    <FormControlLabel control={<Checkbox checked={filters.collection.mostRated} />} name='mostRated' label='Most Rated' />
                    <FormControlLabel control={<Checkbox checked={filters.collection.womenLove} />} name='womenLove' label='Women Love' />
                </FormGroup>
            </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion
            onClick={handleAccordionClick('season')}
            expanded={accordionExpanded.season}
        >
            <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'black' }} />}
                aria-controls='filters-season'
                id='filters-season'
            >
                <Typography>Season</Typography>
            </StyledAccordionSummary>
            <AccordionDetails onClick={stopPropagation}>
                <FormGroup onChange={handleFiltersChange('season')}>
                    <FormControlLabel control={<Checkbox checked={filters.season.spring} name='spring' />} label='Spring' />
                    <FormControlLabel control={<Checkbox checked={filters.season.summer} name='summer' />} label='Summer' />
                    <FormControlLabel control={<Checkbox checked={filters.season.autumn} name='autumn' />} label=' Autumn' />
                    <FormControlLabel control={<Checkbox checked={filters.season.winter} name='winter' />} label=' Winter' />
                </FormGroup>
            </AccordionDetails>
        </StyledAccordion>
        <StyledAccordion
            onClick={handleAccordionClick('brand')}
            expanded={accordionExpanded.brand}
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
                <FormGroup onChange={handleFiltersChange('brand')}>
                    <FormControlLabel control={<Checkbox checked={filters.brand.nike} name='nike' />} label='Nike' />
                    <FormControlLabel control={<Checkbox checked={filters.brand.adidas} name='adidas' />} label='Adidas' />
                    <FormControlLabel control={<Checkbox checked={filters.brand.reebok} name='reebok' />} label='Reebok' />
                </FormGroup>
            </AccordionDetails>
        </StyledAccordion>

    </>
}



 // (genderFilter.women && genderFilter.men && router.pathname !== '/sneakers') || (!genderFilter.women && !genderFilter.men && router.pathname !== '/sneakers')