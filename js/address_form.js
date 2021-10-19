let contactObj = {};

document.addEventListener("DOMContentLoaded", (event) => {
  const name = document.getElementById("name");
  const nameError = document.querySelector(".text-error");
  name.addEventListener("input", () => {
    try {
      validateName(name.value);
      nameError.textContent = "";
    } catch (e) {
      nameError.textContent = e;
    }
  });

  const phone = document.getElementById("tel");
  const phoneError = document.querySelector(".phone-error");
  phone.addEventListener("input", () => {
    try {
      validatePhone(phone.value);
      phoneError.textContent = "";
    } catch (e) {
      phoneError.textContent = e;
    }
  });

  const address = document.getElementById("address");
  const addressError = document.querySelector(".address-error");
  address.addEventListener("input", () => {
    try {
      validateAddress(address.value);
      addressError.textContent = "";
    } catch (e) {
      addressError.textContent = e;
    }
  });
});

const validateName = (name) => {
  let nameRegex = RegExp("^[A-Z][a-zA-Z]{2}[a-zA-Z\\s]*$");
  if (!nameRegex.test(name)) throw "Name is incorrect";
};

const validateAddress = (address) => {
  address += " ";
  let addressRegex = RegExp("^(.{3,}\\s){2,}$");
  if (!addressRegex.test(address)) throw "Address is incorrect";
};

const validatePhone = (phone) => {
  let phoneRegex = RegExp("^(\\+\\d{2}|\\d{2})?\\d{10}$");
  if (!phoneRegex.test(phone)) throw "Phone number is incorrect";
};

const submitForm = (e) => {
    e.preventDefault();
    setContactObject();
    createAndUpdateStorage();
  };
  
  const resetForm = () => {
    console.log("Form Reset");
  };
  
  const setContactObject = () => {
    contactObj._id = new Date().getTime();
    contactObj._name = getInputValue("#name");
    contactObj._address = getInputValue("#address");
    contactObj._phone = getInputValue("#tel");
    contactObj._city = getInputValue("#city");
    contactObj._state = getInputValue("#state");
    contactObj._pincode = getInputValue("#zip");
  };
  
  const createAndUpdateStorage = () => {
    let contactList = JSON.parse(localStorage.getItem("ContactList"));
  
    if (contactList) {
      contactList.push(contactObj);
    } else {
      contactList = [contactObj];
    }
    localStorage.setItem("ContactList", JSON.stringify(contactList));
  };
  
  const getInputValue = (selector) => {
    let value = document.querySelector(selector).value;
    return value;
  };

