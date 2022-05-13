import React from "react";
import Header from "./Components/Header";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";


function App() {
  const [contacts, setContacts] = React.useState([{name: "ziya", mail: "ziyaahmedli@mail.ru"}])
  console.log(contacts)


  return(
    <div>
      <Header/>
      <div className="p-3">
        <ContactForm 
          contacts= {contacts}
          setContacts = {setContacts}  
        />
        
        <ContactList contacts= {contacts}
        />
      </div>
    </div>
  )
}

export default App;
