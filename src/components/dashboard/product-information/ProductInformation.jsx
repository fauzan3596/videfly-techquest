import React, { useState } from "react";
import { motion } from "framer-motion";
import CollapseHeader from "../CollapseHeader";
import ProductInformationSection from "./ProductInformationSection";
import ProductInformationContent from "./ProductInformationContent";
import { ChevronRight } from "lucide-react";

const ProductInformation = () => {
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
          step={2}
          title="Personalisasi Produk"
          desc="Tambahkan informasi produk untuk video yang optimal."
          isOpen={isOpen}
          rightSection={<ProductInformationSection />}
        />
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`collapse-content text-sm ${isOpen && "mt-7"}`}
        >
          <ProductInformationContent />
          <div className="next-section">
            <p>Selanjutnya</p>
            <ChevronRight className="h-4.5 w-4.5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductInformation;
