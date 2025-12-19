// --------------------
// 1️⃣ Controlled Input
// --------------------
let name = "";

const input = document.querySelector("#nameInput");
const output = document.querySelector("#output");

input.addEventListener("input", (e) => {
  name = e.target.value;
  output.textContent = name;
});

// --------------------
// 2️⃣ Event Delegation
// --------------------
const list = document.querySelector("#list");
const addBtn = document.querySelector("#addItem");

list.addEventListener("click", (e) => {
  const item = e.target.closest(".item");
  if (!item) return;

  console.log("Clicked:", item.textContent);
});

let count = 3;

addBtn.addEventListener("click", () => {
  count++;
  const li = document.createElement("li");
  li.className = "item";
  li.innerHTML = `<span>Item ${count}</span>`;
  list.appendChild(li);
});

// --------------------
// 3️⃣ Event Bubbling
// --------------------
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", () => {
  console.log("Child clicked");
});
