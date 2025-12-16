function greetLater(name) {
  setTimeout(function () {
    console.log("Hello", name);
  }, 1000);
}

greetLater("Rishi");
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

function handleLogin(user) {
  if (!user.email || !user.password) {
    console.log("Missing credentials");
    return;
  }

  if (user.password.length < 6) {
    console.log("Weak password");
    return;
  }

  console.log("User logged in:", user.email);
}


function hasCredentials(user) {
  return user.email && user.password;
}

function isStrongPassword(password) {
  return password.length >= 6;
}

function showMessage(message) {
  console.log(message);
}

function handleLogin(user) {
  if (!hasCredentials(user)) {
    showMessage("Missing credentials");
    return;
  }

  if (!isStrongPassword(user.password)) {
    showMessage("Weak password");
    return;
  }

  showMessage("User logged in: " + user.email);
}

















function submitForm(form) {
  if (!form.name || !form.email) {
    console.log("Invalid form");
    return;
  }

  if (form.email.includes("@") === false) {
    console.log("Invalid email");
    return;
  }

  let payload = {
    name: form.name.trim(),
    email: form.email.trim().toLowerCase()
  };

  console.log("Sending data...", payload);

  if (form.name.length > 10) {
    console.log("Long name detected");
  }
}

function hasSpecialLetter(form){
return form.email.includes(`@`);
}
function showMessage(msg){
    console.log(msg)
}
function isProperLength(form){
    return form.name.length > 10;
}

function hasCredentials(form){
return form.name && form.email;
}


function submitForm(form){
if(!hasCredentials(form)){
    showMessage("Invalid Form");
    return;
}
if(!hasSpecialLetter(form)){
    showMessage("Include @ in your Email")
    return;
}
if(!isProperLength(form.name)){
    showMessage("Long Form Detected")
    return;
}
showMessage("Form Submitted"+ form.email)
}


















function placeOrder(order) {
  if (!order.userId || !order.items || order.items.length === 0) {
    console.log("Invalid order");
    return;
  }

  let total = 0;
  for (let item of order.items) {
    total += item.price * item.qty;
  }

  if (total > 1000) {
    total = total - total * 0.1;
  }

  console.log("Order placed for user:", order.userId);
  console.log("Total amount:", total);
}



function isOrderValid(order) {
  return order.userId && order.items && order.items.length > 0;
}

function calculateTotal(items) {
  let total = 0;
  for (let item of items) {
    total += item.price * item.qty;
  }
  return total;
}

function applyDiscount(total) {
  if (total > 1000) {
    return total - total * 0.1;
  }
  return total;
}
function sendMessage(message) {
  console.log(message);
}
function placeOrder(order) {
  if (!isOrderValid(order)) {
    sendMessage("Invalid order");
    return;
  }

  const subtotal = calculateTotal(order.items);
  const finalTotal = applyDiscount(subtotal);

  sendMessage("Order placed for user: " + order.userId);
  sendMessage("Total amount: " + finalTotal);
}

