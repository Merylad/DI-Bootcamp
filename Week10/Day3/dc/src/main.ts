
type User = {
  type: 'user';
  name: string;
  age: number;
 };
 
 type Product = {
  type: 'product';
  id: number;
  price: number;
 };
 
 type Order = {
  type: 'order';
  orderId: string;
  amount: number;
 };

 const handleData = (arr : (User | Product | Order)[]): string[] => {
  let response : string[] = []
  arr.forEach (item => {
    if (item.type === 'user') response.push (`Hello, ${item.name}! You are ${item.age} years old.`)
    if (item.type === 'product') response.push (`Product ID: ${item.id}, Price: $${item.price}`)
    if (item.type === 'order') response.push ( `Order ID: ${item.orderId}, Total Amount: $${item.amount}`)
  })

  return response
 }

 const data: (User | Product | Order)[] = [
  { type: 'user', name: 'Alice', age: 30 },
  { type: 'product', id: 101, price: 29.99 },
  { type: 'order', orderId: 'ORD123', amount: 100.5 }
];

console.log(handleData(data));