import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
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
        href: 'https://www.facebook.com/kacper.zabielski'
    },
    {
        component: TwitterIcon,
        text: 'Twitter',
        href: '#'
    },
    {
        component: GitHubIcon,
        text: 'Git Hub',
        href: 'https://github.com/beelzick/eze-sneakers'
    },
    {
        component: InstagramIcon,
        text: 'Instagram',
        href: '#'
    },
    {
        component: LinkedInIcon,
        text: 'Linkedin',
        href: 'https://www.linkedin.com/in/kacper-zabielski-329911217/'
    },
    {
        component: EmailIcon,
        text: 'Email',
        href: '#'
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