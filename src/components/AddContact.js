import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddContact = (props) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("please enter field");
      return;
    }
    props.onContactHandler({ name, email });
    setName("");
    setEmail("");
    history.push("/");
  };

  return (
    <div className='ui main' style={{ marginTop: "5rem" }}>
      <h2>Add Contact</h2>
      <form className='ui form' onSubmit={handleSubmit}>
        <div className='field'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className='field'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button className='ui button blue'>Add</button>
      </form>
    </div>
  );
};
