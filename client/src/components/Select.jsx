import React, { useEffect, useRef, useState } from "react";

export const Select = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  function clearOptions() {
    onChange([]);
  }

  function selectOption(option) {
    const isUnique = !value.find((v) => v === option);
    if (isUnique) {
      onChange([...value, option]);
    }
  }

  function removeTag(tag) {
    const newValue = value.filter((v) => v !== tag);
    onChange(newValue);
  }

  useEffect(() => {
    const handler = (e) => {
      if (e.target !== containerRef.current) return;
      if (e.code === "Escape") setIsOpen(false);
    };

    containerRef.current?.addEventListener("keydown", handler);

    return () => {
      containerRef.current?.removeEventListener("keydown", handler);
    };
  }, [isOpen, options]);

  return (
    <div
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className="bg-white relative w-full font-normal text-lg min-h-6 border border-gray-300 flex items-center gap-2 px-2 py-1 rounded focus:border-blue-500"
    >
      <span className="flex-grow flex gap-2 flex-wrap">
        {value.map((v, index) =>
          React.createElement(
            "button",
            {
              key: index,
              onClick: (e) => {
                e.stopPropagation();
                selectOption(v);
                removeTag(v);
              },
              className:
                "border border-gray-300 rounded px-1 flex items-center gap-1 cursor-pointer bg-green-300 px-2 py-1",
            },
            React.createElement("span", null, v),
            React.createElement("span", null, "\xD7")
          )
        )}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className="text-gray-500 bg-transparent border-none outline-none cursor-pointer text-xl"
      >
        &times;
      </button>
      <div className="bg-gray-300 w-0.5 h-6 mx-2"></div>
      <div className="caret border-solid border-b-2 border-gray-500"></div>
      <ul
        className={`absolute top-full left-0 w-full bg-white border border-gray-300 rounded z-10 ${
          isOpen ? "" : "hidden"
        }`}
        style={{ maxHeight: "200px", overflowY: "auto" }}
      >
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            className={`px-2 py-1 cursor-pointer hover:bg-green-400`}
            key={index}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
