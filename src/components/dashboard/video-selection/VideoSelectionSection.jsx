import React from "react";

const VideoSelectionSection = () => {
  return (
    <div className="py-1.5 pr-4.5 pl-3 rounded-full bg-[#F5F5F5] dashboard-selection-section">
      <div className="w-7 h-7 flex items-center">
        <img
          src="/icons/listicle.svg"
          alt="Listicle Icon"
          className="w-5.75 h-4.75 object-cover"
        />
      </div>
      <p className="text-sm">Listicle</p>
    </div>
  );
};

export default VideoSelectionSection;
