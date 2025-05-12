// Add contact modal

const modalBtn = document.querySelector(".modalBtn");
const contactContainer = document.querySelector(".modal-overlay");
const closeContactBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", () => {
  contactContainer.classList.toggle("open-modal");
});

closeContactBtn.addEventListener("click", () => {
  contactContainer.classList.remove("open-modal");
});

// Adding Contact

const form = document.getElementById("contactForm");
const contactNumber = document.getElementById("number");
const nameOfContact = document.getElementById("name");
const addressOfContact = document.getElementById("address");
const secondLine = document.getElementById("secondline");
const studentDom = document.querySelector(".contacts");

const contact = JSON.parse(localStorage.getItem("contact")) || [];

const createContact = ({ person, address, line, otherLine }) => {
  const container = document.createElement("ul");

  const contactName = document.createElement("li");
  const contactAddress = document.createElement("li");
  const personNumber = document.createElement("li");
  const contactSecondLine = document.createElement("li");

  container.classList.add("list-items");
  contactName.classList.add("items");
  contactAddress.classList.add("items");
  personNumber.classList.add("items");
  contactSecondLine.classList.add("items");

  contactName.innerHTML = `Name : ${person}`;
  contactAddress.innerHTML =`Name : ${address}`;
  personNumber.innerHTML = `Phone Number : ${ line  >= 0 ? line : ""}`;
  contactSecondLine.innerHTML = ` Other line : ${otherLine >= 0 ? otherLine : ""}` ;

  container.append(
    contactName,
    contactAddress,
    personNumber,
    contactSecondLine
  );
     
  studentDom.appendChild(container);
};

const addContact = (person, address, line, otherLine) => {
  contact.push({ person, address, line, otherLine });
  localStorage.setItem("contact" , JSON.stringify(contact))
  return { person, address, line, otherLine };
};

contact.forEach(createContact);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  createContact(
    addContact(
      nameOfContact.value,
      addressOfContact.value,
      contactNumber.value,
      secondLine.value,
    )
  );

  nameOfContact.value = "";
  addressOfContact.value = "";
  contactNumber.value = ""
  secondLine.value = "";
});
