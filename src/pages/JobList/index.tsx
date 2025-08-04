import { useEffect, useState } from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import FilterDropdown from '../../components/FilterDropdown';
import NothingFound from '../../components/NothingFound';

import jobs from '../../data/jobs';
import companies from '../../data/companies';

import ROUTES from '../../constants/routes';
import useSearchPagination from '../../hooks/useSearchPagination';

import styles from './index.module.scss';

const techOptions = Array.from(new Set(jobs.flatMap((job) => job.technologies))).sort();

const JobList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedTechs, setSelectedTechs] = useState<string[]>(
    searchParams.get('technology')?.split(',') || []
  );

  const filteredJobs = jobs.filter((job) => {
    if (selectedTechs.length === 0) {
      return true;
    }

    return selectedTechs.every((tech) => job.technologies.includes(tech));
  });

  const {
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedData: paginatedJobs,
  } = useSearchPagination({
    data: filteredJobs,
    searchKey: 'title',
  });

  useEffect(() => {
    const params: Record<string, string> = {};
    if (searchQuery) {
      params.search = searchQuery;
    }

    if (currentPage > 1) {
      params.page = currentPage.toString();
    }

    if (selectedTechs.length) {
      params.technology = selectedTechs.join(',');
    }

    setSearchParams(params);
  }, [searchQuery, currentPage, selectedTechs, setSearchParams]);

  return (
    <div className="listWrap">
      <Typography variant="h4" gutterBottom>
        Job Openings
      </Typography>

      <Box display="flex" gap={2} mb={3}>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <FilterDropdown
          label="Technology"
          options={techOptions}
          value={selectedTechs}
          onChange={setSelectedTechs}
          getCountForOption={(tech) => jobs.filter((job) => job.technologies.includes(tech)).length}
        />
      </Box>

      {!paginatedJobs.length ? (
        <NothingFound />
      ) : (
        paginatedJobs.map((job) => {
          const company = companies.find((item) => item.id === job.companyId);

          if (!company) {
            return null;
          }

          return (
            <Card key={job.id} sx={{ my: 2 }} className={styles.card}>
              <Link to={`${ROUTES.jobs.path}/${job.id}`}>
                <CardContent>
                  <Typography variant="h6">{job.title}</Typography>
                  <Link to={`${ROUTES.companies.path}/${company.id}`} className="underlineTextLink">
                    <Typography>{company.name}</Typography>
                  </Link>
                  <Typography variant="body2">
                    Technologies: {job.technologies.join(', ')}
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

export default JobList;
