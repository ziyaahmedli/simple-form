import React from "react";
import Header from "./Components/Header";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";


function App() {
  const [contacts, updateContacts] = React.useState([]);

  const addContact = (contactInfo) => {
    updateContacts([...contacts, contactInfo]);
  };
  console.log(contacts)

  return(
    <div>
      <Header/>
      <div className="p-3">
        <ContactForm 
          addContact = {addContact}
        />
        
        <ContactList 
          contacts= {contacts}
        />
      </div>
    </div>
  )
}

export default App;
