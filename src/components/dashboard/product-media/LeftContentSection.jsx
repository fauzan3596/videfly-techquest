import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../Button";

const LeftContentSection = () => {
  const [isClicked, setIsClicked] = useState(null);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="rounded-xl border-1 border-[#ECECEC] w-full h-[415px] flex flex-col items-center justify-center gap-4">
        <img
          src="/images/product/product-4.png"
          alt="Product 4"
          className="h-45 w-45 object-cover rounded-xl"
        />
        <div className="relative w-full">
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={isClicked ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-2"
          >
            <img
              src="/images/product/product-1.png"
              alt="Product 1"
              className="h-10 w-10 object-cover rounded-lg cursor-pointer"
              onClick={() => setIsClicked(true)}
            />
            <img
              src="/images/product/product-2.png"
              alt="Product 2"
              className="h-10 w-10 object-cover rounded-lg cursor-pointer"
              onClick={() => setIsClicked(true)}
            />
            <img
              src="/images/product/product-3.png"
              alt="Product 3"
              className="h-10 w-10 object-cover rounded-lg cursor-pointer"
              onClick={() => setIsClicked(true)}
            />
          </motion.div>
          {isClicked && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="grid grid-cols-2 gap-2 absolute top-0 left-1/2 -translate-x-1/2"
            >
              <button
                className="btn btn-sm rounded-lg px-5"
                onClick={() => setIsClicked(false)}
              >
                Batal
              </button>
              <button className="btn btn-sm bg-[#703BE7] hover:bg-[#8D62EC] text-white rounded-lg px-5">
                Simpan
              </button>
            </motion.div>
          )}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full">
        <Button
          text="Tingkatkan Kualitas"
          icon="/icons/pencil-star.svg"
          hoveredIcon="/icons/pencil-star-white.svg"
          className="quick-edit-button"
        />
        <Button
          text="Hapus Background"
          icon="/icons/remove-bg.svg"
          hoveredIcon="/icons/remove-bg-white.svg"
          className="quick-edit-button"
        />
      </div>
    </div>
  );
};

export default LeftContentSection;
