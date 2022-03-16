import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

export const footerLinksFilter = (link) => {
    if (link === 'season') {
        return 'autumn'
    } else if (link === '') {
        return 'home'
    }
    else {
        return link.replace(/-/g, ' ')
    }
}

export const iconsData = [
    {
        component: FacebookIcon,
        text: 'Facebook',
        href: '#facebook'
    },
    {
        component: TwitterIcon,
        text: 'Twitter',
        href: '#twitter'
    },
    {
        component: InstagramIcon,
        text: 'Instagram',
        href: '#instagram'
    },
    {
        component: EmailIcon,
        text: 'Email',
        href: '#email'
    },
]

export const sectionsData = [
    {
        title: 'check out',
        links: ['men', 'women', 'new', 'season'],
        linkStarter: '/sneakers/'
    },
    {
        title: 'main pages',
        links: ['', 'about', 'cart', 'register'],
        linkStarter: '/'
    },
    {
        title: 'new',
        links: ['adidas', 'nike', 'puma'],
        linkStarter: '/sneakers/new/'
    },
    {
        title: 'women',
        links: ['featued', 'new', 'most-rated', 'women-love'],
        linkStarter: '/sneakers/women/'
    },
    {
        title: 'men',
        links: ['featued', 'new', 'most-rated'],
        linkStarter: '/sneakers/men/'
    }
]