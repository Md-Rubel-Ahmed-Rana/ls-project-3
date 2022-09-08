
const getInputValue = (id) => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = "";
    return inputValue
}

let myContacts = []
const displayContactsUI = () => {
    const contactList = document.getElementById("contact-list");
    const li = document.createElement("li");
    const name = getInputValue("name");
    const email = getInputValue("email");
    const number = getInputValue("number");
    const contact = { name, email, number };
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

    return contactList
}

const saveContact = () => {
    const inputField = document.getElementById("name");
    if (inputField.value === "") {
        return
    }
    displayContactsUI();
    localStorage.setItem("myContacts", JSON.stringify(myContacts));
};

const getSavedContact = () => {
    const savedContacts = localStorage.getItem("myContacts");
    const contactList = document.getElementById("contact-list");
    if (savedContacts) {
        myContacts = JSON.parse(savedContacts);
        myContacts.forEach(contact => {
            const li = document.createElement("li");
            const nameHead = document.createElement("h3")
            nameHead.innerText = contact.name;

            const spanEmail = document.createElement("p");
            spanEmail.innerText = contact.email;

            const spanNumber = document.createElement("p");
            spanNumber.innerText = contact.number;

            li.appendChild(nameHead)
            li.appendChild(spanEmail)
            li.appendChild(spanNumber);

            contactList.appendChild(li);
        });
    }
}
getSavedContact();