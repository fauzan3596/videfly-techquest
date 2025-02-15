import clsx from "clsx";
import React from "react";

const VideoSelectionContent = ({ content, isSelected, onClick }) => {
  const { icon, title, desc, hoveredIcon } = content;

  return (
    <div
      className={`video-selection-content group ${
        isSelected && "bg-[#8D62EC] !text-white"
      }`}
      onClick={onClick}
    >
      <img
        src={icon}
        alt="Icon"
        className={`group-hover:hidden ${isSelected && "hidden"}`}
      />
      <img
        src={hoveredIcon}
        alt="Icon"
        className={clsx("group-hover:block", {
          block: isSelected,
          hidden: !isSelected,
        })}
      />
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="font-medium text-xs">{desc}</p>
      </div>
    </div>
  );
};

export default VideoSelectionContent;
