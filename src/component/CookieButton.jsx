import React from "react";

export const CookieButton = (props) => {

    return(
        <>
            <button onClick={props.handleClick}>{props.tag}</button>
        </>
    )
}