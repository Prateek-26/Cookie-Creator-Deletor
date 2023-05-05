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
    } catch (error) {
      console.log(`error from react while adding cookie: ${error}`);
    }
  };
  const deleteCookie = async (e) => {
    try {
      const response = await axios.get("http://localhost:8000/deleteCookie", {
        withCredentials: true,
      });
      console.log(response);
    } catch (error) {
      console.log(`error from react while deleting cookie: ${error}`);
    }
  };
  const value = 1234;
  return (
    <>
      <div className="main">
        <div className="cookie-btn-container">
          <Button tag="Create Cookie" handleClick={addCookie}></Button>
          <Button tag="Delete Cookie" handleClick={deleteCookie}></Button>
        </div>
      </div>
    </>
  );
};
