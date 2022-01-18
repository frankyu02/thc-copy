import * as React from "react";
import { HeaderMenu } from "../components/header/HeaderMenu";
import {Footer} from '../components/footer/Footer';
import Layout from "../components/layout/Layout";
import {EducationHero} from "../components/global-component/education-hero/EducationHero";
import {graphql, useStaticQuery} from "gatsby";

const EducationPage = () => {

    const headingText = 'How to Judge the Quality of Cannabis';
    const data = 'JANUARY 28, 2021';

    const seo = {
        title: 'Education',
        description: 'Education Description'
    }

    return (
        <>
            <Layout seo={seo}>
                <HeaderMenu/>
                <EducationHero title={headingText} data={data}/>
                <Footer/>
            </Layout>
        </>
    )
}

export default EducationPage