import React from "react";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";
const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>Popular {title}</h2>
        <Link className="item-list__link" to={path}>
          Show All
        </Link>
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((_, index) => index < items)
          .map((item, index) => (
            <SingleItem {...item} key={`${title}-${index}`} idPath={idPath} />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
