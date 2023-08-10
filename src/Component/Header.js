import React from "react";
import { AiOutlinePlus, AiOutlineCopy, AiOutlineDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import "../styles/Header.css";

const Icon = ({ Component, className, onClick }) => (
  <div className={className} onClick={onClick}>
    <Component />
  </div>
);

export default function Header({ setSelectedOption, selectedOption }) {
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="header">
      <div className="headerHeading">
        <h4>Views List</h4>
        <h4>VCollab Enterprise / Lorem / Models</h4>
        <div className="icons">
          <Icon Component={AiOutlinePlus} className="icon" />
          <Icon Component={BiPencil} className="icon" />
          <Icon Component={AiOutlineCopy} className="icon" />
          <Icon Component={AiOutlineDelete} className="icon" />
        </div>
      </div>
      <hr />
      <div className="options">
        {[
          "Table",
          "Grid",
          "Categories",
          "New",
          "CAD",
          "Crash",
          "Shared with me",
        ].map((option, index) => (
          <h4
            key={index}
            className={selectedOption === option ? "selected" : ""}
            onClick={
              option === "Table" || option === "Grid"
                ? () => handleOptionClick(option)
                : undefined
            }
          >
            {option}
          </h4>
        ))}
      </div>
    </div>
  );
}
