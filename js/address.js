class address {
    id;
  
    get name() {
      return this._name;
    }
    set name(name) {
        let nameRegex = RegExp("^[A-Z][a-zA-Z]{2}[a-zA-Z\\s]*$");
    if (!nameRegex.test(name)) throw "Name is incorrect";
    else this._name = name;
      
    }
  
    get address() {
      return this._address;
    }
    set address(address) {
        address += " ";
        let addressRegex = RegExp("^(.{3,}\\s){2,}$");
        if (!addressRegex.test(address)) throw "Address is incorrect";
        else this._address = address;
    }
  
    get phone() {
      return this._phone;
    }
    set phone(phone) {
        this.phone = phone;
        let phoneRegex = RegExp("^(\\+\\d{2}|\\d{2})?\\d{10}$");
        if (!phoneRegex.test(phone)) throw "Phone number is incorrect";
        else this._phone = phone;
    }
  
    get city() {
      return this._city;
    }
    set city(city) {
      this._city = city;
    }
  
    get state() {
      return this._state;
    }
    set state(state) {
      this._state = state;
    }
  
    get pincode() {
      return this._pincode;
    }
    set pincode(pincode) {
      this._pincode = pincode;
    }

    toString() {
        return ( "id=" +this.id +", name=" +this.name +", phone=" +this.phone +", address=" +this.address +", city=" +this.city +", state=" + this.state +", pincode=" +this.pincode
        );
    }
  }