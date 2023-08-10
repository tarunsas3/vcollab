import React from "react";
import "../styles/Optionbar.css";
import { BiSolidPencil, BiSolidChat } from "react-icons/bi";
import { LuUndo2, LuRedo2 } from "react-icons/lu";
import {
  FaEye,
  FaFilter,
  FaSortAmountDown,
  FaSortAmountUp,
} from "react-icons/fa";
import { BsGridFill, BsTable } from "react-icons/bs";

const Icon = ({ Component, className, onClick }) => (
  <div className={className} onClick={onClick}>
    <Component />
  </div>
);

const SubHeading = () => (
  <div className="subHeading">
    <h4>Details / Properties</h4>
    <div className="optionIcons">
      <Icon Component={BiSolidPencil} className="icon" />
      <Icon Component={LuUndo2} className="icon" />
      <Icon Component={LuRedo2} className="icon" />
    </div>
  </div>
);

const FilterOptions = ({ toggleSortOrder, sortOrder }) => (
  <div className="filterOptions">
    <Icon Component={FaEye} className="filterIcon" />
    <Icon Component={FaFilter} className="filterIcon" />
    <Icon Component={BiSolidChat} className="filterIcon" />
    <Icon
      Component={sortOrder === "asc" ? FaSortAmountDown : FaSortAmountUp}
      className="filterIcon"
      onClick={toggleSortOrder}
    />
  </div>
);

export default function OptionBar({
  setSelectedOption,
  selectedOption,
  sortOrder,
  toggleSortOrder,
}) {
  return (
    <div className="optionBar">
      <div className="heading">
        <h5>{`VCollab Enterprise / Lorem / Models / ${selectedOption}`}</h5>
        <SubHeading />
      </div>
      <hr />
      <FilterOptions sortOrder={sortOrder} toggleSortOrder={toggleSortOrder} />
      <div className="views">
        <h4>View As</h4>
        <hr />
        <DisplayViews
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
      </div>
    </div>
  );
}

const DisplayViews = ({ setSelectedOption, selectedOption }) => {
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="displayViews">
      <div
        className={`viewOption ${selectedOption === "Table" ? "selected" : ""}`}
        onClick={() => handleOptionClick("Table")}
      >
        <Icon Component={BsTable} className="viewIcons" />
        <span>Table View</span>
      </div>
      <div
        className={`viewOption ${selectedOption === "Grid" ? "selected" : ""}`}
        onClick={() => handleOptionClick("Grid")}
      >
        <Icon Component={BsGridFill} className="viewIcons" />
        <span>Grid View</span>
      </div>
    </div>
  );
};
