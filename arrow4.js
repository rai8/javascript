const jobs = [
  { id: 1, isActive: true },
  { id: 1, isActive: true },
  { id: 1, isActive: false }
];
const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);
