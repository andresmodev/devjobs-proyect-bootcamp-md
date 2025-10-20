const filterLocation = document.querySelector("#filter-location"); // select para ubicación
const mensaje = document.querySelector("#filter-selected-value");

const searchInput = document.querySelector("#empleos-search-input"); // input de busqueda

filterLocation.addEventListener("change", () => {
  const jobs = document.querySelectorAll(".job-listing-card");

  const selectedValue = filterLocation.value;

  if (selectedValue) {
    mensaje.textContent = `Has seleccionado: ${selectedValue}`;
  } else {
    mensaje.textContent = "";
  }

  jobs.forEach((job) => {
    // const modalidad = job.getAttribute("data-modalidad");
    const modalidad = job.dataset.modalidad;
    const isShown = selectedValue === "" || selectedValue === modalidad;
    job.classList.toggle("is-hidden", isShown === false);
    // forma larga de hacer lo de arriba
    // if (selectedValue === "" || selectedValue === modalidad) {
    //   job.classList.remove("is-hidden");
    // } else {
    //   job.classList.add("is-hidden");
    // }
  });
});

searchInput.addEventListener("input", () => {
  const inputFormat = searchInput.value.trim().toLowerCase();
  const jobs = document.querySelectorAll(".job-listing-card");

  jobs.forEach((job) => {
    const jobTitleElement = job.querySelector("h3");
    const jobFormat = jobTitleElement.textContent.trim().toLowerCase();

    const isMatch = jobFormat.includes(inputFormat);
    job.classList.toggle("is-hidden", !isMatch);
  });
});
