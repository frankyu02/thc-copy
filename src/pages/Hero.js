import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"

const HeroStyle = styled.div`
    * {
        font-style: none;
    }
    .info {
        margin-left: 20px;
        color: #612C8F;
        font-size: 15px;
    }
    h1 {
        margin-left: 300px;
    }
`;

const Heropage = () => (
    <HeroStyle>
        <div class="info">
            <p>6416 MAIN STREET</p>
            <p>VANCOUVER, BC</p>
            <p>V5W 2V4</p>
            <br />
            <p>OPEN 10AM-11PM</p>
            <p>365 DAYS A YEAR</p>
        </div>
        <h1>THC CANADA</h1>
        <StaticImage src="../images/rectangle.png" alt="A picture of the store" />
        <h3>CANADA'S MOST <i>LEGENDARY</i> CANNABIS STORE</h3>
        <a href="" target="_parent"><button>ORDER CANNABIS ONLINE</button></a>
        <Link to="/">Go back to the homepage</Link>
    </HeroStyle>
)

export default Heropage;