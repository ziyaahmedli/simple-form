import React from 'react'

const ContactForm = (props) => {
  const {contacts, setContacts} = props
  
  const handleChange = (e)=>{
    setContacts([e.target.value])
  }

  const addContact = (e)=>{
    e.preventDefault()
    console.log(contacts.name, contacts.mail)
    
  }


  return (
    <div>
      <form className=''>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Mail</label>
            <input type="email" class="form-control" id="exampleInputPassword1" onChange={handleChange}/>
          </div>
          <button type="submit" class="btn btn-primary" onClick={addContact}>Add</button>
      </form>

      <hr  className='border border-dark border-1'/>
    </div>
  
  )
}

export default ContactForm