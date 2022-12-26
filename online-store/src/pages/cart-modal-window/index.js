var form = document.forms[0];
var customerName = form.elements[0];
var a = customerName.value;
console.dir(customerName.value);
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
