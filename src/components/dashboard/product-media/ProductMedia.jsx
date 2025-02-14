import React, { useState } from "react";
import { motion } from "framer-motion";
import CollapseHeader from "../CollapseHeader";
import ProductMediaSection from "./ProductMediaSection";
import ProductMediaContent from "./ProductMediaContent";

const ProductMedia = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          step={3}
          title="Sesuaikan Media Produk"
          desc="Atur media produk untuk video yang menarik."
          isOpen={isOpen}
          rightSection={<ProductMediaSection />}
        />
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`collapse-content text-sm ${isOpen && "mt-7"}`}
        >
          <ProductMediaContent />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductMedia;
