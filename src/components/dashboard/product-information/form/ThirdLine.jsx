import React from "react";

const ThirdLine = () => {
  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend form-legend">
          Deskripsi Produk <span className="text-[#E94057]">*</span>
        </legend>
        <textarea
          value={
            "Krim, wajah, pelembap, ringan, mengurangi kerutan, dermatologically tested, aman digunakan setiap hari"
          }
        ></textarea>
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend form-legend">Target Audiens</legend>
        <div className="relative w-full h-35">
          <textarea placeholder="Contoh: Kecantikan alami, dry skin"></textarea>
          <div className="absolute bottom-2 left-3.5 flex gap-2">
            <div className="target-audiens-option">
              <p>+</p>
              <p>Wanita</p>
            </div>
            <div className="target-audiens-option">
              <p>+</p>
              <p>Kulit sensitif</p>
            </div>
            <div className="target-audiens-option">
              <p>+</p>
              <p>Dehidrasi</p>
            </div>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default ThirdLine;
