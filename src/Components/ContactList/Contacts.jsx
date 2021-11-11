import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import classes from "./Contacts.module.css";
import Profile from "../../Images/Profile.png";
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
export default function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullName: "Anne Shirley",
      email: "anneshirley@gmail.com",
      id: 1,
    },
    {
      fullName: "Diana Barry",
      email: "dianabarry@gmail.com",
      id: 2,
    },
    {
      fullName: "Gilbert Blythe",
      email: "gilbertblythe@gmail.com",
      id: 3,
    },
    {
      fullName: "Marilla Cuthbert",
      email: "marillacuthbert@gmail.com",
      id: 4,
    },
    {
      fullName: "Matthew Cuthbert",
      email: "matthewcuthbert@gmail.com",
      id: 5,
    },
    {
      fullName: "Ruby Gillis",
      email: "rubbygillis@gmail.com",
      id: 6,
    },
  ]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const addNewPost = () => {
    const newContact = {
      fullName,
      email,
      id: Date.now(),
    };
    setContacts([...contacts, newContact]);
    setFullName("");
    setEmail("");
    setModalActive(false);
  };
  const removeContact = (contact) => {
    setContacts(contacts.filter((user) => user.id !== contact.id));
  };
  const [searchContact, setSearchContacts] = useState("");
  const [selectedSort, setSelectedSort] = useState(null);
  const sortContacts = (type) => {
    setSelectedSort(type);
    setContacts([...contacts].sort((a, b) => a[type].localeCompare(b[type])));
  };
  return (
    <div className={classes.contacts}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2>Contact List</h2>
        </div>
        <div>
          <Button onClick={() => setModalActive(true)}>Add Contact</Button>
        </div>
      </div>
      <div className={classes.searchArea}>
        <Input
          type="text"
          placeholder="Search..."
          onChange={(event) => setSearchContacts(event.target.value)}
        />
      </div>
      <div>
        {contacts.length === 0 ? (
          <p className={classes.countOfContacts}>Добавьте первый контакт</p>
        ) : (
          <p className={classes.countOfContacts}>
            Количество контактов {contacts.length}
          </p>
        )}
      </div>
      <div>
        <Select
          defaultOption="Отсортировать по"
          options={[
            {
              value: "fullName",
              name: "Сортировка по имени",
            },
            {
              value: "email",
              name: "По Email",
            },
          ]}
          value={selectedSort}
          onChange={sortContacts}
        />
      </div>
      <div>
        {contacts
          .filter((user) => {
            if (searchContact === "") {
              return user;
            } else if (
              user.fullName
                .toLowerCase()
                .includes(searchContact.toLowerCase()) ||
              user.email.toLowerCase().includes(searchContact.toLowerCase())
            ) {
              return user;
            }
          })
          .map((contact) => {
            return (
              <div className={classes.contactsList} key={contact.id}>
                <div className={classes.profile}>
                  <div>
                    <img src={Profile} alt="Profile" />
                  </div>
                  <div className={classes.profileDescription}>
                    <Link
                      to={`/ContactProfile/${contact.fullName}/${contact.email}`}
                    >
                      <h3>{contact.fullName}</h3>
                      <p>{contact.email}</p>
                    </Link>
                  </div>
                </div>
                <div>
                  <Button onClick={() => removeContact(contact)}>Delete</Button>
                </div>
              </div>
            );
          })}
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <h3 style={{ textAlign: "center", fontSize: "30px", margin: "45px 0" }}>
          Add new contact
        </h3>
        <input
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Type name here"
          className={classes.modalInput}
        />
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Type email here"
          className={classes.modalInput}
        />
        <Button onClick={addNewPost}>Add Contact</Button>
      </Modal>
    </div>
  );
}
