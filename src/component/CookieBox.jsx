import React from "react";
import axios from "axios";
import { CookieButton as Button } from "./CookieButton";

export const CookieBox = () => {
  const addCookie = async (e) => {
    try {
      const response = await axios.get("http://localhost:8000/addCookie", {
        withCredentials: true,
      });
      console.log(response);
      window.alert("Cookie added");
    } catch (error) {
      console.log(`error from react while adding cookie: ${error}`);
      window.alert("Error");
    }
  };
  const deleteCookie = async (e) => {
    try {
      const response = await axios.get("http://localhost:8000/deleteCookie", {
        withCredentials: true,
      });
      console.log(response);
      window.alert("Cookie deleted");
    } catch (error) {
      console.log(`error from react while deleting cookie: ${error}`);
      window.alert("Error");
    }
  };
  return (
    <>
      <div className="main">
        <div className="cookie-btn-container flex-row-center">
          <Button id="add" tag="Create Cookie" handleClick={addCookie}></Button>
          <Button
            id="delete"
            tag="Delete Cookie"
            handleClick={deleteCookie}
          ></Button>
        </div>
      </div>
    </>
  );
};
