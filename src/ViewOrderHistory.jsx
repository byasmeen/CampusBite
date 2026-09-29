import React, { useState } from "react";
import "./ViewOrderHistory.css";

function ViewOrderHistory() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: "CB1001",
      date: "28-09-2026",
      status: "Completed",
      payment: "Paid",
      items: [
        { name: "Veg Burger", quantity: 1, price: 100 },
        { name: "French Fries", quantity: 1, price: 50 }
      ],
      total: 150
    },
    {
      id: "CB1002",
      date: "25-09-2026",
      status: "Completed",
      payment: "Paid",
      items: [
        { name: "Chicken Biryani", quantity: 1, price: 180 },
        { name: "Coke", quantity: 1, price: 40 }
      ],
      total: 220
    },
    {
      id: "CB1003",
      date: "22-09-2026",
      status: "Cancelled",
      payment: "Refunded",
      items: [
        { name: "Pizza", quantity: 1, price: 220 },
        { name: "Cold Coffee", quantity: 1, price: 60 }
      ],
      total: 280
    }
  ];

  /* ORDER DETAILS PAGE */

  if (selectedOrder) {
    return (
      <div className="page">

        <header className="header">
          <div className="logo">
            🍔 CampusBite
          </div>

          <nav>
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a className="active">Order History</a>
            <a href="#">Profile</a>
          </nav>
        </header>

        <main className="details-container">

          <button
            className="back-button"
            onClick={() => setSelectedOrder(null)}
          >
            ← Back to Order History
          </button>

          <div className="details-header">
            <div>
              <h1>Order #{selectedOrder.id}</h1>
              <p>Placed on {selectedOrder.date}</p>
            </div>

            <span
              className={
                selectedOrder.status === "Completed"
                  ? "status completed"
                  : "status cancelled"
              }
            >
              {selectedOrder.status}
            </span>
          </div>

          <div className="details-card">

            <h2>Order Details</h2>

            <div className="info-grid">

              <div>
                <span>Order ID</span>
                <strong>{selectedOrder.id}</strong>
              </div>

              <div>
                <span>Order Date</span>
                <strong>{selectedOrder.date}</strong>
              </div>

              <div>
                <span>Payment Status</span>
                <strong className="paid">
                  {selectedOrder.payment}
                </strong>
              </div>

              <div>
                <span>Order Status</span>
                <strong>{selectedOrder.status}</strong>
              </div>

            </div>

            <hr />

            <h2>Items Ordered</h2>

            <div className="items-list">

              {selectedOrder.items.map((item, index) => (
                <div className="item-row" key={index}>

                  <div>
                    <strong>{item.name}</strong>
                    <p>Quantity: {item.quantity}</p>
                  </div>

                  <strong>
                    ₹{item.price * item.quantity}
                  </strong>

                </div>
              ))}

            </div>

            <hr />

            <div className="total-section">

              <span>Total Amount</span>

              <strong>
                ₹{selectedOrder.total}
              </strong>

            </div>

          </div>

          <div className="success-message">
            <span>✓</span>

            <div>
              <strong>Order information available</strong>
              <p>
                You can view your complete CampusBite order details here.
              </p>
            </div>
          </div>

        </main>

        <footer>
          <p>
            © 2026 CampusBite | Campus Food Ordering System
          </p>
        </footer>

      </div>
    );
  }

  /* ORDER HISTORY PAGE */

  return (
    <div className="page">

      <header className="header">

        <div className="logo">
          🍔 CampusBite
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a className="active">Order History</a>
          <a href="#">Profile</a>
        </nav>

      </header>

      <main className="container">

        <h1>My Order History</h1>

        <p className="subtitle">
          View all your previous CampusBite orders
        </p>

        <div className="orders">

          {orders.map((order) => (

            <div className="order-card" key={order.id}>

              <div className="order-top">

                <div>
                  <h2>Order #{order.id}</h2>

                  <p className="date">
                    {order.date}
                  </p>
                </div>

                <span
                  className={
                    order.status === "Completed"
                      ? "status completed"
                      : "status cancelled"
                  }
                >
                  {order.status}
                </span>

              </div>

              <hr />

              <div className="details">

                <div>
                  <strong>Items</strong>

                  <p>
                    {order.items.map((item) => item.name).join(", ")}
                  </p>
                </div>

                <div>
                  <strong>Total Amount</strong>

                  <p className="amount">
                    ₹{order.total}
                  </p>
                </div>

              </div>

              <button
                className="view-button"
                onClick={() => setSelectedOrder(order)}
              >
                View Details →
              </button>

            </div>

          ))}

        </div>

      </main>

      <footer>
        <p>
          © 2026 CampusBite | Campus Food Ordering System
        </p>
      </footer>

    </div>
  );
}

export default ViewOrderHistory;