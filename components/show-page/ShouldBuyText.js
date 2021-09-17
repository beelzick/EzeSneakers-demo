import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function ShouldBuyText() {
    return <Box>
        <Typography variant='h5' component='h2' gutterBottom>
            Why should I buy this product?
        </Typography>
        <Typography variant='body1' gutterBottom>
            Our website is known for its fast and hassle-free delivery.
            By ordering a product <strong>by 4pm</strong> (including weekends), you can be sure it will arrive in your hands <strong>the next day</strong>.
        </Typography>
        <Typography variant='body1' gutterBottom>
            In addition, we offer product <strong>returns of up to 70 days</strong>, which is significantly more than our competitors.
            What&apos;s more, all products on offer come with a <strong>two-year guarantee</strong>.
        </Typography>
    </Box>
}