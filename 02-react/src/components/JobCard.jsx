const JobCard = ({ datos }) => {
  return (
    <article className="job-listing-card">
      {datos.map((dato) => (
        <div key={dato.id}>
          <h2>{dato.titulo}</h2>
          <small>
            {dato.empresa} | {dato.ubicacion}
          </small>
          <p>{dato.descripcion}</p>

          <button className="button-apply-job">Aplicar</button>
        </div>
      ))}
    </article>
  );
};

export default JobCard;
