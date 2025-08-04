import { Typography, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import NothingFound from '../../components/NothingFound';

import companies from '../../data/companies';
import jobs from '../../data/jobs';

import ROUTES from '../../constants/routes';
import useSearchPagination from '../../hooks/useSearchPagination';

const CompanyList = () => {
  const {
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedData: paginatedCompanies,
  } = useSearchPagination({
    data: companies,
    searchKey: 'name',
  });

  return (
    <div className="listWrap">
      <Typography variant="h4" gutterBottom>
        Companies List
      </Typography>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {!paginatedCompanies?.length ? (
        <NothingFound />
      ) : (
        paginatedCompanies.map((company) => {
          const companyJobs = company.jobs
            .map((jobId) => jobs.find((job) => job.id === jobId))
            .filter(Boolean);

          return (
            <Card key={company.id} sx={{ my: 2 }}>
              <Link to={`${ROUTES.companies.path}/${company.id}`}>
                <CardContent>
                  <Typography variant="h6">{company.name}</Typography>
                  <Typography variant="body2">Current open jobs: {companyJobs.length}</Typography>
                </CardContent>
              </Link>
            </Card>
          );
        })
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onChange={(_, page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default CompanyList;
