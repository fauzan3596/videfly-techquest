import clsx from "clsx";
import React from "react";

const Button = ({ text, icon, hoveredIcon, className }) => {
  return (
    <button
      className={clsx(
        className,
        "btn w-full flex items-center gap-2 rounded-xl text-sm group"
      )}
    >
      <p>{text}</p>
      <img
        src={icon}
        alt={`${text} Icon`}
        className={clsx({
          "w-5 h-5 group-hover:hidden": hoveredIcon,
          "w-4.5 h-4.5": !hoveredIcon,
        })}
      />
      {hoveredIcon && (
        <img
          src={hoveredIcon}
          alt={`${text} Icon`}
          className="h-5 w-5 hidden group-hover:block"
        />
      )}
      {!hoveredIcon && <p className="font-medium text-sm text-white">1</p>}
    </button>
  );
};

export default Button;
