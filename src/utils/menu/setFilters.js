import React from 'react';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import queryString from 'query-string'


//~Bread n Butta~ Functions
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

const multiValueFilterReplace = (arr, value, location, remove) => {
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

//Formatting Functions
const rangeValueFormatter = (min, max, unit) => {
    var value = {
        min: min,
        max: max,
        unit: String(unit)
    }
    return JSON.stringify(value);
}

//Filter Set Functions
///Single Value Filters
const setCategory = (value, location) => {
    setFilterReplace('category', value, location)
}

const setSubcategory = (value, location) => {
    setFilterReplace('subcategory', value, location)
}

const setBrand = (value, location) => {
    setFilterReplace('brand', value, location)
}

const setTHC = (minvalue, maxvalue, unit, location) => {
    const value = rangeValueFormatter(minvalue, maxvalue, unit);
    setFilterReplace('thc', value, location)
}

const setCBD = (minvalue, maxvalue, unit, location) => {
    const value = rangeValueFormatter(minvalue, maxvalue, unit);
    setFilterReplace('cbd', value, location)
}

const setStrainType = (value, location) => {
    setFilterReplace('strain', value, location)
}
///Multi Value Filters
const setWeight = (arr, value, location, remove=false) => {
    multiValueFilterReplace(arr, value, location, remove);
}

const setEffects = (arr, value, location, remove=false) => {
    multiValueFilterReplace(arr, value, location, remove);
}

export {setCategory, setSubcategory, setEffects, setTHC}