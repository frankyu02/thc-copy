import React, { useContext } from "react";
import { ContentStyles } from './Content.styled';
import { SubscribeForm } from '../../ui/forms/subscribe/SubscribeForm';
import { PostContentContext } from "../../../contexts/post-content";


export const Content = () => {
  const { content } = useContext(PostContentContext);

  return (
    <ContentStyles className="content">
      <div dangerouslySetInnerHTML={{ __html: content }}/>
      <SubscribeForm/>
    </ContentStyles>
  )
}