import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, Container, Toolbar } from '@mui/material';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import CompanyDetail from '../pages/CompanyList/CompanyDetail';
import JobDetail from '../pages/JobList/JobDetail';
import CandidateList from '../pages/CandidateList';
import CandidateDetail from '../pages/CandidateList/CandidateDetail';
import CompanyList from '../pages/CompanyList';
import JobList from '../pages/JobList';
import NotFound from '../pages/404';

import ROUTES from '../constants/routes';

import styles from './index.module.scss';

const App = () => (
  <Router>
    <Box className={styles.layout}>
      <Header />
      <Sidebar />
      <Box component="main" className={styles.mainContent}>
        <Toolbar />
        <Container>
          <Routes>
            <Route
              path={ROUTES.default.path}
              element={<Navigate to={ROUTES.candidates.path} replace />}
            />
            <Route path={ROUTES.candidates.path} element={<CandidateList />} />
            <Route path={`${ROUTES.candidates.path}/:id`} element={<CandidateDetail />} />
            <Route path={ROUTES.companies.path} element={<CompanyList />} />
            <Route path={`${ROUTES.companies.path}/:id`} element={<CompanyDetail />} />
            <Route path={ROUTES.jobs.path} element={<JobList />} />
            <Route path={`${ROUTES.jobs.path}/:id`} element={<JobDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </Box>
  </Router>
);

export default App;
