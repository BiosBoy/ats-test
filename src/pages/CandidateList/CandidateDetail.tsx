import { Link, useParams } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';

import candidates from '../../data/candidates';
import companies from '../../data/companies';

import ROUTES from '../../constants/routes';

const CandidateDetail = () => {
  const { id } = useParams();

  const candidate = candidates.find((item) => item.id.toString() === id);

  if (!candidate) {
    return <Typography>Candidate not found</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {candidate.name}'s Resume
      </Typography>
      {candidate.jobs.map((job, idx) => {
        const company = companies.find((item) => item.id === job.companyId);

        return (
          <Card key={idx} sx={{ my: 2 }}>
            <CardContent>
              <Typography variant="h6">{job.title}</Typography>
              <Link to={`${ROUTES.companies.path}/${company?.id}`} className="underlineTextLink">
                <Typography>{company?.name}</Typography>
              </Link>
              <Typography variant="body2">
                {job.startDate} - {job.endDate || 'Present'}
              </Typography>
              <Typography variant="body2">Technologies: {job.technologies.join(', ')}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default CandidateDetail;
