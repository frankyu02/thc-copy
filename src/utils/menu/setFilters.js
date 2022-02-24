import React from 'react';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import queryString from 'query-string'


//~Bread n Butta~ Functions
const setFilterReplace = (filter, value, location, dependent) => {
    if (location?.search){
        const parsedSearch = queryString.parse(location.search);
        parsedSearch[filter] = value
        if (dependent){
            delete parsedSearch[dependent]
        }
        const newNav = queryString.stringify(parsedSearch);
        navigate("?"+newNav);
    }else {
        var tempSearchObj = {};
        tempSearchObj[filter] = value;
        navigate("?" + queryString.stringify(tempSearchObj))
    }
}

const removeFilter = (filter, location) => {
    if (location?.search){
        const parsedSearch = queryString.parse(location.search);
        delete parsedSearch[filter];
        const newNav = queryString.stringify(parsedSearch);
        navigate("?"+newNav);
    }
}

const removeAll = () => {
    navigate("?");
}

const multiValueFilterReplace = (filter, arr, value, location, remove) => {
    if (remove){
        if(arr){
            arr.splice(arr.indexOf(value), 1);
            setFilterReplace(filter, arr, location, null)
        }
    }else{
        if(arr){
            arr.push(value);
            const arrNoDups = [...new Set(arr)] 
            setFilterReplace(filter, arrNoDups, location, null)
        } else{
            setFilterReplace(filter, [value], location, null)
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
    console.log("rangerFormtter -> ", value)
    console.log("rangerFormtter -> str", JSON.stringify(value))
    return JSON.stringify(value);
}

//Filter Set Functions
///Single Value Filters
const setCategory = (value, location) => {
    setFilterReplace('category', value, location, "subcategory")
}

const setSubcategory = (value, location) => {
    setFilterReplace('subcategory', value, location, null)
}

const clearAllFilters = () => {
    removeAll();
}

const setBrand = (value, location) => {
    setFilterReplace('brand', value, location)
}

const setTHC = ({min, max, unit, clear, location}) => {
    console.log("setTHC, remove thc")
    if (clear){
        removeFilter("thc", location)
        return;
    }
    console.log("setTHC, min, max, unit", min, max, unit)
    const value = rangeValueFormatter(min, max, unit);
    setFilterReplace('thc', value, location)
}

const setCBD = ({min, max, unit, clear, location}) => {
    if (clear){
        removeFilter("thc", location)
        return;
    }
    const value = rangeValueFormatter(min, max, unit);
    setFilterReplace('cbd', value, location)
}

const setStrainType = (value, location) => {
    setFilterReplace('straintype', value, location)
}
////Pagination
const setPageNumber = (value, location) => {
    setFilterReplace('page', value, location)
}
////On Sale
const setOnSale = (value, location) => {
    setFilterReplace('onsale', value, null)
}
////Search 
const setSearch = (value, location) => {
    setFilterReplace('search', value, location)
}
////Sort
const setSort = (value, location) => {
    const jsonvalue = JSON.stringify(value);
    console.log("value---> setSort", value)
    setFilterReplace('sort', jsonvalue, location)
}
///Multi Value Filters
const setWeights = (arr, value, location, remove=false) => {
    multiValueFilterReplace('weights', arr, value, location, remove);
}

const setEffects = (arr, value, location, remove=false) => {
    multiValueFilterReplace('effects', arr, value, location, remove);
}

export {setCategory, setSubcategory, setEffects, setTHC, 
    setPageNumber, clearAllFilters, setOnSale, setStrainType,
    setWeights, setCBD, setBrand, setSearch, setSort}