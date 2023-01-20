document.addEventListener("DOMContentLoaded", () => {
  let fromSearchDateFlight = document.querySelector("#content-flight form");
  fromSearchDateFlight.addEventListener("submit", (e) => {
    e.preventDefault();
    let from = e.target.from.value;
    let to = e.target.to.value;
    if (isEmpty(from)) return alert("Le champs From n'est pas renseigné");
    if (isEmpty(to)) return "Le champs From n'est pas renseigné";
    console.log(`From: ${from} to: ${to}`);
  });
});

/**
 * Vérifie si la valeur est vide
 * @param {String} value
 * @returns
 */
const isEmpty = (value) => {
  if (value === "" || value === null || value === undefined) {
    return true;
  }
  return false;
};
