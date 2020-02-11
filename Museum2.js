var submitButton = document.getElementById('buttonSubmit');
submitButton.addEventListener('click', regne);

function regne() {
  var antallVoksne = Number(document.getElementById('inputVoksen').value);
  var antallBarn = Number(document.getElementById('inputBarn').value);
  var utskrift = document.getElementById('utskriftP');
  var totalPris = antallVoksne*100 + antallBarn*50;
  var rabatt = [
    "inklusiv rabatt på 20 prosent.",
    "ikke inklusiv rabatt på 20 prosent."
  ]
  var rabattAktiv;
  console.log(totalPris)

  if ((antallVoksne+antallBarn) > 4) {
    totalPris = totalPris*1.2;
    rabattAktiv = rabatt[0];
  }
  else {
    rabattAktiv = rabatt[1];
  }
  console.log(totalPris)
  if (antallVoksne == 0 && antallBarn == 0) {
    utskrift.innerHTML = "Hei, bestill billetter takk?";
  }
  else if (antallVoksne > 0 && antallBarn == 0) {
    utskrift.innerHTML = "Hei du har bestilt " +antallVoksne+ " voksenbilletter, "+rabattAktiv;
  }
  else if (antallBarn > 0 && antallVoksne == 0) {
    utskrift.innerHTML = "Hei du har bestilt " +antallBarn+ " barnebilletter, "+rabattAktiv;
  }
  else {
    utskrift.innerHTML = "Hei du har bestilt " +(antallBarn+antallVoksne)+" billetter, " +antallBarn+" barnebilletter, "
    +antallVoksne+" voksenbilletter, "+rabattAktiv;
  }
}
