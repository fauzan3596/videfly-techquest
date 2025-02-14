import React from "react";

const RightNavbar = () => {
  return (
    <div className="flex-none">
      <div className="flex items-center gap-3.5">
        <img
          src="/icons/notification.svg"
          alt="Notification Logo"
          className="profile-image"
        />
        <div className="profile-information profile-information-color">
          <img src="/icons/coin.svg" className="h-4.5 w-4.5 object-cover" />
          <p className="text-white text-sm font-semibold">5 Koin</p>
          <img
            src="/images/profile/profile-picture.png"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default RightNavbar;
