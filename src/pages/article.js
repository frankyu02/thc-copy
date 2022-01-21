import * as React from "react";
import { HeaderMenu } from "../components/header/HeaderMenu";
import {Footer} from '../components/footer/Footer';
import Layout from "../components/layout/Layout";
import {DoubleBanner} from "../components/article/double_banner/DoubleBanner";

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
            </Layout>
        </>
    )
}

export default Article