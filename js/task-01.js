const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.children;

console.log(`Number of categories: ${categoriesItems.length}`);

for (let i = 0; i < categoriesItems.length; i++) {
  const categoryItem = categoriesItems[i];
  const categoryTitle = categoryItem.firstElementChild.textContent;
  const categoryElements = categoryItem.lastElementChild.children.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
}
