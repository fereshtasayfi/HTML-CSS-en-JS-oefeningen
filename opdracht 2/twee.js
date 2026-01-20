document.getElementById("zoekButton").addEventListener("click", zoekKaart);
document.getElementById("pokemonName").addEventListener("keydown", (e) => {
    if (e.key === "Enter")  zoekKaart()
});
      
function zoekKaart() {
  const kaartNaam = document.getElementById("pokemonName").value.trim();
  const details = document.getElementById("kaartDetails");

  

  details.innerHTML = "<p>zoeken...</P>";

const url = `https://api.pokemontcg.io/v2/cards?q=name:*${encodeURIComponent(kaartNaam)}*&pageSize=1`;


  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.data.length > 0) {
        const kaart = data.data[0];
        const img= 
        kaart.images && (kaart.images.large || kaart.images.small)
          ? (kaart.images.large || kaart.images.small)
          : "Geen afbeelding beschikbaar";
      
        const setNaam = kaart.set ? kaart.set.name : "Onbekend";

        details.innerHTML = `
            <h3>${kaart.name}</h3>
            ${img? `<img src="${img}" alt="${kaart.name}">`: ""}
            <p><strong>Set:</strong> ${setNaam}</p>
          `;
        
      } else {
        details.innerHTML = "<p>Geen kaart gevonden met die naam.</p>";
    }
  })
  .catch(() => {
    details.innerHTML = "<p>Fout bij het zoeken van de kaart.</p>";
  });
}