import { renderItemsList } from "./dom-util.js"
import { getAllPlane } from "./api.js";

const searchButton = document.getElementById("search_button");
const clearSearchButton = document.getElementById("clear_search_button");
const searchInput = document.getElementById("search_input");
const sortCheckbox = document.getElementById("sort_checkbox");
const countButton = document.getElementById("count_button");

let plane = [];

export const refetchAllPlane = () => {
  const allPlane = getAllPlane();

  plane = allPlane.sort((a, b) => b.title.localeCompare(a.title));

  renderItemsList(plane);
};

searchButton.addEventListener("click", () => {
  const foundPlane = plane.filter(
    (plane) => plane.title.search(searchInput.value) !== -1);

  renderItemsList(foundPlane);
});

clearSearchButton.addEventListener("click", () => {
  renderItemsList(plane);

  searchInput.value = "";
});

sortCheckbox.addEventListener("change", function (e) {
  if (this.checked) {
    const sortedPlane = palne.sort(
      (a, b) => parseFloat(a.passengers) - parseFloat(b.passengers));

    renderItemsList(sortedPlane);
  }
  else {
    refetchAllPlane();
  }
});

countButton.addEventListener("click", () => {
  let sum = plane.map(o => o.fuel).reduce((a, c) => { return a + c });
  document.getElementById("total-fuel").innerText = sum;
  console.log(sum);
})

// main code
refetchAllPlane();