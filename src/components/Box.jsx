import { useState } from "react";

const Box = ({ data }) => {
  const [value, setValue] = useState(true);
  const [content, setContent] = useState(false);

  function changeValue() {
    
    setValue(!value);
    
    if (value === true) {
      return setContent(true);
    } else {
      return setContent(false);
    }
  }
  return (
    <>
      <div className="flex justify-center items-center m-5">
        <p className=" text-white">{data.title}</p>
        <button
          className=" text-white border-2 border-spacing-2"
          onClick={changeValue}
        >
          {value ? "+" : "-"}
        </button>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-white max-w-md text-center">
          {content ? data.description : ""}
        </p>
      </div>
    </>
  );
};

export default Box;
