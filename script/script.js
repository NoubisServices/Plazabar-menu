let kategorije = [
  "Kafe",
  "PrirodniSokovi",
  "BezalkoholnaPica",
  "Vode",
  "GaziraniSokovi",
  "EnergetskiNapici",
  "Piva",
  "Tocenopivo",
  "Vodke",
  "Likeri",
  "Tekile",
  "Konjak",
  "Gin",
  "Viski",
  "Piva",
  "Cideri",
  "Rakija",
  "VinaC",
  "VinaF",
  "LetnjiMix",
  "Pizza",
  "Sendvici",
  "Kokteli",
  "NonAlchoholic",
];
function myFunction(name) {
    var imeKategorije = document.getElementById(name);
    var meniKategorije = document.getElementById(name + "A");

    kategorije.forEach((element) => {
        let neselektovanaKategorija = document.getElementById(element);
        if (neselektovanaKategorija) {
            neselektovanaKategorija.style.backgroundColor = "#11ffee00";
            neselektovanaKategorija.style.opacity = "1";
        }

        let selektovanaKategorija = document.getElementById(element + "A");
        if (selektovanaKategorija) {
            selektovanaKategorija.style.backgroundColor = "#95D8EA";
            selektovanaKategorija.style.color = "black";
        }
    });

    if (imeKategorije) {
        imeKategorije.style.backgroundColor = "none";
        imeKategorije.style.opacity = "1";
        imeKategorije.scrollIntoView({ behavior: "smooth", block: "start",inline: "start" });
    }

    if (meniKategorije) {
        meniKategorije.style.backgroundColor = "black";
        meniKategorije.style.color = "white";
        setTimeout(function() {
            meniKategorije.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        }, 100); 
    }

}