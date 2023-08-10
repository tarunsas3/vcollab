import React from "react";
import "../styles/ContentTable.css";
import { cardData } from "../cardData";

const TableCard = ({ data }) => {
  const { title, LastModified, created } = data;

  return (
    <tr>
      <td>{title}</td>
      <td>{LastModified}</td>
      <td>{created}</td>
    </tr>
  );
};

const ContentTable = ({ sortOrder }) => {
  const sortedCardData = [...cardData].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div className="tableContent">
      <div className="tableTitle">
        <h4>View Contents</h4>
        <h4>VCollab Enterprise / Lorem / Models / Table</h4>
      </div>
      <hr />
      <table className="tableContainer">
        <thead>
          <tr>
            <th>Title</th>
            <th>Last Modified</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {sortedCardData.map((item) => (
            <TableCard key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;
