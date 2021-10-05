const itemsContainer = document.getElementById("items_container");

const itemTemplate = ({ id, title, description, fuel, passengers }) => `
<li id="${id}" class="item-card">
  <img
    src="https://news.liga.net/images/general/2018/11/09/thumbnail-tw-20181109114825-1207.jpg?v=1541763377"
    class="item-container__image" alt="card">
  <div>
    <h5>${title}</h5>
    <p>${description}</p>
    <p>Fuel: ${fuel}</p>
    <p>Passengers: ${passengers}</p>
  </div>
</li>`;

export const addItemToPage = ({ _id: id, title, description, fuel, passengers }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, title, description, fuel, passengers })
  );
};

export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item);
  }
};