// Create menu items for each category
const categories = [
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
const arrayOfMenus = [];
const arrayOfItems = [];

for (const category of categories) {
  const menuContainer = document.getElementById(`${category}A`);
  const menuItem = document.getElementById(category);

  arrayOfMenus.push(menuContainer);
  arrayOfItems.push(menuItem);
}

// Handle parent containers
let isScrolling = false;
const SCROLL_TIMEOUT = 300;
const parentMenu = document.getElementById("menuContainer");
const parentCategory = document.getElementById("contentCategory");
parentCategory.addEventListener("scroll", handleScroll);

// Event handlers
function handleScroll() {
  if (isScrolling) return;

  isScrolling = true;

  setTimeout(() => {
    const scrollPosition = parentCategory.scrollTop;
    arrayOfItems.forEach((item, index) => {
      const itemOffset = item.offsetTop;
      const itemHeight = item.offsetHeight;

      const isActive =
        scrollPosition + parentCategory.offsetHeight * 0.1 >=
          itemOffset - parentCategory.offsetTop &&
        scrollPosition < itemOffset + itemHeight - parentCategory.offsetTop &&
        !(
          scrollPosition >
          parentCategory.scrollHeight - parentCategory.offsetHeight
        );

      if (isActive) {
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
  }, SCROLL_TIMEOUT);
}

function scrollToCategory(name) {
  const category = document.getElementById(name);
  const container = document.getElementById(`${name}A`);

  if (category) {
    category.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    arrayOfMenus.forEach((item) => item.classList.remove("activate"));
    container.classList.add("activate");
  }
}
