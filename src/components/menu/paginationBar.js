import React from "react";
import styled from "styled-components";

const PaginationBarStyles = styled.div`
    .bar{
        display: flex;
        margin-top: 30px;
        .arrow {
            margin-left: 10px;
            margin-right: 10px;
        }
        .block {
            margin-left: 10px;
            margin-right: 10px;
            border: 1px solid black;
        }
    }
`

// const PaginationBar = (pageNext, pageBack, goToPage, numberOfProducts, productsPerPage = 9) => {
//     const pageCount = Math.ceil(numberOfProducts / productsPerPage);
    
//     return (
//         <PaginationBarStyles>
//             <div className="bar">
//                 <div className="arrow" onClick={pageBack}></div>
//                 <div className="arrow" onClick={pageNext}></div>
//             </div>
//         </PaginationBarStyles>
//     )
// }

const PaginationBar = () => {
    return(
        <></>
    )
}

export default PaginationBar;
