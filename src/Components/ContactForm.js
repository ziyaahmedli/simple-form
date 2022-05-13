import React from 'react'

const ContactForm = (props) => {

  const {contacts, setContacts} = props

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setContacts(prevContact=>({...prevContact, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    contacts.nameg = ' '
  }

  console.log(contacts.name)

  return (
    <div>
      <form className=''>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" name='name' class="form-control" onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Mail</label>
            <input type="email" name='mail' class="form-control" id="exampleInputPassword1" onChange={handleChange} />
          </div>
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Add</button>
      </form>

      <hr  className='border border-dark border-1'/>
    </div>
  
  )
}

export default ContactForm