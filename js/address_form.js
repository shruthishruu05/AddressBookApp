let contactObj = {};

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
});



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
    window.location.replace(site_properties.home_page);
  };
  
  const getInputValue = (selector) => {
    let value = document.querySelector(selector).value;
    return value;
  };

