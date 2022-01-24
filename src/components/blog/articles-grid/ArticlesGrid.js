import * as React from "react";
import { ArticlesGridStyles } from "./ArticlesGrid.styled";

export const ArticlesGrid = () => {
    
    const title = "THC Percentage Isn’t Everything: The Entourage Effect";
    const button = "Read more";
    const img = "www";
    const data = "APRIL 8, 2021";
    const text = 'If you’re buying cannabis based solely on THC percentage, you’re missing out on some of the dankest products on the market.';

    return (
        <ArticlesGridStyles>
            <div className="container">
              <div className="article-wrap">

                <div className="article-item">
                  <div className="article-img">
                    <img src="/static/de678efaec14b60c18c417abc8880597/82da7/cards_join_bg_img_1.jpg" alt="article img" />
                  </div>
                  
                  <div className="content-wrap">
                    <h3>{title}</h3>
                    <time>{data}</time>
                    <a href="#" className="article-buttom">{button}
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.734694 18.2653L18 1M18 1V19M18 1H0" stroke="#612C8F" strokeWidth="2"/>
                      </svg>
                    </a>
                  </div>
                  <p>{text}</p>
                </div>
              </div>
            </div>
        </ArticlesGridStyles>
    );
}
