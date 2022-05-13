import React from 'react'

const ContactCard = (props) => {

    const {id, name, mail} = props.contact;

  return (
    <div>
        <div className="d-flex justify-content-between align-items-center px-3">
            <div>
                <h3>{name}</h3>
                <h6>{mail}</h6>
            </div>
            <button className="border border-danger">
                <i className="bi bi-trash"></i>
            </button>
        </div>
        <hr/>
    </div>
  )
}

export default ContactCard