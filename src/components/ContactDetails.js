import React from "react";
import image from "../images/image.png";

export const ContactDetails = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div className='ui card centered'>
      <div className='medium image'>
        <img src={image} alt={name} />
      </div>
      <div className='content'>
        <div className='header'>{name}</div>
        <div className='meta'>
          <span className='date'>Joined in 2013</span>
        </div>
        <div className='description'>{email}</div>
      </div>
    </div>
  );
};
