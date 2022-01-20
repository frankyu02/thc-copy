import * as React from "react";
import { HeaderMenu } from "../components/header/HeaderMenu";
import { HeroHome } from "../components/home/Hero";
import {Legendary} from '../components/home/legendary/Legendary';
import {ThcTv} from '../components/home/thctv/ThcTv';
import {CategorySection} from '../components/home/category-section/CategorySection';
import {Brands} from '../components/home/brands/Brands';
import { SettingStandart } from '../components/home/setting_standart/SettingStandart';
import {BlogBanner} from '../components/home/blog-banner/BlogBanner';
import {Footer} from '../components/footer/Footer';
import {ShopLink} from '../components/ui/shop_link/ShopLink';
import Layout from "../components/layout/Layout";

import DoublePageLink from "../components/home/doublePageLink/doublePageLink";

const HomePage = () => {

  const seo = {
    title: 'Home Title',
    description: 'Home Description'
  }

  return (
    <>
      <DoublePageLink />
      <Layout seo={seo}>
        <HeaderMenu/>
        <HeroHome/>
        <Legendary/>
        <CategorySection/>
        <ThcTv/>
        <BlogBanner/>
        <SettingStandart/>
        <Brands/>
        <Footer/>
        <ShopLink/>
      </Layout>
    </>
  )
}

export default HomePage;