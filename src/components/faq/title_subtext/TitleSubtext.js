import * as React from "react";
import { graphql, useStaticQuery} from "gatsby";
import { TitleSubtextStyled } from "./TitleSubtext.styled";
import { Slide } from "react-awesome-reveal";
export const TitleSubtext = () => {
    const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDoyNjY="}}) {
                nodes {
                  faq {
                    faqAccordion {
                      faqAccordionTitle
                      faqAccordionText {
                        faqAccordionTextItem
                        fieldGroupName
                      }
                    }
                  }
                }
            }
        }
    `)
    const title = data?.allWpPage?.nodes[0].faq?.faqAccordion?.faqAccordionTitle;
    const text = data?.allWpPage?.nodes[0].faq?.faqAccordion?.faqAccordionText;
    return (
        <TitleSubtextStyled>
            <div className="container">
                <Slide cascade direction="right">
                    <h2>{title}</h2>
                    <div className="content">
                        {text?.map?.((item, key) => (
                            <p key={key}>{item?.faqAccordionTextItem}</p>
                        ))}
                    </div>
                </Slide>
            </div>
        </TitleSubtextStyled>
    );
}
