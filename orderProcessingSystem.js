// {
//   "id": number,               // Unique order ID
//   "customerName": string,     // Name of the customer
//   "items": array of objects,  // Items in the order (each having name, price, quantity)
//   "status": string,           // Order status: "pending", "shipped", "delivered", "cancelled"
//   "createdAt": Date           // Date when the order was placed
// }


function createOrderManager() 
{
  let orders = [];

  return 
  {
    addOrder(odr) 
    {
      orders.push(odr);
    },
    updateOrder(id, nsta) 
    {
      orders = orders.map(order => {
        if (order.id === id) 
        {
          return { ...order, status: nsta };
        }
        return order;
      });
    },
    filterOrder(status) 
    {
      return orders.filter(order => order.status === status);
    },
    sortOrder(pak) 
    {
      return orders.sort((a, b) => {
        if (pak === "Date") 
        {
          return new Date(a.createdAt) - new Date(b.createdAt);
        } else if (pak === "status") {
          return a.status.localeCompare(b.status);
        }
        return 0;
      });
    }
    getTotalRevenue() 
    {
      return orders.reduce((total, order) => {
        return total + order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      }, 0);
    }
    exportOrders() 
    {
      return JSON.stringify(orders, null, 2);
    }
  };
}

const manager = createOrderManager();
manager.addOrder({ id: 1, customerName: "Rahane", items: [{ name: "hair gel", price: 10, quantity: 2 }], status: "pending", createdAt: "2025-04-01" });