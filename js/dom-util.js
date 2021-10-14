export const EDIT_BUTTON_PREFIX = 'edit-button-';

const modelInput = document.getElementById("model_input");
const descriptionInput = document.getElementById("description_input");
const fuelInput = document.getElementById("fuel_input");
const passengersInput = document.getElementById("passengers_input");

const itemsContainer = document.getElementById("items_container");

const itemTemplate = ({ id, model, description, fuel, passengers }) => `
<li id="${id}" class="item-card">
  <img
    src="https://news.liga.net/images/general/2018/11/09/thumbnail-tw-20181109114825-1207.jpg?v=1541763377"
    class="item-container__image" alt="card">
  <div>
    <h5>${model}</h5>
    <p>${description}</p>
    <p>Fuel: ${fuel} </p>
    <p>Passengers: ${passengers}</p>
    <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="default_button">
      Edit
    </button>
  </div>
</li>`;

export const addItemToPage = ({id, model, description, fuel, passengers }, onEditItem) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, model, description, fuel, passengers })
  );

  const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);

  editButton.addEventListener("click", onEditItem);
};

export const renderItemsList = (items, onEditItem) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item, onEditItem);
  }
};

export const clearInputs = () => {
  modelInput.value = "";
  descriptionInput.value = "";
  fuelInput.value = "";
  passengersInput.value = "";
};

export const getInputValues = () => {
  return {
    model: modelInput.value,
    description: descriptionInput.value,
    fuel: fuelInput.value,
    passengers: passengersInput.value,
  };
};