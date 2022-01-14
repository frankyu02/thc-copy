import * as React from "react";
import { HeroHome } from "../components/home/Hero";
import Layout from "../components/layout/Layout";



const HomePage = () => {

  const seo = {
    title: 'Home Title',
    description: 'Home Description'
  }

  return (
    <>
      <Layout seo={seo}>
        <HeroHome/>
      </Layout>
    </>
  )
}

export default HomePage;
