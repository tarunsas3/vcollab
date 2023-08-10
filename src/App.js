import React, { useState } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  LuLayoutDashboard,
  LuFiles,
  LuFolders,
  LuFileSignature,
  LuHistory,
  LuTimer,
  LuSettings,
} from "react-icons/lu";
import Header from "./Component/Header";
import OptionBar from "./Component/Optionbar";
import Content from "./Component/Content";
import ContentTable from "./Component/ContentTable";
import Report from "./Component/Report";

const sideBarItems = [
  { icon: <LuLayoutDashboard />, title: "Dashboard", to: "/dashboard" },
  { icon: <LuFiles />, title: "Files", to: "/files" },
  { icon: <LuFolders />, title: "Models", to: "/models" },
  { icon: <LuFileSignature />, title: "Reports", to: "/reports" },
  { icon: <LuHistory />, title: "Jobs", to: "/jobs" },
  { icon: <LuTimer />, title: "Activity", to: "/activity" },
  { icon: <LuSettings />, title: "Settings", to: "/settings" },
];

const SidebarLink = ({ icon, title, to }) => (
  <Link to={to} className="sidebarIcon">
    {icon}
    <span>{title}</span>
  </Link>
);

function App() {
  const [selectedOption, setSelectedOption] = useState("Grid"); // Default to Grid View
  const [sortOrder, setSortOrder] = useState("asc"); // Default to ascending

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="App">
      <Router>
        <div className="sidebar">
          {sideBarItems.map((item, index) => (
            <SidebarLink
              key={index}
              icon={item.icon}
              title={item.title}
              to={item.to}
            />
          ))}
        </div>
        <div className="middleComponent">
          <Header
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
          />
          <Routes>
            <Route
              path="/models"
              element={
                selectedOption === "Table" ? (
                  <ContentTable sortOrder={sortOrder} />
                ) : (
                  <Content
                    sortOrder={sortOrder}
                    toggleSortOrder={toggleSortOrder}
                  />
                )
              }
            />
            <Route path="/reports" element={<Report type="reports" />} />
            <Route path="/files" element={<Report type="files" />} />
          </Routes>
        </div>
        <OptionBar
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
          toggleSortOrder={toggleSortOrder}
          sortOrder={sortOrder}
        />
      </Router>
    </div>
  );
}

export default App;
