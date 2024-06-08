import React, { FC } from "react";
const logo = require("../../images/Logo.jpg");
const FormContainer = (props: any) => {
  return (
    <div className="w-screen h-screen grid grid-rows-3 md:grid-cols-2">
      <div className="md:col-span-1 md:row-span-3 h-full bg-white row-span-1">
        <img
          src={logo}
          className=" object-contain object-center w-full h-full"
        />
      </div>
      <div className="md:col-span-1 md:row-span-3 h-full bg-sky-200 flex items-center justify-center row-span-2">
        {props.children}
      </div>
    </div>
  );
};

export default FormContainer;
