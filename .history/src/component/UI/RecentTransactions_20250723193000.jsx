import React from 'react';
import { FaHome, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';
import './RecentTransactions.css';

const transactions = [
  {
    id: 1,
    address: "123 Maple Street",
    type: "Single Family",
    price: 575000,
    date: "2023-06-15",
    status: "Sold",
    daysOnMarket: 12
  },
  {
    id: 2,
    address: "456 Oak Avenue",
    type: "Condo",
    price: 425000,
    date: "2023-06-10",
    status: "Sold",
    daysOnMarket: 8
  },
  {
    id: 3,
    address: "789 Pine Road",
    type: "Townhouse",
    price: 385000,
    date: "2023-06-05",
    status: "Sold",
    daysOnMarket: 21
  },
  {
    id: 4,
    address: "101 Elm Boulevard",
    type: "Luxury Villa",
    price: 1200000,
    date: "2023-05-28",
    status: "Sold",
    daysOnMarket: 35
  }
];

export const RecentTransactions = () => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="recent-transactions">
      <div className="container">
        <h2 className="section-title">Recent Market Activity</h2>
        <div className="transactions-table">
          <div className="table-header">
            <div className="header-item">Address</div>
            <div className="header-item">Type</div>
            <div className="header-item">Price</div>
            <div className="header-item">Date</div>
            <div className="header-item">Days on Market</div>
          </div>
          {transactions.map(transaction => (
            <div key={transaction.id} className="table-row">
              <div className="row-item address">
                <FaHome className="row-icon" />
                <span>{transaction.address}</span>
              </div>
              <div className="row-item type">{transaction.type}</div>
              <div className="row-item price">
                <FaDollarSign className="row-icon" />
                <span>{formatCurrency(transaction.price)}</span>
              </div>
              <div className="row-item date">
                <FaCalendarAlt className="row-icon" />
                <span>{formatDate(transaction.date)}</span>
              </div>
              <div className="row-item days">
                <span className={`status-badge ${transaction.status.toLowerCase()}`}>
                  {transaction.daysOnMarket} days
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="view-market-report-btn">View Full Market Report</button>
      </div>
    </section>
  );
};