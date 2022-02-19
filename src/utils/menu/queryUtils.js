const createVariablesObj = 
({category, subcategory, effects, strainTypes, retailerId, 
    potencyCbd, potencyThc, weights, limit, offset, sortDirection, sort}) => {
    var variables = {};
    
    if (retailerId){
        variables["retailerId"] = retailerId
    }
    if (category){
        variables["category"] = category
    }
    if (subcategory){
        variables["subcategory"] = subcategory
    }
    if (effects){
        variables["effects"] = effects
    }
    if (potencyThc){
        variables["potencyThc"] = potencyThc
    }

    return variables;
}

export {createVariablesObj}