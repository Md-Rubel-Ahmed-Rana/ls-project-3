
const getInputValue = (id) => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    return inputValue
}

let myContacts = []

const saveContact = () => {
    const name = getInputValue("name");
    const email = getInputValue("email");
    const number = getInputValue("number");
    const contact = {name, email, number};
    myContacts.push(contact)
    localStorage.setItem("myContacts", JSON.stringify(myContacts));
}