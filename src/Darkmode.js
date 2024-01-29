import React, { useEffect, useState } from "react";

const Darkmode = () => {
  const [theme, setTheme] = useState(false);

  const handleClick = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    if (theme == true) {
      document.body.classList.add("dark");
      
    } else {
      document.body.classList.remove("dark");
    }
  });
  return (
    <>
      <div class=" div h-[99vh] w-[100%] flex flex-col justify-center items-center gap-5">
        <button class="btn" onClick={handleClick}>{theme ? "Light" : "Dark"}</button>
        <h1>Theme color in react</h1>
        <span>light and Dark theme</span>
        <div class="h-10vh w-[20%] ">
          <img
            src="https://miro.medium.com/v2/resize:fit:960/1*h7GMfvHKvLPkynG9NvULJw.gif"
            alt="Your GIF"
          />
        </div>
      </div>
    </>
  );
};
export default Darkmode;
