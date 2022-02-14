import * as React from "react";
import { graphql, useStaticQuery} from "gatsby";
import { TitleSubtextStyled } from "./TitleSubtext.styled";
import { Fade } from "react-awesome-reveal";

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
                <Fade direction="left">
                <h2>{title}</h2>
                </Fade>
                <div className="content">
                    <p dangerouslySetInnerHTML={{ __html: text }}/>
                </div>
            </div>
        </TitleSubtextStyled>
    );
}
