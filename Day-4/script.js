/**
 * Defensive Programming Practice
 * Focus: optional chaining, nullish coalescing, early returns
 */

// 1️⃣ Safely get user full name
function getUserFullName(user) {
  return (
    user?.profile?.firstName && user?.profile?.lastName
      ? `${user.profile.firstName} ${user.profile.lastName}`
      : "Guest User"
  );
}

// 2️⃣ Validate order before processing
function isValidOrder(order) {
  return Boolean(
    order?.userId &&
    order?.items?.length &&
    order.items.every(item => item?.price && item?.qty)
  );
}

// 3️⃣ Calculate total price safely
function calculateTotal(order) {
  if (!isValidOrder(order)) {
    return "Invalid order data";
  }

  return order.items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
}

// 4️⃣ Place order with safe fallbacks
function placeOrder(order) {
  const total = calculateTotal(order);

  if (typeof total !== "number") {
    console.log("❌ Order failed:", total);
    return;
  }

  console.log(`✅ Order placed for user ${order.userId}`);
  console.log(`💰 Total amount: ₹${total}`);
}

// ---- Test cases ----

const validOrder = {
  userId: 101,
  items: [
    { price: 500, qty: 2 },
    { price: 300, qty: 1 }
  ]
};

const brokenOrder = {
  userId: 102,
  items: [{ price: 500 }]
};

placeOrder(validOrder);
placeOrder(brokenOrder);

console.log(
  getUserFullName({ profile: { firstName: "Rishi", lastName: "Jadhav" } })
);
console.log(getUserFullName({}));
