import django from './public/images/django.svg';
import next from './public/images/next.svg';
import nginx from './public/images/nginx.svg';
import postgresql from './public/images/postgresql.svg';
import sass from './public/images/sass.svg';
import tailwind from './public/images/tailwind.svg';
import redux from './public/images/redux.svg';
import techletics from './public/images/projects/techletics.png';
import telegram from './public/images/projects/telegram.png';
import hacknite from './public/images/projects/hacknight.png';

const tech = [
  { img: django, text: 'django' },
  { img: next, text: 'next.js' },
  { img: nginx, text: 'nginx' },
  { img: postgresql, text: 'postgresql' },
  { img: sass, text: 'sass' },
  { img: tailwind, text: 'tailwind' },
  { img: redux, text: 'redux' },
];

const work = [
  {
    title: 'Hacknite',
    img: hacknite,
    description:
      'Hacknite is a 24-hour hackathon organized by the CS Department of Christ College of Engineering, Irinjalakuda. This event brings together students, professionals, and enthusiasts from various technology fields.',
    tech_stack: ['React', 'Tailwind CSS', 'Daisy UI'],
    year: '2024',
    github: 'https://github.com/sai-prasad-1/hacknite.cce.edu.in',
    demo: 'https://hacknite.cce.edu.in/',
  },
  {
    title: "Techletics '24",
    img: techletics,
    description:
      "Techletics '24 is a tech fest organized by Christ College of Engineering, Irinjalakuda. This event unites students, professionals, and technology enthusiasts from diverse fields.",
    tech_stack: ['Next.js', 'Tailwind CSS', 'Daisy UI'],
    year: '2023',
    github: 'https://github.com/sai-prasad-1/techletics24',
    demo: 'https://techletics.cce.edu.in/',
  },
  {
    title: 'Telegram Clone',
    img: telegram,
    description:
      'Telegram Clone is a project aimed at replicating the features and functionality of the popular messaging application, Telegram.',
    tech_stack: ['React', 'Tailwind CSS'],
    year: '2023',
    github: 'https://github.com/AlfrinP/discord_ui',
    demo: 'https://unique-clafoutis-55acea.netlify.app',
  },
];

const experience = [
  {
    position: 'Frontend Developer Intern',
    company: 'Levantate Labs',
    date: '2024 - Present',
    description:
      'As a Frontend Developer Intern at Levantate Labs, I spearheaded the redesign of the company website, introducing a modern UI to elevate user engagement and satisfaction. Leveraged a tech stack comprising Next.js, Tailwind CSS, Mantine UI, and various React libraries to implement intricate website functionalities and seamless user experiences. Played a key role in enhancing SEO strategies, resulting in notable improvements in website visibility and search engine rankings.',
  },
  {
    position: 'Academic Intern',
    company: 'Kerala Startup Mission',
    date: 'April - May 2024',
    description:
      'As an Academic Intern at Kerala Startup Mission, I designed and developed website UI including a dashboard using Next.js and Tailwind CSS, integrating Daisy UI for streamlined user interface components. Collaborated with stakeholders to understand requirements and deliver a user-centric design solution meeting project objectives. Gained practical experience in frontend development methodologies and project management within a startup environment.',
  },
  {
    position: 'Frontend Developer, Freelance',
    company: 'Privacy Tech',
    date: 'Oct 2023 - Dec 2023',
    description:
      'As a Frontend Developer for Privacy Tech, I created a landing page for a Chrome blockchain extension. Utilized React.js and Tailwind CSS for website development.',
  },
  {
    position: 'Frontend Developer',
    company: "Techletics '24 Website Team",
    date: 'Feb 2024 - Mar 2024',
    description:
      "As a Frontend Developer in the Techletics '24 Website Team, I led the website redesign to enhance user interaction and experience, utilizing Next.js, React.js, and Tailwind CSS for website development.",
  },
  {
    position: 'Frontend Developer',
    company: 'Hacknite Website Team',
    date: 'Feb 2024 - Mar 2024',
    description:
      'As a Frontend Developer in the Hacknite Website Team, I played a key role in developing the website. My responsibilities included implementing design concepts, optimizing performance, and ensuring a seamless user experience.',
  },
];

const links = {
  resume: 'https://drive.google.com/file/d/1AEz0DDbYDZNH4sr37gOw6oJ9wLroTdyY/view?usp=drivesdk',
  github: 'https://github.com/AlfrinP',
  hackerrank: 'https://www.hackerrank.com/profile/alfrinpoulose',
  linkedin: 'https://www.linkedin.com/in/alfrinpoulose/',
  freelance: 'https://www.upwork.com/freelancers/~019e2fdde3abc19c30?mp_source=share',
};

export { tech, work, experience, links };
