import JobCard from "./JobCard.jsx";

const JobListings = ({ jobs }) => {
  return (
    <>
      <h2>Resultados de búsquedas</h2>
      <div className="jobs-listings">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default JobListings;
