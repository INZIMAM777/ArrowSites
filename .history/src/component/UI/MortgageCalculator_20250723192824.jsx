import React, { useState } from 'react';
import './MortgageCalculator.css';

export const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(3.5);
  
  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (monthlyRate === 0) {
      return principal / numberOfPayments;
    }
    
    return principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  };
  
  const monthlyPayment = calculateMonthlyPayment();
  const totalInterest = (monthlyPayment * loanTerm * 12) - (homePrice - downPayment);
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  return (
    <section className="mortgage-calculator">
      <div className="container">
        <h2 className="section-title">Mortgage Calculator</h2>
        <div className="calculator-container">
          <div className="calculator-inputs">
            <div className="input-group">
              <label htmlFor="homePrice">Home Price</label>
              <div className="input-with-unit">
                <span className="unit">$</span>
                <input
                  type="range"
                  id="homePrice"
                  min="100000"
                  max="2000000"
                  step="10000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(parseInt(e.target.value))}
                />
                <input
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(parseInt(e.target.value) || 0)}
                />
              </div>
            </div>
            
            <div className="input-group">
              <label htmlFor="downPayment">Down Payment</label>
              <div className="input-with-unit">
                <span className="unit">$</span>
                <input
                  type="range"
                  id="downPayment"
                  min="0"
                  max={homePrice}
                  step="5000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(parseInt(e.target.value))}
                />
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="down-payment-percent">
                {Math.round((downPayment / homePrice) * 100)}% of home price
              </div>
            </div>
            
            <div className="input-group">
              <label htmlFor="loanTerm">Loan Term (years)</label>
              <select
                id="loanTerm"
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
              >
                <option value="10">10 years</option>
                <option value="15">15 years</option>
                <option value="20">20 years</option>
                <option value="30">30 years</option>
              </select>
            </div>
            
            <div className="input-group">
              <label htmlFor="interestRate">Interest Rate</label>
              <div className="input-with-unit">
                <input
                  type="range"
                  id="interestRate"
                  min="1"
                  max="10"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                />
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                />
                <span className="unit">%</span>
              </div>
            </div>
          </div>
          
          <div className="calculator-results">
            <div className="result-item">
              <span className="result-label">Monthly Payment</span>
              <span className="result-value">{formatCurrency(monthlyPayment)}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Loan Amount</span>
              <span className="result-value">{formatCurrency(homePrice - downPayment)}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Total Interest</span>
              <span className="result-value">{formatCurrency(totalInterest)}</span>
            </div>
            <div className="result-item total">
              <span className="result-label">Total Cost of Loan</span>
              <span className="result-value">{formatCurrency(monthlyPayment * loanTerm * 12)}</span>
            </div>
            <button className="get-preapproved-btn">Get Pre-Approved</button>
          </div>
        </div>
      </div>
    </section>
  );
};