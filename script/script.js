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
    
    kategorije.filter(function (item) {
      return item !== name;
    });
  
    kategorije.forEach((element) => {
      let neselektovanaKategorija = document.getElementById(element); 
      neselektovanaKategorija.style.backgroundColor = "#11ffee00";
      neselektovanaKategorija.style.opacity = "1";
  
      let selektovanaKategorija = document.getElementById(element + "A"); 
      selektovanaKategorija.style.backgroundColor = "#95D8EA"; 
      selektovanaKategorija.style.color = "black";
    });
  
    imeKategorije.style.backgroundColor = "none"; 
    imeKategorije.style.opacity = "1";
    meniKategorije.style.backgroundColor = "black";
    meniKategorije.style.color = "white";
 
    imeKategorije.scrollIntoView({ behavior: "smooth" });
  }