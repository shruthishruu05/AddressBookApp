const fullName = document.querySelector('#name');
const textError = document.querySelector('.text-error');
fullName.addEventListener('input', function() {
    let nameRegex = RegExp('^[A-Z][a-z]{2,}');
    if (nameRegex.test(fullName.value))
        textError.textContent = "";
    else textError.textContent = "Name is Incorrect";
    
});

   
    const number = document.querySelector('#tel');
    const numberError = document.querySelector('.phone-error');
    number.addEventListener('input', function() {
    let numberRegex = RegExp("^(\\+\\d{2}|\\d{2})?\\d{10}$");
    if (numberRegex.test(number.value))
        numberError.textContent = "";
    else numberError.textContent = "Mobile number is Incorrect";
});

const address = document.querySelector("#address");
  const addressError = document.querySelector(".address-error");
  address.addEventListener("input", function() {
    let addressRegex = RegExp('([A-Z a-z 0-9]{3,})+')
    if(addressRegex.test(address.value))
    addressError.textContent = "";
    else addressError.textContent = "Invalid Address!"

  });


