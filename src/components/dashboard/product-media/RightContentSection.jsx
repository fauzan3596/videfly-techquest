import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trash } from "lucide-react";

const RightContentSection = () => {
  const [isClicked, setIsClicked] = useState(null);

  return (
    <div className="flex flex-col gap-6">
      <div className="media-label">
        <p className="label-text">
          Media Produk<span className="text-[#E94057]">*</span>
        </p>
        <div className="media-container carousel carousel-center">
          <div className="add-media cursor-pointer carousel-item h-10 w-10">
            <span className="add-text">+</span>
          </div>
          <img
            src="/images/product/product-5.png"
            alt="Product 5"
            className="carousel-item"
          />
          <img
            src="/images/product/product-6.png"
            alt="Product 6"
            className="carousel-item"
          />
          <img
            src="/images/product/product-7.png"
            alt="Product 7"
            className="carousel-item"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="media-label">
          <p className="label-text">Logo</p>
          <div
            className="media-container relative"
            onClick={() => setIsClicked((prev) => !prev)}
          >
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={isClicked ? { y: 20, opacity: 0 } : { y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="add-media cursor-pointer"
            >
              <span className="add-text ">+</span>
            </motion.div>
            {isClicked && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="add-media h-1 w-1 rounded-2xl object-cover absolute top-1/2 left-1/2 -translate-1/2 cursor-pointer"
              >
                <motion.img
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  src="/images/logo/logo-2.png"
                  alt="Logo"
                  className="px-3 py-5"
                />
                <Trash className="h-4 w-4 absolute top-2 right-2 z-50" />
              </motion.div>
            )}
          </div>
        </div>
        <div className="media-label w-full">
          <div className="flex justify-between text-[#111336]">
            <div className="flex gap-1.5">
              <img
                src="/icons/ai-icon.svg"
                alt="AI Icon"
                className="h-4.5 w-4.5 object-cover"
              />
              <p className="font-medium text-sm sm:block hidden">Disarankan oleh AI</p>
            </div>
            <p className="font-medium text-xs">0/5 dipilih</p>
          </div>
          <div className="media-container opacity-50 carousel carousel-center">
            <div className="carousel-item">
              <img src="/images/logo/logo-3.png" alt="Logo 3" />
            </div>
            <div className="carousel-item">
              <img src="/images/logo/logo-4.png" alt="Logo 4" />
            </div>
            <div className="carousel-item">
              <img src="/images/logo/logo-5.png" alt="Logo 5" />
            </div>
            <div className="carousel-item">
              <img src="/images/logo/logo-6.png" alt="Logo 6" />
            </div>
            <div className="carousel-item">
              <img src="/images/logo/logo-7.png" alt="Logo 7" />
            </div>
            <div className="carousel-item">
              <img src="/images/logo/logo-8.png" alt="Logo 8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContentSection;
