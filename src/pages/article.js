import * as React from "react";
import { HeaderMenu } from "../components/header/HeaderMenu";
import {Footer} from '../components/footer/Footer';
import Layout from "../components/layout/Layout";
import {DoubleBanner} from "../components/article/double_banner/DoubleBanner";
import {ShopLink} from "../components/ui/shop_link/ShopLink";
import {EducationHero} from "../components/global_component/education-hero/EducationHero";
import BlogPost from "../templates/Blog-post";


const Article = () => {
    const seo = {
        title: 'Article',
        description: 'Article Description'
    }
    const headingText = 'How to Judge the Quality of Cannabis';
    const data = 'JANUARY 28, 2021';
    const banner = '';


    console.log(1);


    return (
        <>
            <Layout seo={seo}>
                <BlogPost/>
                <HeaderMenu/>
                <EducationHero title={headingText} data={data} banner={banner}/>
                <DoubleBanner/>
                <Footer/>
                <ShopLink/>
            </Layout>
        </>
    )
}

export default Article