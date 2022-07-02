function getResult() {
  // Je créer une variable tva qui a pour valeur 0.2
  // Pour rappel : calculer un pourcentage
  //80% = x * 0.8
  //50% = x * 0.5
  let tva = 0.2;

  // On va chercher la valeur de l'input qui a pour ID "income"
  let income = document.getElementById("income").value;

  // On calcule combien la taxe va prendre
  let addTaxe = income * tva;

  // On retire le total de la taxe à notre revenue (income)
  result = income - addTaxe;

  // On créer une alerte qui nous donne le résultat
  alert(result);
}
