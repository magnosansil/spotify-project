import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";
const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  let totalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>Popular {title}</h2>
        {isHome ? (
          <Link className="item-list__link" to={path}>
            Show All
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((_, index) => index < totalItems)
          .map((item, index) => (
            <SingleItem {...item} key={`${title}-${index}`} idPath={idPath} />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
