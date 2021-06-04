import React from "react";
import image from "../images/image.png";

export const ContactDetails = (props) => {
  const { id, name, email } = props.location.state.contact;
  return (
    <div className='ui card centered'>
      <div className='medium image'>
        <img src={image} />
      </div>
      <div className='content'>
        <a className='header'>{name}</a>
        <div className='meta'>
          <span className='date'>Joined in 2013</span>
        </div>
        <div className='description'>{email}</div>
      </div>
    </div>
  );
};
