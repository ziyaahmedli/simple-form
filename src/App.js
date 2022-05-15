import React from "react";
import Header from "./Components/Header";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [contacts, updateContacts] = React.useState([]);

  const addContact = (contactInfo) => {
    updateContacts([...contacts,{id: uuidv4(), ...contactInfo}]);
  };
  console.log(contacts)

  const removeContact =(id) =>{
    const newList = contacts.filter(contact => {
      return contact.id != id
    })
    updateContacts(newList)
    
  }

  return(
    <div>
      <Header/>
      <div className="p-3">
        <ContactForm 
          addContact = {addContact}
        />
        
        <ContactList 
          contacts= {contacts}
          getContactId = {removeContact}
        />
      </div>
    </div>
  )
}

export default App;
