import styled from "styled-components";

const PaginationBar = (pageNext, pageBack, goToPage, numberOfProducts, productsPerPage = 9) => {
    const pageCount = Math.ceil(numberOfProducts / productsPerPage);
    
}

export default PaginationBar;
