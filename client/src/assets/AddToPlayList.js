import React from "react";
import {useColorMode} from "../hooks/useColorMode"

export const AddToPlayList = () => {
  return (
    <>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        style={{color: useColorMode("black","white"),scale: "1.6",marginTop:"10px",marginRight:"8px"}}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 18H20M22 18H20M20 18V16M20 18V20"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 11L20 11"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 17L14 17"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 5L20 5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
