import React, { useState,useRef } from "react";
<<<<<<< HEAD
import { primaryColor,primaryBg } from "../styles/App.module.css";
=======
import { primaryColor } from "../styles/App.module.css";
>>>>>>> 6b022236e440ed7b9e5c6ae7d83c35ea92df14a5
import { BiUser } from "react-icons/bi";
import PropTypes from "prop-types";
import { FaCamera } from "react-icons/fa";

export default function HeadSection({
  leader,
  follower,
  icon,
  showUploadPhoto,
  getPhoto
}) {
  const wrapperRef = useRef()
  const [userImage, setUserImage] = useState("/icons/user2.png")
  const fileInputChanged = (e) => {
    setUserImage(URL.createObjectURL(e.target.files[0]));
    getPhoto(e.target.files[0]);
  };
  return (
    <div className="flex justify-center w-full  md:w-9/12 my-4 flex-col text-gray-600">
      <h1
        className={
          primaryColor + " md:text-2xl w-full text-center text-lg font-semibold"
        }
      >
        {leader}
      </h1>
      <h1 className="text-center">{follower}</h1>
      {showUploadPhoto ? (
        <div className="w-full flex justify-center">
          <img
            src={userImage}
            alt="user icon"
<<<<<<< HEAD
            className="w-24 md:w-36 md:h-36 object-cover rounded-full h-24"
          />
          <div
            onClick={() => wrapperRef.current.click()}
            className={`cursor-pointer mt-14 md:mt-24 h-8 w-8 flex justify-center text-white items-center rounded-full -ml-5 md:-ml-7 ${primaryBg}`}
          >
            <FaCamera size="1.2rem"/>
=======
            className="w-24 rounded-full h-24"
          />
          <div
            onClick={() => wrapperRef.current.click()}
            className="cursor-pointer mt-14 -ml-3"
          >
            <FaCamera size="1.5rem" className={primaryColor} />
>>>>>>> 6b022236e440ed7b9e5c6ae7d83c35ea92df14a5
          </div>
          <form className="hidden">
            <input
              accept="image/gif, image/jpeg, image/png"
              type="file"
              onChange={fileInputChanged}
              ref={wrapperRef}
            />
          </form>
        </div>
      ) : (
        <span className="flex w-full justify-center">{icon}</span>
      )}
    </div>
  );
}

HeadSection.defaultProps = {
  icon: <BiUser size="3rem" />,
  leader: "Your head title",
  follower: "Your subTitle",
  showUploadPhoto: false,
  getPhoto: (e) => {
    e.target.files[0];
  },
};

HeadSection.propTypes = {
<<<<<<< HEAD
  icon: PropTypes.any,
=======
  icon: PropTypes.element,
>>>>>>> 6b022236e440ed7b9e5c6ae7d83c35ea92df14a5
  leader: PropTypes.string,
  follower: PropTypes.string,
  showUploadPhoto: PropTypes.bool,
  getPhoto: PropTypes.func,
};
