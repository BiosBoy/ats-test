import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Box } from '@mui/material';

import SearchBar from '../../components/SearchBar';
import Pagination from '../../components/Pagination';
import FilterDropdown from '../../components/FilterDropdown';
import NothingFound from '../../components/NothingFound';

import candidates from '../../data/candidates';
import companies from '../../data/companies';

import ROUTES from '../../constants/routes';
import useSearchPagination from '../../hooks/useSearchPagination';

const companyOptions = companies.map((company) => company.name).sort();

const CandidateList = () => {
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

  const filteredCandidates = useMemo(() => {
    return candidates.filter((candidate) => {
      const currentJob = candidate.jobs.find((job) => job.endDate === null);
      const company = companies.find((company) => company.id === currentJob?.companyId);

      if (!currentJob || !company) {
        return false;
      }
      if (selectedCompanies.length === 0) {
        return true;
      }

      return selectedCompanies.includes(company.name);
    });
  }, [selectedCompanies]);

  const {
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedData: paginatedCandidates,
  } = useSearchPagination({
    data: filteredCandidates,
    searchKey: 'name',
  });

  return (
    <div className="listWrap">
      <Typography variant="h4" gutterBottom>
        Added Candidates
      </Typography>

      <Box display="flex" gap={2} mb={3}>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <FilterDropdown
          label="Company"
          options={companyOptions}
          value={selectedCompanies}
          onChange={setSelectedCompanies}
          getCountForOption={(companyName) =>
            candidates.filter((candidate) => {
              const currentJob = candidate.jobs.find((job) => job.endDate === null);
              const company = companies.find((company) => company.id === currentJob?.companyId);

              return currentJob && company?.name === companyName;
            }).length
          }
        />
      </Box>

      {!paginatedCandidates?.length ? (
        <NothingFound />
      ) : (
        paginatedCandidates.map((candidate) => {
          const currentJob = candidate.jobs.find((item) => item.endDate === null);
          const company = companies.find((item) => item.id === currentJob?.companyId);

          return (
            <Card key={candidate.id} sx={{ my: 2 }}>
              <Link to={`${ROUTES.candidates.path}/${candidate.id}`}>
                <CardContent>
                  <Typography variant="h6">{candidate.name}</Typography>
                  <Typography variant="body2">
                    {currentJob
                      ? `${currentJob.title} at ${company ? company.name : ''}`
                      : 'Unemployed'}
                  </Typography>
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

export default CandidateList;
