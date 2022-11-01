import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.
const data = [
  {
    link: 'https://www.youtube.com/@gener8orstudio',
    label: 'Youtube',
    icon: faYoutube,
  },
  {
    link: 'https://twitter.com/gener8ive',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://discord.gg/4uuKWHKC8U',
    label: 'Discord',
    icon: faDiscord,
  },
  {
    link: 'https://instagram.com/gener8ive',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://linktr.ee/gener8or',
    label: 'Linktree',
    icon: faClipboard,
  },
  {
    link: 'https://medium.com/gener8ive',
    label: 'Medium',
    icon: faMedium,
  },
  {
    link: 'mailto:gener8ive@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
