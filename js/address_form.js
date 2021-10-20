let contactObj = {};
let isUpdate = false;
document.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector('#name');
  const textError = document.querySelector('.text-error');
  name.addEventListener('input', function() {
      if(name.value.length == 0){
          textError.textContent = "";
          return;
      }
      try{
          (new Address()).name = name.value;
          textError.textContent = "";
      } 
      catch(e) {
          textError.textContent = e;
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
  checkForUpdate();
});

const checkForUpdate = () => {
  const contactJson = localStorage.getItem("editContact");
  isUpdate = contactJson ? true : false;
  if (!isUpdate) return;
  contactObj = JSON.parse(contactJson);
  setForm();
};

const setForm = () => {
  setValue("#name", contactObj.name);
  setValue("#tel", contactObj.phone);
  setValue("#address", contactObj.address);
  setValue("#city", contactObj.city);
  setValue("#state", contactObj.state);
  setValue("#zip", contactObj.pincode);
};

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
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
    setValue('#name','');
    setValue('#phone','');
    setValue('#address','');
    setValue('#city','');
    setValue('#state','');
    setValue('#pincode','');
}
  
  const setContactObject = () => {
    if(!isUpdate) contactObj.id = new Date().getTime();
    contactObj.name = getInputValue("#name");
    contactObj.address = getInputValue("#address");
    contactObj.phone = getInputValue("#tel");
    contactObj.city = getInputValue("#city");
    contactObj.state = getInputValue("#state");
    contactObj.pincode = getInputValue("#zip");
    // alert(contactList.toString());
  };
  
  const createAndUpdateStorage = () => {
    let contactList = JSON.parse(localStorage.getItem("ContactList"));
  
    if (contactList) {
      if (isUpdate) {
        const index = contactList.map((data) => data.id).indexOf(contactObj.id);
        contactList.splice(index, 1, contactObj);
      } else {
        contactList.push(contactObj);
      }
    } else {
      contactList = [contactObj];
    }
    localStorage.setItem("ContactList", JSON.stringify(contactList));
    window.location.replace(site_properties.home_page);
  };
  
  const getInputValue = (selector) => {
    let value = document.querySelector(selector).value;
    return value;
  };

