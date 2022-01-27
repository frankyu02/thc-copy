import React from "react";
import { Content } from './content/Content';
import { SidebarContent } from './sidebar/sidebar';
import { ContentPlaceStyles } from './ContentPlace.styled';

export const ContentPlace = () => {
  
  return (
    <ContentPlaceStyles className="container">
      <SidebarContent/>
      <Content/>
    </ContentPlaceStyles>
  )
}