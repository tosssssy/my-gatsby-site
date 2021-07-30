import React from "react";

export const Button = (props) =>{
  const { color, children } = props;

  return(
    <>
      <button className="border-2 p-4 lg:p-16 rounded-full hover:text-white" style={color}>{children}</button>
    </>
  )
}