import React from 'react'

const ContactCard = (props) => {

    const {id, userName, mail} = props.contact;

  return (
    <div>
        <div className="d-flex justify-content-between align-items-center px-3">
            <div className='d-flex align-items-center'>
                <button className='border border-2'>
                    <i className='bi bi-person-fill'></i>
                </button>
                <div className='ms-3'>
                    <h3>{userName}</h3>
                    <h6>{mail}</h6>
                </div>
            </div>
            <button className="border border-danger" onClick={props.deleteContact}>
                <i className="bi bi-trash"></i>
            </button>
        </div>
        <hr/>
    </div>
  )
}

export default ContactCard