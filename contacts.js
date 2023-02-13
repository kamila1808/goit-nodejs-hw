const { v4: uuidv4 } = require("uuid");

const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const result = JSON.parse(data);
    console.table(result);
  } catch (error) {
    console.error(error);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const result = JSON.parse(data);

    const foundContact = result.find((contact) => contact.id === contactId);
    console.table(foundContact);
  } catch (error) {
    console.error(error);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const result = JSON.parse(data);

    const removedContact = result.filter((contact) => contact.id !== contactId);
    console.table(removedContact);
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath, "utf8");
  const result = JSON.parse(data);
  const newContact = {
    id: uuidv4(),
    name,
    email,
    phone,
  };
  result.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(result), "utf8");
  console.table(result);
}


module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
