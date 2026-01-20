
function veranderKleur() {
  var kleuren = ['red', 'blue', 'green', 'yellow', 'purple'];
  var randomKleur = kleuren[Math.floor(Math.random() * kleuren.length)];
  document.body.style.backgroundColor = randomKleur;
}