import * as React from "react";
import { HeaderMenu } from "../components/header/HeaderMenu";
import {Footer} from '../components/footer/Footer';
import Layout from "../components/layout/Layout";
import {DoubleBanner} from "../components/article/double_banner/DoubleBanner";
import {ShopLink} from "../components/ui/shop_link/ShopLink";

const Article = () => {
    const seo = {
        title: 'Article',
        description: 'Article Description'
    }

    return (
        <>
            <Layout seo={seo}>
                <HeaderMenu/>
                <DoubleBanner/>
                <Footer/>
                <ShopLink/>
            </Layout>
        </>
    )
}

export default Article