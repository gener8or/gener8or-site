import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.
const data = [
  {
    link: 'https://github.com/overviewanalytics',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'mailto:info@overviewanalytics.ca',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://twitter.com/mgd_1984',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://overviewanalytics.square.site',
    label: 'Square Appointments',
    icon: faSquare,
  },
  {
    link: 'https://instagram.com/overviewanalytics',
    label: 'Instagram',
    icon: faInstagram,
  },

];

export default data;
