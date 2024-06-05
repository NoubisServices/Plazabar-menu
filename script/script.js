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
  
  var parentMenu = document.getElementById("menuContainer");
  var parentCategory = document.getElementById("contentCategory");
  var arrayOfItems = [];
  var arrayOfMenus = [];
  
  kategorije.forEach((item) => {
    var meniTempKategorija = document.getElementById(item + "A");
    var tempKategorija = document.getElementById(item);
    arrayOfItems.push(tempKategorija);
    arrayOfMenus.push(meniTempKategorija);
  });
  
  parentMenu.addEventListener("scroll", () => {
    const scrollPosition = parentMenu.scrollLeft;
    arrayOfMenus.forEach((item, index) => {
      const itemOffset = item.offsetLeft;
      const itemWidth = item.offsetWidth;
  
      if (
        scrollPosition >= itemOffset &&
        scrollPosition < itemOffset + itemWidth
      ) {

        parentCategory.scrollTo({
          top: arrayOfItems[index].offsetTop - parentCategory.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
  
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
  
      parentCategory.scrollTo({
        top: imeKategorije.offsetTop - parentCategory.offsetTop,
        behavior: "smooth",
      });
    }
  
    if (meniKategorije) {
      meniKategorije.style.backgroundColor = "black";
      meniKategorije.style.color = "white";
    }
  }