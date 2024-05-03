import { useState } from "react";

const EnableButton = () => {
  const [multiSelect, setMultiSelect] = useState(true);

  function changeSelect() {
    setMultiSelect(!multiSelect);
  }

  return (
    <div className="flex justify-center items-center">
      <button className=" text-white  m-5" onClick={changeSelect}>
        {multiSelect ? "Enable Multi Select" : "Disable Multi Select"}
      </button>
    </div>
  );
};

export default EnableButton;
