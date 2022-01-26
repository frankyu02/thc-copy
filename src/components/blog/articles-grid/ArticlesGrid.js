import * as React from "react"
import { ArticlesGridStyles } from "./ArticlesGrid.styled"

export const ArticlesGrid = ({ titleArticle, buttonArticle, imgArticle, dataArticle, textArticle }) => {


  return (
    <ArticlesGridStyles>
      <div className="container">
        <div className="article-wrap">

          <div className="article-item">
            <div className="article-img">
              <img src={imgArticle} alt="article img" />
            </div>
            <div className="article-content">
              <h3>{titleArticle}</h3>
              <time>{dataArticle}</time>
              <a href="#" className="article-buttom article-buttom-mobile">{buttonArticle}
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.734694 18.2653L18 1M18 1V19M18 1H0" stroke="#612C8F" strokeWidth="2" />
                </svg>
              </a>
            </div>
            <div className="content-wrap">
              <p>{textArticle}</p>
              <a href="#" className="article-buttom article-buttom-desktop">{buttonArticle}
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.734694 18.2653L18 1M18 1V19M18 1H0" stroke="#612C8F" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="article-item">
            <div className="article-img">
              <img src={imgArticle} alt="article img" />
            </div>
            <div className="article-content">
              <h3>{titleArticle}</h3>
              <time>{dataArticle}</time>
              <a href="#" className="article-buttom article-buttom-mobile">{buttonArticle}
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.734694 18.2653L18 1M18 1V19M18 1H0" stroke="#612C8F" strokeWidth="2" />
                </svg>
              </a>
            </div>
            <div className="content-wrap">
              <p>{textArticle}</p>
              <a href="#" className="article-buttom article-buttom-desktop">{buttonArticle}
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.734694 18.2653L18 1M18 1V19M18 1H0" stroke="#612C8F" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="article-item">
            <div className="article-img">
              <img src={imgArticle} alt="article img" />
            </div>
            <div className="article-content">
              <h3>{titleArticle}</h3>
              <time>{dataArticle}</time>
              <a href="#" className="article-buttom article-buttom-mobile">{buttonArticle}
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.734694 18.2653L18 1M18 1V19M18 1H0" stroke="#612C8F" strokeWidth="2" />
                </svg>
              </a>
            </div>
            <div className="content-wrap">
              <p>{textArticle}</p>
              <a href="#" className="article-buttom article-buttom-desktop">{buttonArticle}
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.734694 18.2653L18 1M18 1V19M18 1H0" stroke="#612C8F" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="article-item">
            <div className="article-img">
              <img src={imgArticle} alt="article img" />
            </div>
            <div className="article-content">
              <h3>{titleArticle}</h3>
              <time>{dataArticle}</time>
              <a href="#" className="article-buttom article-buttom-mobile">{buttonArticle}
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.734694 18.2653L18 1M18 1V19M18 1H0" stroke="#612C8F" strokeWidth="2" />
                </svg>
              </a>
            </div>
            <div className="content-wrap">
              <p>{textArticle}</p>
              <a href="#" className="article-buttom article-buttom-desktop">{buttonArticle}
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.734694 18.2653L18 1M18 1V19M18 1H0" stroke="#612C8F" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </ArticlesGridStyles>
  )
}
