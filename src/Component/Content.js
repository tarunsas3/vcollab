import React from "react";
import "../styles/Content.css";
import { cardData } from "../cardData";

const Card = ({ data }) => {
  const { src, alt, title, LastModified, created } = data;

  return (
    <div className="container">
      <div className="card">
        <img src={src} alt={alt} />
        <div className="details">
          <h2>{title}</h2>
          <h4>Last Modified: {LastModified}</h4>
          <h4>Created: {created}</h4>
        </div>
      </div>
    </div>
  );
};

const CardsContainer = ({ sortOrder }) => {
  const sortedCardData = [...cardData].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div className="cardsContainer">
      {sortedCardData.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

const Content = ({ sortOrder, toggleSortOrder }) => {
  return (
    <div className="content">
      <div className="title">
        <h4>View Contents</h4>
        <h4>VCollab Enterprise / Lorem / Models / Grid</h4>
      </div>
      <hr />
      <CardsContainer sortOrder={sortOrder} />
    </div>
  );
};

export default Content;
