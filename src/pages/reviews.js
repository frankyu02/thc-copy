import * as React from "react";
import { HeroHome } from "../components/home/Hero";
import ClientReview from "../components/reviews/ClientReview/ClientReview";
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
        <ClientReview />
      </Layout>
    </>
  )
}

export default ReviewsPage;
