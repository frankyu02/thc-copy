import React from "react";
import { useNoScroll } from "../../../hooks/useNoScroll";
import { LoaderStyles } from "../Loaders.styled";

export const LoaderDefault = () => {

  useNoScroll(true);

  return (
    <LoaderStyles>
      <div className="default"><div></div><div></div><div></div><div></div></div>
    </LoaderStyles>
  )
}