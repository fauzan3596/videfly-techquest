import React from "react";
import FirstLine from "./form/FirstLine";
import SecondLine from "./form/SecondLine";
import ThirdLine from "./form/ThirdLine";
import FourthLine from "./form/FourthLine";

const ProductInformationContent = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 text-sm">
      <FirstLine />
      <SecondLine />
      <ThirdLine />
      <FourthLine />
    </div>
  );
};

export default ProductInformationContent;
