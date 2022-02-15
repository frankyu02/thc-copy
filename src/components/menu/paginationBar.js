import React from "react";
import styled from "styled-components";
import Pagination from 'rc-pagination';
import '../../../node_modules/rc-pagination/assets/index.css';

const Box = styled.div`
    margin-top: 30px;
`
const PaginationBar = ({goToPage, numberOfProducts, productsPerPage = 9}) => {

    return (
        <Box>
            <Pagination 
                onChange={goToPage}
                total={numberOfProducts} 
                defaultPageSize={productsPerPage}
            />
        </Box>
    )
}

export default PaginationBar;
