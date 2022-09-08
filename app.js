
const getInputValue = (id) => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = "";
    return inputValue
}

let myContacts = []

const saveContact = () => {
    const contactList = document.getElementById("contact-list");
    const li = document.createElement("li");
    const name = getInputValue("name");
    const email = getInputValue("email");
    const number = getInputValue("number");
    const contact = {name, email, number};
    const nameHead = document.createElement("h3");
    nameHead.innerText = name;
    const spanEmail = document.createElement("p");
    spanEmail.innerText = email;
    const spanNumber = document.createElement("p");
    spanNumber.innerText = number;
    li.appendChild(nameHead);
    li.appendChild(spanEmail);
    li.appendChild(spanNumber);
    contactList.appendChild(li);
    myContacts.push(contact)
    localStorage.setItem("myContacts", JSON.stringify(myContacts));
}