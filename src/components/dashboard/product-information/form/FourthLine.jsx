import React from "react";

const FourthLine = () => {
  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend form-legend">
          Harga <span className="text-[#E94057]">*</span>
        </legend>
        <input type="text" value={"Rp 199.999"} />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend form-legend">Promosi</legend>
        <input type="text" placeholder="Contoh: Beli 2 gratis 1" />
      </fieldset>
    </>
  );
};

export default FourthLine;
