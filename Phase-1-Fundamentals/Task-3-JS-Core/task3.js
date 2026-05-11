const orders = [
  { id: 1, customer: "Alice", items: [{ name: "Keyboard", price: 80, qty: 1 }, { name: "Mouse", price: 25, qty: 2 }], status: "delivered" },
  { id: 2, customer: "Bob",   items: [{ name: "Monitor", price: 300, qty: 1 }], status: "delivered" },
  { id: 3, customer: "Alice", items: [{ name: "Cable", price: 10, qty: 3 }], status: "cancelled" },
  { id: 4, customer: "Carol", items: [{ name: "Laptop", price: 1200, qty: 1 }, { name: "Sleeve", price: 30, qty: 1 }], status: "delivered" },
  { id: 5, customer: "Bob",   items: [{ name: "Webcam", price: 60, qty: 1 }], status: "pending" },
  { id: 6, customer: "Dan",   items: [{ name: "Headset", price: 90, qty: 1 }, { name: "Mic", price: 50, qty: 1 }], status: "delivered" },
  { id: 7, customer: "Carol", items: [{ name: "Keyboard", price: 80, qty: 1 }], status: "delivered" },
];

// #1 - Order totals
const getOrderTotal = orders.map(({id, customer, items}) => ({
    id, 
    customer, 
    total: items.reduce((acc, item) => acc + item.price * item.qty,0)
}));
console.log('Order total is:', getOrderTotal);

// #2 - Delivered-only customers
// We filter to delivered orders, map to customer names, then we use 'Set' to remove duplicates
const getDelivered = [...new Set(orders
    .filter((order) => order.status === 'delivered')
    .map((order) => order.customer))];
console.log('Customers with one or more delivered orders:', getDelivered);

// #3 - Revenue per customer (delivered only)
const getRevenue = orders
    .filter((order) => order.status === 'delivered')
    // inner reduce calculates each order's total (same as exercise #1), outer accumulates it per customer
    .reduce((acc, order) => {
        const orderTotal = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
        return { ...acc, [order.customer]: (acc[order.customer] || 0) + orderTotal };
    }, {});
console.log('Revenue per customer:', getRevenue);

// #4 - Top spender
// First we convert the object into an array using object.entries method:
const revenueArray = Object.entries(getRevenue).map(([customer, total]) => ({customer, total}));

// Then we find the entry with the highest total by comparing them
const getTopSpender = revenueArray.reduce((acc, entry) => entry.total > acc.total ? entry : acc, { customer: '', total: 0 }).customer;
console.log('The top spender is:', getTopSpender);

// #5 - Item popularity
// First we filter to delivered orders, then flatmap collapses all items into one array
const getMostPopular = orders
    .filter((order) => order.status === 'delivered')
    .flatMap((order) => order.items)
    .reduce((acc, item) => {
        return { ...acc, [item.name]: (acc[item.name] || 0) + item.qty };
}, {});

// Then we convert the counts object to a sorted array (to avoid mutation) to display by quantity
const sortedPopular = Object.entries(getMostPopular)
    .map(([name, qty]) => ({name, qty}))
    .sort((a,b) => b.qty - a.qty) 
console.log('The most popular items are:', sortedPopular);

// #6 - Closure-based counter
function makeCounter(step=1){
    let count = 0;
    
    return {
        increment(){
            count += step;
        },
        decrement(){
            count -= step;
        },
        reset(){
            count = 0;
        },
        currentValue(){
            return count;
        }
    }
}
const counter = makeCounter();

counter.increment();
console.log(counter.currentValue());