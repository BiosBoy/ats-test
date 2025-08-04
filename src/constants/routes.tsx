import PeopleIcon from '@mui/icons-material/People';
import JobsIcon from '@mui/icons-material/Work';
import CompaniesIcon from '@mui/icons-material/CorporateFare';
import HomeIcon from '@mui/icons-material/Home';

const ROUTES = {
  default: {
    path: '/',
    icon: <HomeIcon />,
    label: 'Home',
  },
  companies: {
    path: '/companies',
    icon: <CompaniesIcon />,
    label: 'Companies',
  },
  candidates: {
    path: '/candidates',
    icon: <PeopleIcon />,
    label: 'Candidates',
  },
  jobs: {
    path: '/jobs',
    icon: <JobsIcon />,
    label: 'Jobs',
  },
};

export default ROUTES;
