import React, { useState } from "react";
import { motion } from "framer-motion";
import CollapseHeader from "../CollapseHeader";
import { videoSelectionContent } from "../../../constants";
import VideoSelectionContent from "./VideoSelectionContent";
import VideoSelectionSection from "./VideoSelectionSection";

const VideoSelection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const onClickHandler = (index) => {
    setSelectedIndex(index);

    if (selectedIndex === index) {
      setSelectedIndex(null);
    }
  };

  return (
    <section
      className={`dashboard-section ${
        isOpen ? "border-[#9F7CEF]" : "border-[#ECECEC]"
      }`}
    >
      <div className="collapse collapse-arrow">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => setIsOpen((prev) => !prev)}
        />
        <CollapseHeader
          step={1}
          title="Pilih Jenis Video"
          desc="Tentukan format video yang sesuai dengan kebutuhan konten Anda."
          isOpen={isOpen}
          rightSection={<VideoSelectionSection />}
        />
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`collapse-content text-sm ${isOpen && "mt-7"}`}
        >
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            {videoSelectionContent.map((content, index) => (
              <VideoSelectionContent
                key={index}
                content={content}
                isSelected={selectedIndex === index}
                onClick={() => onClickHandler(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSelection;
