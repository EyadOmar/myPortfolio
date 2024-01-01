import dashboard from '../assets/mockups/dashboard.jpg';
import elzero from '../assets/mockups/elzero.jpg';
import emovies from '../assets/mockups/emovies.jpg';
import html from '../assets/made-with-icons/html5.svg';
import css from '../assets/made-with-icons/css3.svg';
import js from '../assets/made-with-icons/js.svg';
import react from '../assets/made-with-icons/react.svg';

interface projectType {
  name: string;
  img: string;
  madeWith: Array<string>;
}

const projects: Array<projectType> = [
  {
    name: 'DashBoard',
    img: dashboard,
    madeWith: [html, css, js],
  },
  {
    name: 'Landing Page',
    img: elzero,
    madeWith: [html, css, js],
  },
  {
    name: 'Movies App',
    img: emovies,
    madeWith: [react, css, js],
  },
];

export default projects;
