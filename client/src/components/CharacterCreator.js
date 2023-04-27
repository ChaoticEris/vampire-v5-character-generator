import React from "react";
import FillableDotsAttributes from "./FillableDotsAttributes";

function CharacterCreator() {
  return (
    <div>
      <br /> <br />
      <label htmlFor="name">Name: </label>
      <input type="text" id={"name"} placeholder={"Enter a name"} />
      <br /> <br />
      <label htmlFor="clan-list">Clan: </label>
      <select name="clan-list" id="clan-list">
        <option value="Banu Haqim">Banu Haqim</option>
        <option value="Brujah">Brujah</option>
        <option value="Caitiff">Caitiff</option>
        <option value="Gangrel">Gangrel</option>
        <option value="Hecata">Hecata</option>
        <option value="Lasombra">Lasombra</option>
        <option value="Malkavian">Malkavian</option>
        <option value="Nosferatu">Nosferatu</option>
        <option value="Ravnos">Ravnos</option>
        <option value="Salubri">Salubri</option>
        <option value="The Ministry">The Ministry</option>
        <option value="Thin-Blooded">Thin-Blooded</option>
        <option value="Toreador">Toreador</option>
        <option value="Tremere">Tremere</option>
        <option value="Tzimisce">Tzimisce</option>
        <option value="Ventrue">Ventrue</option>
      </select>
      <br /> <br />
      <div id={"attributes"}>
        <label htmlFor="strength">Strength: </label>
        <FillableDotsAttributes />
      </div>
    </div>
  );
}

export default CharacterCreator;
