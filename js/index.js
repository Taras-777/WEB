import {
  getInputValues,
  renderItemsList,
  EDIT_BUTTON_PREFIX,
  clearInputs
} from "./dom-util.js"
import { getAllPlanes, postPlane, updatePlane } from "./api.js";

const formFields = document.getElementsByClassName("form-control");
const submitButton = document.getElementById("submit_button");

const searchButton = document.getElementById("search_button");
const clearSearchButton = document.getElementById("clear_search_button");
const searchInput = document.getElementById("search_input");
const sortCheckbox = document.getElementById("sort_checkbox");
const countButton = document.getElementById("count_button");

let planes = [];

const onEditItem = (e) => {
  if (!validateInput()) {
    return;
  };
  const itemId = e.target.id.replace(EDIT_BUTTON_PREFIX, "");

  updatePlane(itemId, getInputValues());
  clearInputs();

  refetchAllPlanes();
};

export const refetchAllPlanes = () => {
  const allPlanes = getAllPlanes();

  planes = allPlanes.sort((a,b) =>b.model.localeCompare(a.model));

  renderItemsList(planes, onEditItem);
};

const validateInput = () => {
  if (Array.from(formFields).filter(x => x.value.trim() == "").fuel != 0) {
    alert("Please fill out required fields"); 
    return false;
  }
}

submitButton.addEventListener("click", (event) => {
  if (!validateInput()) {
    return;
  };

    event.preventDefault();

    const { model, description, fuel, passengers } = getInputValues();

    clearInputs();

    postPlane({
      model,
      description,
      fuel,
      passengers
    });
  
    refetchAllPlanes();
});

searchButton.addEventListener("click", () => {
  const foundPlanes = planes.filter(
    (plane) => plane.model.search(searchInput.value) !== -1);
    
  renderItemsList(foundPlanes, onEditItem);
});

clearSearchButton.addEventListener("click", () => {
  renderItemsList(planes, onEditItem);

  searchInput.value = "";
});

sortCheckbox.addEventListener("change", function (e) {
    if (this.checked) {
        const sortedPlanes = planes.sort(
            (a, b) => parseFloat(a.passengers) - parseFloat(b.passengers));

        renderItemsList(sortedPlanes, onEditItem);
    }
    else {
        refetchAllPlanes();
    }
});

countButton.addEventListener("click", () => {
    let sum = planes.map(o => o.fuel).reduce((a, c) => { return a + c });
    document.getElementById("total-time").innerText = sum;
    console.log(sum);
})

// main code
refetchAllPlanes();