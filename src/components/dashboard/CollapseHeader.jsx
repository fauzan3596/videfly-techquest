import React from "react";
import { motion } from "framer-motion";

const CollapseHeader = ({ step, title, desc, isOpen, rightSection }) => {
  return (
    <div className="collapse-title flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 shrink-0 rounded-lg bg-[#111336] flex justify-center items-center">
          <p className="font-medium text-xl text-white">{step}</p>
        </div>
        <div>
          <motion.p
            initial={{ y: 0 }}
            animate={{ y: isOpen ? -1 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#111336] text-sm font-semibold"
          >
            {title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -5 }}
            transition={{ duration: 0.3 }}
            className={`text-[#8A8A8A] text-xs font-medium ${
              !isOpen && "hidden"
            }`}
          >
            {desc}
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ height: "auto", opacity: 1 }}
        animate={{ height: isOpen ? 0 : "auto", opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:block hidden"
      >
        {!isOpen && rightSection}
      </motion.div>
    </div>
  );
};

export default CollapseHeader;
