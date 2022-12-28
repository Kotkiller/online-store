var form = document.forms[0];
var customerName = form.elements[0];
var customerPhone = form.elements[1];
var customerAddress = form.elements[2];
var customerEmail = form.elements[3];
// checks for customer name field
customerName.addEventListener('focus', function () {
});
customerName.addEventListener('blur', function () {
    var customer = customerName.value;
    var customerArray = customer.split(' ');
    if (customerArray.length < 2) {
        console.log('Customer name error! (2 words or more)');
    }
    for (var _i = 0, customerArray_1 = customerArray; _i < customerArray_1.length; _i++) {
        var item = customerArray_1[_i];
        if (item.length < 3)
            console.log('Customer name error! (word\'s length more than 3 symbol)');
    }
});
// checks for customer phone number field
customerPhone.addEventListener('focus', function () {
});
customerPhone.addEventListener('blur', function () {
    var phone = customerPhone.value;
    var firstSymbol = phone[0];
    if (firstSymbol != '+') {
        console.log('first symbol not "+');
    }
    if ((phone.slice(1)).length < 9) {
        console.log('phone number less than 9 symbols');
    }
    if (isNaN(Number(phone.slice(1)))) {
        console.log('phone number must contain only symbols');
    }
});
// checks for customer address
customerAddress.addEventListener('focus', function () {
});
customerAddress.addEventListener('blur', function () {
    var address = customerAddress.value;
    var addressArray = address.split(' ');
    if (addressArray.length < 3) {
        console.log('Customer address error! (3 words or more)');
    }
    for (var _i = 0, addressArray_1 = addressArray; _i < addressArray_1.length; _i++) {
        var item = addressArray_1[_i];
        if (item.length < 5)
            console.log('Customer name error! (word\'s length more than 5 symbol)');
    }
});
// checks for customer e-mail
customerEmail.addEventListener('focus', function () {
});
customerEmail.addEventListener('blur', function () {
    var email = customerEmail.value;
    if (email.indexOf(' ') != -1) {
        console.log('email don\'t contain spaces');
    }
    var loginPos = email.indexOf('@');
    var login = '';
    if (email.indexOf('@') === -1) {
        console.log('email must contain @');
    }
    else {
        login = email.slice(0, loginPos);
    }
    var servicePos = email.lastIndexOf('.');
    var service = '';
    if (email.indexOf('.') === -1) {
        console.log('email don\'t contain dot');
    }
    else {
        service = email.slice(loginPos + 1, servicePos);
    }
    var domain = email.slice(servicePos + 1);
    if (domain === '') {
        console.log('domain can\'t be empty');
    }
    else {
        domain = email.slice(servicePos + 1);
    }
    console.log(login);
    console.log(service);
    console.log(domain);
});
