const fs = require("fs");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

function listContacts() {
  try {
    const data = fs.readFile(contactsPath, "utf8");
    const result = JSON.parse(data);
    console.table(result);
  } catch (error) {
    console.error(error);
  }
}

function getContactById(contactId) {
  try {
    const data = fs.readFile(contactsPath, "utf8");
    const result = JSON.parse(data);

    const foundContact = result.find((contact) => contact.id === contactId);
    console.log(foundContact);
  } catch (error) {
    console.error(error);
  }
}

function removeContact(contactId) {
  try {
    const data = fs.readFile(contactsPath, "utf8");
    const result = JSON.parse(data);

    const removedContact = result.filter((contact) => contact.id !== contactId);
    console.log(removedContact);
  } catch (error) {
    console.log(error);
  }
}

function addContact(name, email, phone) {
  const data = fs.readFile(contactsPath, "utf8");
  const result = JSON.parse(data);

  const newContact = {
    id: newContact.length.toString(),
    name,
    email,
    phone,
  };
  result.push(newContact);

  fs.writeFile(contactsPath, JSON.stringify(result), "utf8");
  console.table(result);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
