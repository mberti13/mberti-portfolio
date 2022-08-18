import { v4 as uuidv4 } from 'uuid';
import CrescendoImg from '../images/Crescendo.jpg';
import SuperHeroImg from '../images/Screenshot 2022-03-27 224334.jpg'
import DonateImg from '../images/donate homepage.png';
import PasswordImg from '../images/password-generator-photo.jpg';

const projects = [
    {
        id: uuidv4(),
        name: 'Crescendo',
        desc: "Crescendo is an online Full-Stack application that allows users to create an account and comment on Spotify's top playlists and songs through use of RESTful techniques and Spotify's API.",
        tools: "TailwindCSS, Handlebars.js, Spotify API, bcrypt, MySQL2, Express.js, Sequelize and Node.js",
        img: CrescendoImg,
    },
    {
        id: uuidv4(),
        name: 'Give Back',
        desc: "Give Back is a MERN Stack application in which user's can post info about their favorite charitable organizations. They can also donate $5 to the website which can then be funneled to the charities chosen/listed.",
        tools: "React, Stripe API, Material UI, GraphQL, MongoDB, Mongoose and JSON Web Tokens",
        img: DonateImg,
    },
    {
        id: uuidv4(),
        name: 'Super Hero Wiki',
        desc: "Search Engine that utilizes the Marvel API to provide results of different superheroes based on the user's input.",
        tools: "JavaScript, Tailwind, HTML and RESTful APIs",
        img: SuperHeroImg,
    },
    {
        id: uuidv4(),
        name: 'Password Generator',
        desc: "Password generator that provides the user with a password that fits the criteria the user gives the app.",
        tools: "JavaScript, CSS, HTML and DOM API",
        img: PasswordImg,
    },
];

export default projects;