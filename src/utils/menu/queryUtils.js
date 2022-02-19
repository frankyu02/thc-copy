const createVariablesObj = 
({category, subcategory, effects, strainTypes, retailerId, 
    potencyCbd, potencyThc, weights, limit, offset, sortDirection, sort,
    pageLimit, pageOffset}) => {
    var variables = {};
    
    //Retailer Id
    if (retailerId){variables["retailerId"] = retailerId}

    //Filters
    if (category){variables["category"] = category}
    if (subcategory){variables["subcategory"] = subcategory}
    if (effects){variables["effects"] = effects}
    if (potencyThc){variables["potencyThc"] = potencyThc}

    //Pagination
    if (pageLimit){
        variables["limit"] = limit;
    }else{
        variables["limit"] = 12;
    }
    if (offset){
        variables["offset"] = offset;
    }else{
        variables["offset"] = 0;
    }
    return variables;
}

export {createVariablesObj}