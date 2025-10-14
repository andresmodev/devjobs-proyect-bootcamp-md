const jobsListingSection = document.querySelector(".jobs-listings");

jobsListingSection?.addEventListener("click", (e) => {
  const element = e.target;

  if (element.classList.contains("button-apply-job")) {
    element.classList.add("is-applied");
    element.textContent = "¡Aplicado!";
    element.disabled = true;
  }
});
