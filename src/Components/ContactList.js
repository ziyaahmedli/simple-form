import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const deleteContactHandler = (id) =>{
        props.getContactId(id)
    }
    const renderContactList = props.contacts.map((contact)=>{

        return (
            <ContactCard 
                contact={contact} 
                clickHandler = {deleteContactHandler}
                key={contact.id}
            />
        )
    })
  
    return (<div>{renderContactList}</div>)
    

}

export default ContactList