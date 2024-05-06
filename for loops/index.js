export function totalBirdCount(birdsPerDay) {
  let total = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    total = total + birdsPerDay[i];
  }
  return total;
}

export function birdsInWeek(birdsPerDay, week) {
  let startIndex = (week - 1) * 7; // calcul de l'indice de départ
  let endIndex = startIndex + 6; // calcul de l'indice de fin
  let total = 0; // variable pour stocker le total des oiseaux

  // boucle pour sommer les éléments du tableau
  for (let i = startIndex; i <= endIndex; i++) {
    total += birdsPerDay[i];
  }

  return total; // retourner le total des oiseaux
}
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    birdsPerDay[i] += 1;
    i++;
  }
  return birdsPerDay;
}
