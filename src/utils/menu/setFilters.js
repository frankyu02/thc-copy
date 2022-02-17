import React from 'react';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import queryString from 'query-string'

const setFilterReplace = (filter, value, location) => {
    console.log("[DCV1: QUERY PARAM DEBUG]: setFilersReplace() location", location)
    if (location?.search){
        const parsedSearch = queryString.parse(location.search);
        console.log("[DCV1: QUERY PARAM DEBUG]: setFilersReplace() parsed(location.search)", 
        parsedSearch)
        parsedSearch[filter] = value
        const newNav = queryString.stringify(parsedSearch);
        navigate("?"+newNav);
    }else {
        var tempSearchObj = {};
        tempSearchObj[filter] = value;
        navigate("?" + queryString.stringify(tempSearchObj))
    }
}


const setFilterPush = (filter, value, location) => {
    console.log("[DCV1: QUERY PARAM DEBUG]: setFilersPush() location", location)
    if (location?.search){
        const parsedSearch = queryString.parse(location.search);
        console.log("[DCV1: QUERY PARAM DEBUG]: setFilersPush() parsed(location.search)", 
        parsedSearch)
        
        
    }else {
        console.log("[DCV1: QUERY PARAM DEBUG]: setFilersPush() ERROR - LOCATION.SEARCH NOT AVAILABLE")
    }
}

const setCategory = (value, location) => {
    console.log("[DCV1: QUERY PARAM DEBUG]: setFilers() setCategory")
    setFilterReplace('category', value, location)
}

const setSubcategory = (value, location) => {
    console.log("[DCV1: QUERY PARAM DEBUG]: setFilers() setSubcategory")
    setFilterReplace('subcategory', value, location)
}

const setEffects = (arr, value, location, remove=false) => {
    console.log("[DCV1: QUERY PARAM DEBUG]: setFilters() setEffects")
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