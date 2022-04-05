import React from "react";
import Reservation from "../../components/reservation";
import Footer from "../../components/footer";
import Header from "../../components/header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Reservation />
      <Footer />
    </>
  );
};

export default DefaultLayout;
