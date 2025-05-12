// Add contact modal

const modalBtn = document.querySelector(".modalBtn");
const contactContainer = document.querySelector(".modal-overlay");
const closeContactBtn = document.querySelector(".close-btn");
const  alertInfo = document.querySelector('.alert-text h3')

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
  
  if(!nameOfContact.value ||  addressOfContact.value ||  contactNumber.value ||  secondLine.value){
    alertInfo.classList.add('danger')
        alertInfo.classList.remove('success')
        alertInfo.textContent = "Input cannot be empty , please provide an input, Thanks!"
        dangerAlert(alertInfo)
  }
  if(nameOfContact.value ||  addressOfContact.value ||  contactNumber.value ||  secondLine.value){
    createContact(
        addContact(
          nameOfContact.value,
          addressOfContact.value,
          contactNumber.value,
          secondLine.value,
        )
      );

      alertInfo.classList.remove('danger')
      alertInfo.classList.add('success')
      alertInfo.textContent = "Success!"
  
      successAlert(alertInfo)
      timeOutModal()
  }
  
 

 
 
  nameOfContact.value = "";
  addressOfContact.value = "";
  contactNumber.value = ""
  secondLine.value = "";
});



const dangerAlert = (alertInfo) => {
    setTimeout(() => {
        alertInfo.textContent = ""
        alertInfo.classList.remove('danger')
       }, 3000);
}

const successAlert = (alertInfo) => {
    setTimeout(() => {
        alertInfo.textContent = ""
        alertInfo.classList.remove('success')
       }, 3000)
}

const timeOutModal = () =>{
    setTimeout(() => {
        contactContainer.classList.remove("open-modal"); 
       }, 1000)
}