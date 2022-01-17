import * as React from "react";
import { HeroHome } from "../components/home/Hero";
import {Legendary} from '../components/home/legendary/Legendary';
import {ThcTv} from '../components/home/thctv/ThcTv';
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
        <ThcTv/>
      </Layout>
    </>
  )
}

export default HomePage;
