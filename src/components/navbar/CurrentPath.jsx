import React from "react";

const CurrentPath = ({ currentPath }) => {
  const { text, icon } = currentPath;

  return (
    <div className="nav-item">
      <img src={icon} alt={`${text} Icon`} className="nav-item-img" />
      <p className="nav-item-text">{text}</p>
    </div>
  );
};

export default CurrentPath;
