import React from "react";
import Layout from "../../components/layout/Layout";
import SectionOne from "./components/sectionOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionFive from "./components/sectionFive/SectionFive";
import Products from "./components/products/Products";

const Home = () => {
  return (
    <>
      <Layout>
        <SectionOne />
        <SectionTwo/>
        <SectionThree/>
        <SectionFive/>
        <Products/>
      </Layout>
    </>
  );
};

export default Home;
