import { useEffect, useState } from "react";

const App = () => {
  const get = JSON.parse(localStorage.getItem("theme"));
  const [toggle, setToggle] = useState(get ?? false);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(toggle));
  }, [toggle]);

  return (
    <div
      className={`w-screen h-screen flex justify-center items-center transition-all duration-300 ${
        toggle ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div
        className={`w-14 h-8 rounded-full flex items-center px-1 cursor-pointer border-2 transition-all duration-300 ${
          toggle ? "justify-start bg-gray-300 border-gray-400" : "justify-end bg-gray-700 border-white"
        }`}
        onClick={() => setToggle((prev) => !prev)}
      >
        <div
          className={`w-6 h-6 rounded-full transition-all duration-300 ${
            toggle ? "bg-black" : "bg-white"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default App;
