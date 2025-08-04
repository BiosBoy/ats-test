const candidates = [
  {
    id: 1,
    name: 'Alice Johnson',
    jobs: [
      {
        title: 'Frontend Developer',
        companyId: 1,
        technologies: ['React', 'CSS'],
        startDate: '2021-06-01',
        endDate: null,
      },
      {
        title: 'Junior Developer',
        companyId: 2,
        technologies: ['HTML', 'JavaScript'],
        startDate: '2019-01-01',
        endDate: '2021-05-31',
      },
    ],
  },
  {
    id: 2,
    name: 'Brian Smith',
    jobs: [
      {
        title: 'Backend Engineer',
        companyId: 3,
        technologies: ['Node.js', 'Express', 'MongoDB'],
        startDate: '2022-01-15',
        endDate: null,
      },
      {
        title: 'Software Intern',
        companyId: 2,
        technologies: ['Python', 'Flask'],
        startDate: '2021-05-01',
        endDate: '2021-12-31',
      },
    ],
  },
  {
    id: 3,
    name: 'Cynthia Lee',
    jobs: [
      {
        title: 'Full Stack Developer',
        companyId: 4,
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        startDate: '2023-03-10',
        endDate: null,
      },
      {
        title: 'UI/UX Designer',
        companyId: 1,
        technologies: ['Figma', 'CSS', 'HTML'],
        startDate: '2020-07-01',
        endDate: '2023-02-28',
      },
    ],
  },
  {
    id: 4,
    name: 'David Okoro',
    jobs: [
      {
        title: 'DevOps Engineer',
        companyId: 5,
        technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
        startDate: '2022-11-01',
        endDate: null,
      },
      {
        title: 'Systems Administrator',
        companyId: 3,
        technologies: ['Linux', 'Bash', 'Ansible'],
        startDate: '2020-01-01',
        endDate: '2022-10-31',
      },
    ],
  },
  {
    id: 5,
    name: 'Emily Zhang',
    jobs: [
      {
        title: 'Mobile Developer',
        companyId: 6,
        technologies: ['React Native', 'TypeScript'],
        startDate: '2021-09-01',
        endDate: null,
      },
      {
        title: 'iOS Developer',
        companyId: 4,
        technologies: ['Swift', 'Xcode'],
        startDate: '2019-04-01',
        endDate: '2021-08-31',
      },
    ],
  },
];

export default candidates;
