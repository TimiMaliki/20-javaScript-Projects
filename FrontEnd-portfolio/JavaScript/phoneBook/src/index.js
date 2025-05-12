// Add contact modal

const modalBtn = document.querySelector(".modalBtn");
const contactContainer = document.querySelector(".modal-overlay");
const closeContactBtn = document.querySelector(".close-btn");
const alertInfo = document.querySelector(".alert-text h3");

modalBtn.addEventListener("click", () => {
  contactContainer.classList.toggle("open-modal");
});

closeContactBtn.addEventListener("click", () => {
  contactContainer.classList.remove("open-modal");
});

const form = document.getElementById("contactForm");
const contactNumber = document.getElementById("number");
const nameOfContact = document.getElementById("name");
const addressOfContact = document.getElementById("address");
const secondLine = document.getElementById("secondline");
const contactWrapper = document.querySelector(".contact-container");
const contactDom = document.querySelector(".contacts");

const contact = JSON.parse(localStorage.getItem("contact")) || [];

// CREATING CONTACTS

const createContact = ({ person, address, line, otherLine }) => {
  const contact = document.createElement("div");
  contact.classList.add("contacts");

  const contact__Info = document.createElement("div");
  contact__Info.classList.add("flex");

  const info = document.createElement("div");
  info.classList.add("flex");

  const user__Name = document.createElement("div");
  user__Name.classList.add("user");

  const nameH3 = document.createElement("h3");
  nameH3.innerText = "Name";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("readonly", "readonly");
  nameInput.classList.add("inputEdit");
  nameInput.placeholder = person;

  user__Name.append(nameH3, nameInput);

  const user__Address = document.createElement("div");
  user__Address.classList.add("address");

  const addressH3 = document.createElement("h3");
  addressH3.innerText = "Address";
  const addressInput = document.createElement("input");
  addressInput.setAttribute("readonly", "readonly");
  addressInput.classList.add("inputEdit");
  addressInput.placeholder = address;

  user__Address.append(addressH3, addressInput);

  const user__MainLine = document.createElement("div");
  user__MainLine.classList.add("mainLine");

  const mainLineH3 = document.createElement("h3");
  mainLineH3.innerText = "Phone Number";
  const mainLineInput = document.createElement("input");
  mainLineInput.setAttribute("readonly", "readonly");
  mainLineInput.classList.add("inputEdit");
  mainLineInput.placeholder = line;

  user__MainLine.append(mainLineH3, mainLineInput);

  const alt__Line = document.createElement("div");
  user__MainLine.classList.add("mainLine");

  const altLineH3 = document.createElement("h3");
  altLineH3.innerText = "Other Line";
  const altLineInput = document.createElement("input");
  altLineInput.setAttribute("readonly", "readonly");
  altLineInput.classList.add("inputEdit");
  altLineInput.placeholder = otherLine;

  alt__Line.append(altLineH3, altLineInput);
  info.append(user__Name, user__Address, user__MainLine, alt__Line);

  const icons = document.createElement('div')
icons.classList.add("icons")

  const userEdit = document.createElement("i");
  userEdit.classList.add("fas");
  userEdit.classList.add("fa-user-edit");
  userEdit.classList.add("editBtn");

  const saveEdit = document.createElement("i");
  saveEdit.classList.add("fas");
  saveEdit.classList.add("fa-save");
  saveEdit.classList.add("saveBtn");

   icons.append(userEdit , saveEdit)

  contact__Info.append(info, icons );

  contact.appendChild(contact__Info);

  contactWrapper.appendChild(contact);


  userEdit.addEventListener("click" , ()=>{
    if(userEdit.classList.contains("editBtn")){
        nameInput.removeAttribute("readonly", "readonly");
        addressInput.removeAttribute("readonly", "readonly");
        mainLineInput.removeAttribute("readonly", "readonly");
        altLineInput.removeAttribute("readonly", "readonly");
    }
  })

  saveEdit.addEventListener("click" , ()=>{
          if(saveEdit.classList.contains("saveBtn")){
            nameInput.setAttribute("readonly", "readonly");
                addressInput.setAttribute("readonly", "readonly");
                mainLineInput.setAttribute("readonly", "readonly");
                altLineInput.setAttribute("readonly", "readonly");
          }
  })
};

const addContact = (person, address, line, otherLine) => {
  contact.push({ person, address, line, otherLine });
  localStorage.setItem("contact", JSON.stringify(contact));
  return { person, address, line, otherLine };
};

contact.forEach(createContact);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !nameOfContact.value ||
    addressOfContact.value ||
    contactNumber.value ||
    secondLine.value
  ) {
    alertInfo.classList.add("danger");
    alertInfo.classList.remove("success");
    alertInfo.textContent =
      "Input cannot be empty , please provide an input, Thanks!";
    dangerAlert(alertInfo);
  }
  if (
    nameOfContact.value ||
    addressOfContact.value ||
    contactNumber.value ||
    secondLine.value
  ) {
    createContact(
      addContact(
        nameOfContact.value,
        addressOfContact.value,
        contactNumber.value,
        secondLine.value
      )
    );

    alertInfo.classList.remove("danger");
    alertInfo.classList.add("success");
    alertInfo.textContent = "Success!";

    successAlert(alertInfo);
    timeOutModal();
  }

  nameOfContact.value = "";
  addressOfContact.value = "";
  contactNumber.value = "";
  secondLine.value = "";
});

const dangerAlert = (alertInfo) => {
  setTimeout(() => {
    alertInfo.textContent = "";
    alertInfo.classList.remove("danger");
  }, 3000);
};

const successAlert = (alertInfo) => {
  setTimeout(() => {
    alertInfo.textContent = "";
    alertInfo.classList.remove("success");
  }, 3000);
};

const timeOutModal = () => {
  setTimeout(() => {
    contactContainer.classList.remove("open-modal");
  }, 1000);
};

// Adding Contact

// const createContact = ({ person, address, line, otherLine }) => {
//   const container = document.createElement("ul");

//   const contactName = document.createElement("li");
//   const contactAddress = document.createElement("li");
//   const personNumber = document.createElement("li");
//   const contactSecondLine = document.createElement("li");

//   container.classList.add("list-items");
//   contactName.classList.add("items");
//   contactAddress.classList.add("items");
//   personNumber.classList.add("items");
//   contactSecondLine.classList.add("items");

//   contactName.innerHTML = `Name : ${person}`;
//   contactAddress.innerHTML =`Name : ${address}`;
//   personNumber.innerHTML = `Phone Number : ${ line  >= 0 ? line : ""}`;
//   contactSecondLine.innerHTML = ` Other line : ${otherLine >= 0 ? otherLine : ""}` ;

//   container.append(
//     contactName,
//     contactAddress,
//     personNumber,
//     contactSecondLine
//   );

//   studentDom.appendChild(container);
// };
