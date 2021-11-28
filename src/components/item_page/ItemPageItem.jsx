import "./ItemPageItem.css";
import { GoBackButton } from "./GoBackButton.jsx";
import { AddToCartButton } from "./AddToCartButton";

export const ItemPageItem = (props) => {
  let driverTypes = {
    Military: "Military",
    Passenger: "Passenger",
    Cargo: "Cargo",
  };

  let materialsToSaw = {
    Carbon: "Carbon",
    Metal: "Metal",
    Steel: "Steel",
  };

  return (
    <div className="item_page_item">
      <div className="item_page_item__upper_part">
        <img src={props.image_src} class="item_page_item__upper_part__image" alt="item" />
        <div className="item_page_item__upper_part_parameters">
          <div className="item_page_item__upper_part__characteristics">
            <p className="item_page_item__upper_part__characteristics__drive_type">
              {driverTypes[props.item.drive_type]}
            </p>
            <p className="item_page_item__upper_part__characteristics__material_to_saw">
              {materialsToSaw[props.item.material_to_saw]}
            </p>
          </div>
          <h2 className="item_page_item__upper_part__title">{props.item.name}</h2>
          <p className="item_page_item__upper_part__desrcription">{props.item.description}</p>
          <p className="item_page_item__upper_part__paragraph">Length: {props.item.length} meter</p>
        </div>
      </div>
      <div className="item_page_item__lower_part">
        <p className="item_page_item__lower_part__price__display"> Price: {"$" + props.item.price}</p>
        <div className="item_page_item__lower_part__buttons">
          <GoBackButton />
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};
