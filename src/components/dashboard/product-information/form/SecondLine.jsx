import React from "react";

const SecondLine = () => {
  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend form-legend">
          Nama Produk <span className="text-[#E94057]">*</span>
        </legend>
        <input type="text" value={"Sunscreen SPF 50+++"} />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend form-legend">
          Nama Toko <span className="text-[#E94057]">*</span>
        </legend>
        <input type="text" value={"Selfmology"} spellCheck={false} />
      </fieldset>
    </>
  );
};

export default SecondLine;
