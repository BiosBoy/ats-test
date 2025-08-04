import { Link, useParams } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';

import companies from '../../data/companies';
import jobs from '../../data/jobs';

import ROUTES from '../../constants/routes';

const CompanyDetail = () => {
  const { id } = useParams();
  const company = companies.find((item) => item.id.toString() === id);

  if (!company) {
    return <Typography>Company not found.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {company.name}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Job Openings:
      </Typography>
      {company.jobs.map((jobId) => {
        const job = jobs.find((item) => item.id === jobId);

        return (
          job && (
            <Link key={job.id} to={`${ROUTES.jobs.path}/${job.id}`}>
              <Card sx={{ my: 2 }}>
                <CardContent>
                  <Typography variant="h6">{job.title}</Typography>
                  <Typography variant="body2">
                    Technologies: {job.technologies.join(', ')}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          )
        );
      })}
    </div>
  );
};

export default CompanyDetail;
