import clsx from "clsx";
import React, { useState } from "react";

const FirstLine = () => {
  const [selected, setSelected] = useState(1);

  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend form-legend">
          Nuansa <span className="text-[#E94057]">*</span>
        </legend>
        <div className="w-full relative">
          <select className="nuansa-select"></select>
          <div className="absolute top-1/2 -translate-y-1/2 left-3.5 flex items-center gap-3">
            <img
              src="/images/product/promosional.png"
              alt="Promosional"
              className="w-5 h-5 object-cover"
            />
            <p className="text-sm text-[#111336]">Promosional</p>
          </div>
        </div>
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend form-legend">
          Bahasa <span className="text-[#E94057]">*</span>
        </legend>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
          <div
            className={clsx("bahasa-container", {
              "bahasa-selected": selected === 1,
            })}
            onClick={() => setSelected(1)}
          >
            <img src="/images/indonesia.png" alt="Indonesia" />
            <p>Bahasa Indonesia</p>
          </div>
          <div
            className={clsx("bahasa-container", {
              "bahasa-selected": selected === 2,
            })}
            onClick={() => setSelected(2)}
          >
            <img src="/images/english.png" alt="English" />
            <p>Bahasa Inggris</p>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default FirstLine;
