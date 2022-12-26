var form = document.forms[0];
var customerName = form.elements[0];
var customerPhone = form.elements[1];
console.log(customerPhone);
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
    /*
    if (customerArray.length < 2) {
      console.log('Customer name error! (2 words or more)');
    }
    for (const item of customerArray) {
      if (item.length < 3) console.log('Customer name error! (word\'s length more than 3 symbol)');
    }*/
});
