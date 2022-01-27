import React, { useContext } from "react";
import { ContentStyles } from './Content.styled';
import { SubscribeForm } from '../../ui/forms/subscribe/SubscribeForm';
import { PostContentContext } from "../../../contexts/post-content";


export const Content = () => {
  const __CONTENT = useContext(PostContentContext);

  return (
    <ContentStyles className="content">
      <div dangerouslySetInnerHTML={{ __html: __CONTENT }}/>
      <SubscribeForm/>
    </ContentStyles>
  )
}