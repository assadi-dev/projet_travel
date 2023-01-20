document.addEventListener("DOMContentLoaded", () => {
  let fromSearchDateFlight = document.querySelector("#content-flight form");
  fromSearchDateFlight.addEventListener("submit", e => {
    e.preventDefault();
    let from = e.target.from.value;
    let to = e.target.to.value;
    if (isEmpty(from)) return Swal.fire({
      title: "Error!",
      text: "Le champs From n'est pas renseigné",
      icon: "error",
      confirmButtonText: "Fermer"
    });
    if (isEmpty(to)) return Swal.fire({
      title: "Error!",
      text: "Le champs to n'est pas renseigné",
      icon: "error",
      confirmButtonText: "Fermer"
    });
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your work has been saved",
      confirmButtonText: "OK"
    });
  });
});

/**
 * Vérifie si la valeur est vide
 * @returns {Boolean} true or false
 */
const isEmpty = value => {
  if (value.length === 0 || value === "" || value === null || value === undefined) {
    return true;
  }
  return false;
};