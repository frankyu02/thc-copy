import * as React from "react";
import { HeroHome } from "../components/home/Hero";
import {Legendary} from '../components/home/legendary/Legendary';
import {ThcTv} from '../components/home/thctv/ThcTv';
import {CategorySection} from '../components/home/category-section/CategorySection';
import {Brands} from '../components/home/brands/Brands';
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
        <Legendary/>
        <CategorySection/>
        <ThcTv/>
        <Brands/>
      </Layout>
    </>
  )
}

export default HomePage;
