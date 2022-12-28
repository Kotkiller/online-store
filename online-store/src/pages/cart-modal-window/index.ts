const form = document.forms[0];
const customerName = <HTMLInputElement>form.elements[0];
const customerPhone = <HTMLInputElement>form.elements[1];
const customerAddress = <HTMLInputElement>form.elements[2];

// checks for customer name field
customerName.addEventListener('focus', () => {
})
customerName.addEventListener('blur', () => {
  const customer: string = customerName.value;
  const customerArray: string[] = customer.split(' ');
  if (customerArray.length < 2) {
    console.log('Customer name error! (2 words or more)');
  }
  for (const item of customerArray) {
    if (item.length < 3) console.log('Customer name error! (word\'s length more than 3 symbol)');
  }
})
// checks for customer phone number field
customerPhone.addEventListener('focus', () => {
})
customerPhone.addEventListener('blur', () => {
  const phone: string = customerPhone.value;
  const firstSymbol: string = phone[0];
  if (firstSymbol != '+') {console.log('first symbol not "+');}
  if ((phone.slice(1)).length < 9) {console.log('phone number less than 9 symbols');}
  if (isNaN(Number(phone.slice(1)))) {console.log('phone number must contain only symbols')}
})
// checks for customer address
customerAddress.addEventListener('focus', () => {
})
customerAddress.addEventListener('blur', () => {
  const address: string = customerAddress.value;
  const addressArray: string[] = address.split(' ');
  if (addressArray.length < 3) {console.log('Customer address error! (3 words or more)');}
  for (const item of addressArray) {
    if (item.length < 5) console.log('Customer name error! (word\'s length more than 5 symbol)');
  }
})