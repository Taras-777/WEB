import { Footer } from "../footer/Footer.jsx";
import { Header } from "../header/Header.jsx";
import { ItemPageItem } from "./ItemPageItem.jsx";
import { useEffect, useState } from "react";
import { getById } from "../../services/api.js";
import { useParams } from "react-router";
import { Loader } from "../Loader.jsx";

export const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    setTimeout(async () => {
      setItem(await getById(id));
      setLoading(false);
    }, 500);
  }, [id]);

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <ItemPageItem
          image_src="https://s0.tchkcdn.com/g-b1cSgu7X3Z39G5SNK2r8ug/17/257688/660x480/f/0/99d_depositphotos_41367457_m_2015.jpg"
          item={item}
        />
      )}

      <Footer />
    </div>
  );
};
