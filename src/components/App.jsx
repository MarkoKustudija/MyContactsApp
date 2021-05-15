 import React from "react";
 import Card from "./Card";
 import contacts from "../contacts";

function App(props) {

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
  
      <Card 
        name = {contacts[0].name}
        img = {contacts[0].imgURL}
        tel = {contacts[0].phone}
        email = {contacts[0].email}

      />

      <Card 
        name = {contacts[1].name}
        img = {contacts[1].imgURL}
        tel = {contacts[1].phone}
        email = {contacts[1].email}

      />

      <Card 
        name = "Chuck Noris"
        img = "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        tel = "+123 333 789"
        email = "c@norise.com"

      />

    </div>
  );

}

export default App;
