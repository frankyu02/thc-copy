import * as React from "react";
import { graphql, useStaticQuery} from "gatsby";
import { TitleSubtextStyled } from "./TitleSubtext.styled";

export const TitleSubtext = () => {
    const data = useStaticQuery(graphql`
        query {
            allWpPage(filter: {id: {eq: "cG9zdDo0MjE="}}) {
                nodes {
                    delivery {
                        deliveryDescription {
                            deliveryDescriptionTitle
                            deliveryDescriptionText
                        }
                    }
                }
            }
        }
    `)
    const title = data?.allWpPage?.nodes[0].delivery?.deliveryDescription?.deliveryDescriptionTitle;
    const text = data?.allWpPage?.nodes[0].delivery?.deliveryDescription?.deliveryDescriptionText;
    return (
        <TitleSubtextStyled>
            <div className="container">
                <h2>{title}</h2>
                <div className="content">
                    <p dangerouslySetInnerHTML={{ __html: text }}/>
                </div>
            </div>
        </TitleSubtextStyled>
    );
}
