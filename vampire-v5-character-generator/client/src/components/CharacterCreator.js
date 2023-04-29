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
      <h1 id={"header-attributes"}>Attributes</h1>
      <div className={"grid-container-attributes"}>
        <div className={"column"}>
          <h2>Physical</h2>
          <FillableDotsAttributes label={"Strength"} />
          <FillableDotsAttributes label={"Dexterity"} />
          <FillableDotsAttributes label={"Stamina"} />
        </div>
        <div className={"column"}>
          <h2>Social</h2>
          <FillableDotsAttributes label={"Charisma"} />
          <FillableDotsAttributes label={"Manipulation"} />
          <FillableDotsAttributes label={"Composure"} />
        </div>
        <div className={"column"}>
          <h2>Mental</h2>
          <FillableDotsAttributes label={"Intelligence"} />
          <FillableDotsAttributes label={"Wits"} />
          <FillableDotsAttributes label={"Resolve"} />
        </div>
      </div>
    </div>
  );
}

export default CharacterCreator;
