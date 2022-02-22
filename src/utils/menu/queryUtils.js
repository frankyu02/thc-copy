const createVariablesObj = 
({category, subcategory, effects, strainType, retailerId, 
    potencyCbd, potencyThc, brand, weights, limit, offset, sortDirection, sort,
    pageLimit, pageOffset, onSale, search}) => {
    var variables = {};

    //Retailer Id
    if (retailerId){variables["retailerId"] = retailerId}

    //Menu Selection type (Staff Pick, Special, Custom)
    if(onSale){variables["menuSection"] = "SPECIALS"}

    //Filters
    if (category){variables["category"] = category}
    if (subcategory){variables["subcategory"] = subcategory}
    if (effects){variables["effects"] = effects}
    if (weights){variables["weights"] = weights}
    if (brand){variables["brandId"] = brand}
    if (strainType){variables["strainType"] = strainType}
    if (potencyThc){variables["potencyThc"] = potencyThc}
    if (potencyCbd){variables["potencyCbd"] = potencyCbd}
    //Search
    if (search){variables["search"] = search}

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