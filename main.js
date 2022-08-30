import { getOrders, addNewOrder } from "./orders.js";

document.getElementById("app").innerHTML = `
<h1>Peanut's Pizza Parlor</h1>
<div>
  <h3>Please make your pizza</h3>
  <div class="pizzaForm">
    <div class="crust">
      <p>Pick your crust</p>
      <label for="thinCrust">Thin</label>
      <input id="thinCrust" name="crust" type="radio" value="thin" />
      <label for="handTossedCrust">Hand Tossed</label>
      <input id="handTossedCrust" name="crust" type="radio" value="HandTossed" />
      <label for="handTossedCrust">Stuffed</label>
      <input id="stuffed" name="crust" type="radio" value="stuffed" />
      </div>
      <div class="toppings">
        <p>Pick your Toppings (Select all that apply)</p>
        <ul>
          <li>
            <input id="pepperoni" name="toppings" type="checkbox" value="pepperoni" />
            <label for="pepperoni">Pepperoni</label>
          </li>
          <li>
            <input id="Sausage" name="toppings" type="checkbox" value="Sausage" />
            <label for="Sausage">Sausage</label>
          </li>
          <li>
            <input id="Black Olives" name="toppings" type="checkbox" value="Black Olives" />
            <label for="Black Olives">Black Olives</label>
          </li>
          <li>
            <input id="Green Peppers" name="toppings" type="checkbox" value="Green Peppers" />
            <label for="Green Peppers">Green Peppers</label>
          </li>
          <li>
            <input id="Onions" name="toppings" type="checkbox" value="Onions" />
            <label for="Onions">Onions</label>
          </li>
        </ul>
    </div>
    <div class="extras">
      <label for="specialInstructions">Notes/Special Instructions</label>
      <div>
        <textarea id="specialInstructions"></textArea>
      </div>
    </div>
    <div>
      <button id="submitOrder">Order Pizza</button>
    </div>
  </div>
  <h3>Orders</h3>
  <div id="orders"></div>
</div>
`;

const displayOrders = () => {
  const orders = getOrders();
  let html = "<ul>";
  for (const order of orders) {
    html += `<li>
      <p>Crust: ${order.crust}</p>
      <p>Toppings: ${order.toppings.join(",")}</p>
      <p>Special Instructions: ${order.instructions}</p>
    </li>`;
  }
  html += "</ul>";
  // Add logic here to put the orders on the DOM
  document.getElementById("orders").innerHTML = html;
};

document.addEventListener("click", (e) => {
  if (e.target.id === "submitOrder") {
    console.log("submitting order");
    // Need logic to get all the values from the form,
    const crust = document.querySelector("input[name=crust]:checked")?.value;
    const instructions = document.getElementById("specialInstructions")?.value;

    const toppingsElements = document.querySelectorAll("input[name=toppings]:checked");

    const toppingsArray = [];
    const toppings = toppingsElements.forEach((toppingElement) => {
      toppingsArray.push(toppingElement.value);
    });
    console.log(toppingsArray);

    // format them into an object and
    const newOrder = {
      crust: crust,
      toppings: toppingsArray,
      instructions: instructions,
    };

    console.log(newOrder);

    //add that object to the `orders` array in `orders.js`
    addNewOrder(newOrder);
  }
});

document.addEventListener("stateChanged", (event) => {
  // One line of code should do it.
  displayOrders();
});

//This is called when the page is loaded only
displayOrders();
