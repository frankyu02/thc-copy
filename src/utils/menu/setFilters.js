import React from 'react';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import queryString from 'query-string'

const setFilterReplace = (filter, value, location) => {
    if (location?.search){
        const parsedSearch = queryString.parse(location.search);
        parsedSearch[filter] = value
        const newNav = queryString.stringify(parsedSearch);
        navigate("?"+newNav);
    }else {
        var tempSearchObj = {};
        tempSearchObj[filter] = value;
        navigate("?" + queryString.stringify(tempSearchObj))
    }
}

const setCategory = (value, location) => {
    setFilterReplace('category', value, location)
}

const setSubcategory = (value, location) => {
    setFilterReplace('subcategory', value, location)
}

const setEffects = (arr, value, location, remove=false) => {
    if (remove){
        if(arr){
            arr.splice(arr.indexOf(value), 1);
            setFilterReplace('effects', arr, location)
        }
    }else{
        if(arr){
            arr.push(value);
            const arrNoDups = [...new Set(arr)] 
            setFilterReplace('effects', arrNoDups, location)
        } else{
            setFilterReplace('effects', [value], location)
        }
    }
}

export {setCategory, setSubcategory, setEffects}