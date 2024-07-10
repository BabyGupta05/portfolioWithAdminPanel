import React, { useState, useEffect } from "react";

const Inrto = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [displayTextOrder, setDisplayTextOrder] = useState([
    "FULL STACK DEVELOPER",
    "I DO BACKEND",
    "I DO FRONTEND",
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentText = displayTextOrder[0];
      const textToDisplay = currentText.substring(0, index);
      setDisplayText(textToDisplay);
      if (index === currentText.length) {
        setIndex(0);
        setDisplayTextOrder((prevDisplayTextOrder) => [
          ...prevDisplayTextOrder.slice(1),
          prevDisplayTextOrder[0],
        ]);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 220);

    return () => clearInterval(intervalId);
  }, [index, displayTextOrder]);

  return (
    <div className="flex flex-between bg-secondary-background p-20 ">
      <div className="w-1/2">
        <img src="https://placehold.jp/200x200.png" alt="" />
      </div>

      <div className="w-3/4">
        <h1 className="text-4xl font-bold text-primary-text mt-4">
          BABY GUPTA
        </h1>
        <h3 className="text-xl font-bold mt-2">MERN : {displayText}</h3>
        <p className="text-primary-text mt-2 line-clamp-3 hover:line-clamp-none transition delay-150">
          I'm a dedicated full-stack developer with three years of experience,
          specializing in creating user-centric websites and applications. My
          skills include building scalable solutions with React and Node.js,
          optimizing databases, integrating APIs, and delivering clean,
          maintainable code. I thrive in collaborative, agile environments and
          contribute to project success through innovation and teamwork.
        </p>
      </div>
    </div>
  );
};

export default Inrto;
