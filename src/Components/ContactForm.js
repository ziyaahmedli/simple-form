import React from "react";

const ContactForm = (props) => {
  const { contacts, setContacts } = props;


  const handleChange = (e) => {
    setContacts((prevContact) => ({
      ...prevContact,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    contacts.name = "";
    contacts.mail = "";
    console.log(contacts.name, contacts.mail)
  };


  return (
    <div>
      <form className="">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            class="form-control"
            value={contacts.name}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Mail
          </label>
          <input
            type="email"
            name="mail"
            value={contacts.mail}
            class="form-control"
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Add
        </button>
      </form>

      <hr className="border border-dark border-1" />
    </div>
  );
};

export default ContactForm;
