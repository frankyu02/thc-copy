import * as React from "react";
import { HeroHome } from "../components/home/Hero";
import Layout from "../components/layout/Layout";

const ReviewsPage = () => {

    const seo = {
        title: 'Reviews Title',
        description: 'Reviews Description'
    }

    return (
        <>
            <Layout seo={seo}>
                <HeroHome/>
            </Layout>
        </>
    )
}

export default ReviewsPage;
