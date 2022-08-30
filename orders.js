const orders = [
  {
    id: 1,
    crust: "Hand",
    toppings: ["pepperoni", "green pepper"],
    instructions: "extra cheese",
  },
  {
    id: 2,
    crust: "Thin",
    toppings: ["Black Olives", "green pepper"],
    instructions: "half green peppers",
  },
];

const getNewOrderId = () => {
  let highestOrderId = orders.sort((a, b) => b.id - a.id)[0].id;
  return highestOrderId + 1;
};

export const getOrders = () => {
  // Add logic here to return a copy of your orders
  return orders.map((order) => ({ ...order }));
};

export const addNewOrder = (order) => {
  console.log("new order", order);
  const newId = getNewOrderId();
  order.id = newId;
  // need to add logic
  orders.push(order);
  console.log(orders);
  document.dispatchEvent(new CustomEvent("stateChanged"));
};
