// 1. map
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);

// 2. filter
const evens = nums.filter(n => n % 2 === 0);

// 3. reduce
const sum = nums.reduce((acc, n) => acc + n, 0);

// 4. find
const firstEven = nums.find(n => n % 2 === 0);

// 5. some & every
const hasEven = nums.some(n => n % 2 === 0);
const allEven = nums.every(n => n % 2 === 0);

// 6. destructuring
const user = { name: "Rishi", age: 20 };
const { name, age } = user;

// 7. optional chaining
const profile = {};
const city = profile.address?.city;

// 8. immutability example
const cart = [
  { price: 500, qty: 1 },
  { price: 800, qty: 2 }
];

const updatedCart = cart.map((item, index) =>
  index === 0 ? { ...item, price: 400 } : item
);

console.log({
  doubled,
  evens,
  sum,
  firstEven,
  hasEven,
  allEven,
  name,
  age,
  city,
  updatedCart
});
