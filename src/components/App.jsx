 import React from "react";
 import Card from "./Card";
 import contacts from "../contacts";

function App() {

  function createCards(contact){
    return <Card 
                 id = {contact.id}
                 key = {contact.name}
                 name = {contact.name}
                 img = {contact.imgURL}
                 tel = {contact.phone}
                 email = {contact.email}
       />
  
  }

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCards)}
    </div>

  );

}

export default App;
