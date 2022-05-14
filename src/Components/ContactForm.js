import React from "react";

const ContactForm = (props) => {
  const [contactInfo, setContactInfo] = React.useState({
    userName: '',
    mail: ''
  })

  const handleChange = (e)=>{
    const {name, value} = e.target
    setContactInfo(prevContact => ({...prevContact, [name]: value}))
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(contactInfo.userName==="" && contactInfo.mail==="") alert("Any Field is empty")
    
    else{
    props.addContact(contactInfo)
    setContactInfo({userName: "", mail: ""})
    }
  }

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">
            Name
          </label>
          <input
            type="text"
            name="userName"
            class="form-control"
            value={contactInfo.userName}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">
            Mail
          </label>
          <input
            type="email"
            name="mail"
            value={contactInfo.mail}
            class="form-control"
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="btn btn-primary" >
          Add
        </button>
      </form>

      <hr className="border border-dark border-1" />
    </div>
  );
};

export default ContactForm;
