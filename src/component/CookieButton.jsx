import React from "react";

export const CookieButton = (props) => {
  return (
    <>
      <button id={props.id} onClick={props.handleClick}>
        {props.tag}
      </button>
    </>
  );
};
