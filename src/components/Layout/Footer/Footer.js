import Grid from '@mui/material/Grid'
import { v4 as uuidv4 } from 'uuid';
import FooterContainer from './FooterContainer'
import FooterBottom from './FooterBottom'
import IconsSection from './IconsSection'
import CategorySection from './CategorySection'
import { sectionsData } from '../../../helpers/footerHelpers';

export default function Footer() {
    return (
        <FooterContainer>
            <Grid
                container
                direction='row'
                sx={{ justifyContent: { md: 'space-evenly' } }}
            >
                {sectionsData.map(({ title, links, linkStarter }) => (
                    <CategorySection
                        title={title}
                        links={links}
                        linkStarter={linkStarter}
                        key={uuidv4()}
                    />
                ))}
                <IconsSection />
            </Grid>
            <FooterBottom />
        </FooterContainer>
    )
}