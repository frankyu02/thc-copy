import * as React from "react";
import { HeaderMenu } from "../components/header/HeaderMenu";
import {Footer} from '../components/footer/Footer';
import Layout from "../components/layout/Layout";
import {DoubleBanner} from "../components/article/double_banner/DoubleBanner";
import {ShopLink} from "../components/ui/shop_link/ShopLink";
import {LargeBanner} from "../components/global_component/large_banner/LargeBanner";

const Article = () => {
    const seo = {
        title: 'Article',
        description: 'Article Description'
    }

    return (
        <>
            <Layout seo={seo}>
                <HeaderMenu/>
                <LargeBanner/>
                <DoubleBanner/>
                <Footer/>
                <ShopLink/>
            </Layout>
        </>
    )
}

export default Article