import { Link, useParams } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';

import jobs from '../../data/jobs';
import companies from '../../data/companies';

import ROUTES from '../../constants/routes';

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find((item) => item.id.toString() === id);
  const company = companies.find((item) => item.id === job?.companyId);

  if (!job || !company) {
    return <Typography>Job not found.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">{job.title}</Typography>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Link to={`${ROUTES.companies.path}/${company?.id}`}>
            <Typography variant="h6" color="text.secondary">
              {company?.name}
            </Typography>
          </Link>
          <Typography variant="body1" mt={2}>
            Required Technologies: {job.technologies.join(', ')}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetail;
