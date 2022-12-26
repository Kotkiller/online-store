const form = document.forms[0];
const customerName = <HTMLInputElement>form.elements[0];
let a: string = customerName.value;
console.dir(customerName.value);

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

