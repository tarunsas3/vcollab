import React from "react";
import "../styles/Report.css";

const Report = ({ type }) => {
  const data = type === "reports" ? reportData : fileData;
  const headerText = type === "reports" ? "Report" : "Files";
  const tableHeaders =
    type === "reports"
      ? ["S.No", "Report Name", "Report Status"]
      : ["S.No", "File Name", "File Status"];

  return (
    <div className="report">
      <h2>{headerText}</h2>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.sno}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const reportData = [
  { sno: 1, name: "Report 1", status: "Completed" },
  { sno: 2, name: "Report 2", status: "Pending" },
  { sno: 3, name: "Report 3", status: "In Progress" },
];

const fileData = [
  { sno: 1, name: "File 1", status: "Available" },
  { sno: 2, name: "File 2", status: "Pending" },
  { sno: 3, name: "File 3", status: "In Progress" },
];

export default Report;
