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

var style = document.createElement("style");
style.type = "text/css";
style.innerHTML =
  ".activate {  background-color: #44b4e490 !important; border-radius: 100px; border: 1px solid #76b0dd; color: #ffffff !important;}";
document.getElementsByTagName("head")[0].appendChild(style);

kategorije.forEach((item) => {
  var meniTempKategorija = document.getElementById(item + "A");
  var tempKategorija = document.getElementById(item);
  arrayOfItems.push(tempKategorija);
  arrayOfMenus.push(meniTempKategorija);
});

let isScrolling = false;

parentCategory.addEventListener("scroll", () => {
  if (!isScrolling) {
    isScrolling = true;

    setTimeout(() => {
      const scrollPosition = parentCategory.scrollTop;
      arrayOfItems.forEach((item, index) => {
        const itemOffset = item.offsetTop;
        const itemHeight = item.offsetHeight;

        if (
          scrollPosition + parentMenu.offsetHeight * 0.1 >=
            itemOffset - parentCategory.offsetTop &&
          scrollPosition < itemOffset + itemHeight - parentCategory.offsetTop &&
          !(
            scrollPosition >
            parentCategory.scrollHeight - parentCategory.offsetHeight
          )
        ) {
          parentMenu.scrollTo({
            left:
              arrayOfMenus[index].offsetLeft -
              ((parentMenu.offsetWidth - arrayOfMenus[index].offsetWidth) * 1) /
                2,
            behavior: "smooth",
          });
          arrayOfMenus.forEach((item) => item.classList.remove("activate"));
          arrayOfMenus[index].classList.add("activate");
        }
      });

      isScrolling = false;
    }, 300);
  }
});

function myFunction(name) {
  isScrolling = true;
  var imeKategorije = document.getElementById(name);
  var imeMenija = document.getElementById(name+"A");


  if (imeKategorije) {
    parentCategory.scrollTo({
      top: imeKategorije.offsetTop - parentCategory.offsetTop,
      behavior: "smooth",
    });
    arrayOfMenus.forEach((item) => item.classList.remove("activate"));
    imeMenija.classList.add("activate");
  }
  setTimeout(() => {
    isScrolling = false;
  }, 800);
}
