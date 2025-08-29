import React, { useEffect, useState } from 'react';
import { FaHome, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';
import { useFirebase } from '../../context/FirebaseContext';

export const RecentTransactions = () => {
  const { getLists, isLoggedIn } = useFirebase();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const propertiesSnapshot = await getLists();
        const transactionData = propertiesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // Sort by date (newest first) and take first 6
        const sortedTransactions = transactionData
          .filter(property => property.status === 'Sold') // Only show sold properties
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6);
        
        setTransactions(sortedTransactions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching transactions: ", error);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [getLists]);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatCurrency = (amount) => {
    if (!amount) return '$0';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (loading) {
    return <div className="loading">Loading recent transactions...</div>;
  }

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
          
          {transactions.length > 0 ? (
            transactions.map(transaction => (
              <div key={transaction.id} className="table-row">
                <div className="row-item address">
                  <FaHome className="row-icon" />
                  <span>{transaction.address || 'Address not available'}</span>
                </div>
                <div className="row-item type">{transaction.type || 'N/A'}</div>
                <div className="row-item price">
                  <FaDollarSign className="row-icon" />
                  <span>{formatCurrency(transaction.price)}</span>
                </div>
                <div className="row-item date">
                  <FaCalendarAlt className="row-icon" />
                  <span>{formatDate(transaction.date)}</span>
                </div>
                <div className="row-item days">
                  <span className={`status-badge ${transaction.status ? transaction.status.toLowerCase() : 'sold'}`}>
                    {transaction.daysOnMarket || 0} days
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="no-transactions">
              No recent transactions found
            </div>
          )}
        </div>
        <button className="view-market-report-btn">View Full Market Report</button>
      </div>

      <style jsx>{`
        .recent-transactions {
          padding: 60px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .container {
          width: 100%;
        }
        
        .section-title {
          text-align: center;
          font-size: 32px;
          margin-bottom: 40px;
          color: #333;
        }
        
        .transactions-table {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          margin-bottom: 30px;
        }
        
        .table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          background-color: #3b82f6;
          color: white;
          padding: 15px 20px;
          font-weight: 500;
        }
        
        .header-item {
          display: flex;
          align-items: center;
        }
        
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          padding: 15px 20px;
          border-bottom: 1px solid #eee;
          transition: background-color 0.2s;
        }
        
        .table-row:hover {
          background-color: #f8fafc;
        }
        
        .table-row:last-child {
          border-bottom: none;
        }
        
        .row-item {
          display: flex;
          align-items: center;
          color: #333;
        }
        
        .row-icon {
          margin-right: 10px;
          color: #3b82f6;
        }
        
        .address {
          font-weight: 500;
        }
        
        .status-badge {
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }
        
        .status-badge.sold {
          background-color: #ecfdf5;
          color: #059669;
        }
        
        .view-market-report-btn {
          display: block;
          margin: 0 auto;
          padding: 12px 30px;
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .view-market-report-btn:hover {
          background-color: #2563eb;
        }
        
        .loading, .no-transactions {
          text-align: center;
          padding: 40px;
          color: #666;
          font-size: 18px;
        }
        
        @media (max-width: 768px) {
          .table-header, .table-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          
          .header-item {
            display: none;
          }
          
          .row-item {
            display: grid;
            grid-template-columns: 100px 1fr;
          }
          
          .row-item::before {
            content: attr(data-label);
            font-weight: 500;
            color: #64748b;
          }
          
          .row-item.address::before { content: "Address"; }
          .row-item.type::before { content: "Type"; }
          .row-item.price::before { content: "Price"; }
          .row-item.date::before { content: "Date"; }
          .row-item.days::before { content: "DOM"; }
        }
      `}</style>
    </section>
  );
};