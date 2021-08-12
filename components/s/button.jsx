import React from "react";
import style from "../../styles/App.module.css";

export const Button = ({ text, event }) => {
  return (
    <div className="my-2  ">
      <button 
        type="submit"
        onClick={event}
        className={`group relative 2xl:w-96 xl:w-96 sm:w-80 lg:w-80 md:w-96 w-72  flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none  focus:ring-offset-2  ${style.btn}`}
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
        {text}
      </button>
    </div>
  );
};

export const ButtonIcon = ({ text, event, icon }) => {
   return (
    <div
      type=""
      onClick={event}
      className={ `mx-1 mb-1 flex items-content-left group  w-38 rounded-md cursor-pointer p-2 ${style.iconButton}`}
    >
      {icon}
      <div className="font-bold text-xs mx-2">{text}</div>
    </div>
  );
};

export const DefaultButton = (props) => {
  return (
    <button
      onClick={props.event}
      className={style.defaultButtonStyle + " cursor-pointer  " + props.design}
    >
      {props.text}{props.icon}
    </button>
  );
};

DefaultButton.defaultProps = {
  icon: ""
}
