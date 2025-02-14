import React from "react";
import {
  Header,
  ProductInformation,
  ProductMedia,
  VideoSelection,
} from "../components";
import Button from "../components/dashboard/Button";

const DashboardPage = () => {
  return (
    <main className="product-information">
      <div className="flex flex-col gap-6">
        <Header
          title="Buat video kamu sekarang"
          desc="Buat video produk kamu sekarang dalam hitungan menit!"
        />
        <VideoSelection />
        <ProductInformation />
        <ProductMedia />
      </div>
      <Button
        text="Buat video"
        icon="/images/logo/coin.png"
        className="main-button"
      />
    </main>
  );
};

export default DashboardPage;
