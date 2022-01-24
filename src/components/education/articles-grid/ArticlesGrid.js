import * as React from "react";
import { ArticlesGridStyles } from "./ArticlesGrid.styled";

export const ArticlesGrid = () => {
    
    const title = "What is CBD Oil?";
    const button = "Read more";
    const img = "www";

    return (
        <ArticlesGridStyles>
            <div className="container">
              <div className="article-wrap">
                <div className="article-item">
                  <div className="article-img">
                    <img src="/static/de678efaec14b60c18c417abc8880597/82da7/cards_join_bg_img_1.jpg" alt="article img" />
                  </div>
                  <h3>{title}</h3>
                  <a href="#" className="article-buttom">{button}
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.65306 16.3469L17 1M17 1V17M17 1H1" stroke="white" strokeWidth="2"/>
                    </svg>
                  </a>
                </div>

                <div className="article-item">
                  <div className="article-img">
                  <img src="/static/de678efaec14b60c18c417abc8880597/82da7/cards_join_bg_img_1.jpg" alt="article img" />
                  </div>
                  <h3>{title}</h3>
                  <a href="#" className="article-buttom">{button}
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.65306 16.3469L17 1M17 1V17M17 1H1" stroke="white" strokeWidth="2"/>
                    </svg>
                  </a>
                </div>

                <div className="article-item">
                  <div className="article-img">
                  <img src="/static/de678efaec14b60c18c417abc8880597/82da7/cards_join_bg_img_1.jpg" alt="article img" />
                  </div>
                  <h3>{title}</h3>
                  <a href="#" className="article-buttom">{button}
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.65306 16.3469L17 1M17 1V17M17 1H1" stroke="white" strokeWidth="2"/>
                    </svg>
                  </a>
                </div>

                <div className="article-item">
                  <div className="article-img">
                  <img src="/static/de678efaec14b60c18c417abc8880597/82da7/cards_join_bg_img_1.jpg" alt="article img" />
                  </div>
                  <h3>{title}</h3>
                  <a href="#" className="article-buttom">{button}
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.65306 16.3469L17 1M17 1V17M17 1H1" stroke="white" strokeWidth="2"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
        </ArticlesGridStyles>
    );
}
