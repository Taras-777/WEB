import "./CatalogItems.css";
import { CatalogItem } from "./CatalogItem.jsx";
import { useEffect } from "react";
import { getAllWithFilters } from "../../../services/api";
import { Loader } from "../../Loader.jsx";

export const CatalogItems = (props) => {
  useEffect(async () => {
    props.setLoading(true);
    setTimeout(async () => {
      props.setItems(await getAllWithFilters());
      props.setLoading(false);
    }, 500);
  }, []);

  const itemsList = props.items.map((item) => (
    <CatalogItem
      item={item}
      image_src="https://s0.tchkcdn.com/g-b1cSgu7X3Z39G5SNK2r8ug/17/257688/660x480/f/0/99d_depositphotos_41367457_m_2015.jpg"
    />
  ));
  return <>{props.loading ? <Loader /> : <div className="catalog_items_list"> {itemsList}</div>}</>;
};
