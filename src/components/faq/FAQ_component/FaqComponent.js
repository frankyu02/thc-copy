import React, { useCallback, useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import FAQItem from "./FAQItems";
import { TrueBackground,Background, Wrapper } from "./FAQStyles";
import { Fade } from "react-awesome-reveal";
export default function FAQComponent(){
    const data = useStaticQuery(graphql`
        query{
            wpPage(title: {eq: "Faq"}) {
            faq {
                faqAccordion {
                    faqAccordionItem {
                    faqAccordionItemAnswer
                    faqAccordionItemQuestion
                        }
                    }
                }
            }
        }   
    `)
    const faqData = data?.wpPage?.faq?.faqAccordion;

    return(
        <TrueBackground>
        <div className="container">
            <Background>
            <Wrapper>
                {faqData?.faqAccordionItem.map((question, index) => {
                    return(
                        <Fade direction="right">
                            <FAQItem key={index} data={{question}} />
                        </Fade>
                    )
                })}
            </Wrapper>
            </Background>
        </div>
        </TrueBackground>
    )
}