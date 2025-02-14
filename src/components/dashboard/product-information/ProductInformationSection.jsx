import React from "react";

const ProductInformationSection = () => {
  return (
    <div className="dashboard-selection-section">
      <div className="py-1.5 pl-3 pr-4.5 flex items-center gap-2 bg-[#F5F5F5] rounded-full text-sm">
        <img
          src="/images/product/promosional.png"
          alt="Promosional Logo"
          className="h-7 w-7 object-cover"
        />
        <p>Promosional</p>
      </div>
      <div className="py-1.5 px-4.5 bg-[#F5F5F5] rounded-full">
        <p>Selfmology</p>
      </div>
      <div className="py-2 px-2.5 bg-[#F5F5F5] rounded-full">
        <p>3+</p>
      </div>
    </div>
  );
};

export default ProductInformationSection;
