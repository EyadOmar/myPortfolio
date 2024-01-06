import dashboard from '../assets/mockups/dashboard.jpg';
import elzero from '../assets/mockups/elzero.jpg';
import emovies from '../assets/mockups/emovies.jpg';
import html from '../assets/made-with-icons/html5.svg';
import css from '../assets/made-with-icons/css3.svg';
import js from '../assets/made-with-icons/js.svg';
import react from '../assets/made-with-icons/react.svg';

interface projectType {
  name: string;
  nameAr: string;
  img: string;
  madeWith: Array<skill>;
  link: string;
  id: number;
}

interface skill {
  name: string;
  image: string;
}

const projects: Array<projectType> = [
  {
    name: 'DashBoard',
    nameAr: 'لوحة تحكم',
    img: dashboard,
    madeWith: [
      { name: 'html', image: html },
      { name: 'css', image: css },
      { name: 'JavaScript', image: js },
    ],
    link: 'https://eyadomar.github.io/Dashboard-template/index.html',
    id: 1,
  },
  {
    name: 'Movies App',
    nameAr: 'برنامج تصفح افلام و مسلسلات',
    img: emovies,
    madeWith: [
      { name: 'react', image: react },
      { name: 'css', image: css },
      { name: 'JavaScript', image: js },
    ],
    link: 'https://emoviez.netlify.app/',
    id: 2,
  },
  {
    name: 'Landing Page',
    nameAr: 'صفحة هبوط',
    img: elzero,
    madeWith: [
      { name: 'html', image: html },
      { name: 'css', image: css },
      { name: 'JavaScript', image: js },
    ],
    link: '/',
    id: 3,
  },
];

export default projects;
