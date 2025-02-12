import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      <ItemList
        title="Artists"
        items={10}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />

      <ItemList
        title="Musics"
        items={20}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  );
};

export default Main;
