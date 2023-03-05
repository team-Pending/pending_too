import React from "react";
import "./account.css";

const Edit = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
  };

  return (
    <div className="edit-modal">
      <h2>Edit</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="name" />
        <input type="text" id="category" placeholder="category" />
        <textarea type="text" id="description" placeholder="description" />
        <input className="editButton" type="button" value="Delete" />
        <input className="editButton" type="button" id="submit" value="Submit Changes" />
      </form>
    </div>
  );
};

export default Edit;
