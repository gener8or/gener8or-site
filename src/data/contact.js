import { faInstagram, faMedium, faPaypal, faYoutube } from '@fortawesome/free-brands-svg-icons';

// import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// import { faSquare } from '@fortawesome/free-regular-svg-icons';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'mailto:gener8ive@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://twitter.com/gener8ive',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://instagram.com/gener8ive',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://linktr.ee/gener8or',
    label: 'Linktree',
    icon: faPaypal,
  },
  {
    link: 'https://medium.com/gener8ive',
    label: 'Medium',
    icon: faMedium,
  },
  {
    link: 'https://www.youtube.com/channel/UCmxa6mDOmtdHOWzKCwcYtBQ',
    label: 'Youtube',
    icon: faYoutube,
  },
];

export default data;