import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    
    const renderContactList = props.contacts.map((contact)=>{
        const deleteContact = (e)=>{
            console.log(contact)
        }
        return (
            <ContactCard 
                contact={contact} 
                deleteContact = {deleteContact}
            />
        )
    })
  
    return (<div>{renderContactList}</div>)
    

}

export default ContactList