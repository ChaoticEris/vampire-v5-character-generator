import React, { useState } from "react";
import CharacterCreator from "./CharacterCreator";
import CharacterViewer from "./CharacterViewer";

function HeaderButtons() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <button
        onClick={() => handleButtonClick("characterCreator")}
        className={"buttons"}
      >
        Character Creator
      </button>
      <button
        onClick={() => handleButtonClick("characterViewer")}
        className={"buttons"}
      >
        Character Viewer
      </button>
      {activeButton === "characterCreator" && <CharacterCreator />}
      {activeButton === "characterViewer" && <CharacterViewer />}
    </div>
  );
}

export default HeaderButtons;
