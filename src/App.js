import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddContact } from "./components/AddContact";
import { ContactDetails } from "./components/ContactDetails";
import { ContactList } from "./components/ContactList";
import { Header } from "./components/Header";

function App() {
  const [contacts, setContacts] = useState([]);
  const [term, setTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const LocalStoragekey = "contactDetails";

  const contactHandler = (contact) => {
    setContacts([...contacts, { id: Date.now().toString(), ...contact }]);
  };
  const deleteContact = (id) => {
    const delContact = contacts.filter((contact) => contact.id !== id);
    setContacts(delContact);
  };
  //search
  const termSearch = (e) => {
    setTerm(e);
    if (e !== "") {
      const newSearchFilter = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(e.toLowerCase());
      });
      setSearchResult(newSearchFilter);
      // setTerm("");
    } else {
      setSearchResult(contacts);
    }
  };
  //retrive contact from LS
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LocalStoragekey));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  //set contact to LS
  useEffect(() => {
    localStorage.setItem(LocalStoragekey, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
            path='/'
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={term.length < 1 ? contacts : searchResult}
                onDeleteContact={deleteContact}
                term={term}
                termSearch={termSearch}
              />
            )}
          />
          <Route
            path='/add'
            exact
            render={(props) => (
              <AddContact {...props} onContactHandler={contactHandler} />
            )}
          />
          <Route path='/contact/:id' component={ContactDetails} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
