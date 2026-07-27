let kategorije = [
  "Kokteli",
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
  "Cideri",
  "Rakija",
  "VinaC",
  "VinaF",
  "LetnjiMix",
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

function activateMenuItem(index) {
  parentMenu.scrollTo({
    left: arrayOfMenus[index].offsetLeft -
        (parentMenu.offsetWidth - arrayOfMenus[index].offsetWidth) / 2,
    behavior: "smooth",
  });
  arrayOfMenus.forEach((item) => item.classList.remove("activate"));
  arrayOfMenus[index].classList.add("activate");
}


let isScrolling = false;

parentCategory.addEventListener("scroll", () => {
  if (!isScrolling) {
    isScrolling = true;

    setTimeout(() => {
      const scrollPosition = parentCategory.scrollTop;
      const isAtBottom = scrollPosition + parentCategory.offsetHeight >=
          parentCategory.scrollHeight - 5;

      if (isAtBottom) {
        // At bottom - activate last menu item
        activateMenuItem(arrayOfMenus.length - 1);
      } else {
        // Find active section based on scroll position
        for (let index = 0; index < arrayOfItems.length; index++) {
          const item = arrayOfItems[index];
          const itemTop = item.offsetTop - parentCategory.offsetTop - 100;
          const itemBottom = itemTop + item.offsetHeight;
          const viewportTop = scrollPosition;
          const viewportBottom = scrollPosition + parentCategory.offsetHeight;
          const triggerPosition = itemTop + (item.offsetHeight * 0.3); // Activate when 30% into view

          if (scrollPosition >= itemTop - 100 && scrollPosition < itemBottom - 100) {
            activateMenuItem(index);
            break; // Exit loop once we find the active section
          }
        }
      }

      isScrolling = false;
    }, 300);
  }
});

function myFunction(name) {
  isScrolling = true;
  var imeKategorije = document.getElementById(name);
  var imeMenija = document.getElementById(name + "A");

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
