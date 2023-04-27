import React from "react";

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
      </select>
    </div>
  );
}

export default CharacterCreator;
