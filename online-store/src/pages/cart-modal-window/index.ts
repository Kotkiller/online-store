const form = document.forms[0];
const customerName = <HTMLInputElement>form.elements[0];
const customerPhone = <HTMLInputElement>form.elements[1];
const customerAddress = <HTMLInputElement>form.elements[2];
const customerEmail = <HTMLInputElement>form.elements[3];
const cardNumber = <HTMLInputElement>form.elements[4];
const cardValidity = <HTMLInputElement>form.elements[5];
const cardCvv = <HTMLInputElement>form.elements[6];
const confirmButton = form.elements[7];

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
// checks for customer e-mail
customerEmail.addEventListener('focus', () => {
})
customerEmail.addEventListener('blur', () => {
  const email: string = customerEmail.value;
  if (email.indexOf(' ') != -1) {console.log('email don\'t contain spaces');}
  const loginPos = email.indexOf('@');
  let login: string = '';
  if (email.indexOf('@') === -1) {console.log('email must contain @');}
  else {login = email.slice(0, loginPos);}
  const servicePos: number = email.lastIndexOf('.');
  let service: string = '';
  if (email.indexOf('.') === -1) {console.log('email don\'t contain dot');}
  else {service = email.slice(loginPos + 1, servicePos);}
  let domain = email.slice(servicePos + 1);
  if (domain === '') {console.log('domain can\'t be empty');}
  else {domain = email.slice(servicePos + 1);}
  
  console.log(login);
  console.log(service);
  console.log(domain);
})
// check card number
cardNumber.addEventListener('focus', () => {
})
cardNumber.addEventListener('blur', () => {
  const numberValue: string = cardNumber.value;
  if (numberValue.length < 16) console.log('card number less than 16 numbers');
  if (isNaN(Number(numberValue))) console.log('card number must contain only numbers'); 
})
// check card validity
cardValidity.addEventListener('focus', () => {
})
cardValidity.addEventListener('blur', () => {
  const validity: string = cardValidity.value;
  if (validity.length < 4) console.log('card validity less than 4 numbers');
  if (Number(validity.slice(0, 2)) > 12) console.log('month\'s number bigger than 12'); 
})
// check card cvv
cardCvv.addEventListener('focus', () => {
})
cardCvv.addEventListener('blur', () => {
  const cvv: string = cardCvv.value;
  if (cvv.length < 3) console.log('card cvv less than 3 numbers');
  if (isNaN(Number(cvv))) console.log('card cvv must be a number'); 
})
confirmButton.addEventListener('click', () => {
  console.log('Confirm click');
})