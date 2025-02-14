import React from "react";
import LeftContentSection from "./LeftContentSection";
import RightContentSection from "./RightContentSection";

const ProductMediaContent = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
      <LeftContentSection />
      <RightContentSection />
    </div>
  );
};

export default ProductMediaContent;
