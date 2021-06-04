import React from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "./ContactCard";

export const ContactList = (props) => {
  console.log(props);
  // const contacts = [
  //   {
  //     id: 1,
  //     name: "sa",
  //     email: "sa@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     name: "sas",
  //     email: "sas@gmail.com",
  //   },
  // ];

  const removeElment = (id) => {
    props.onDeleteContact(id);
  };
  const termSearchChange = (e) => {
    props.termSearch(e.target.value);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        delHandler={removeElment}
      />
    );
  });

  return (
    <div className='main'>
      <h2 style={{ marginTop: "3rem" }}>
        {" "}
        <Link to='/add'>
          <button
            style={{ marginBottom: "3rem" }}
            className='ui blue button right'>
            Add Contact
          </button>
        </Link>
        Contact List
      </h2>
      <div className='ui category search'>
        <div className='ui icon input'>
          <input
            className='prompt'
            type='text'
            name='name'
            value={props.term}
            onChange={termSearchChange}
            placeholder='Search ...'
          />
          <i className='search icon'></i>
        </div>
        <div className='results'></div>
      </div>
      <div className='ui celled list'>{renderContactList}</div>
    </div>
  );
};
