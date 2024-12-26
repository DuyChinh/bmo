import React from 'react';
import './Home.css';
import { LuUserRound } from "react-icons/lu";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
            <img src="./src/assets/bmo.jpeg" alt="image"  className="img_logo"/>
        </div>
        <div className="icons">
          <span>
            <img src="./src/assets/icon_header.png" alt="" className="img_logo_2"/>
          </span>
          {/* <span>
            <IoIosHelpCircleOutline/>
          </span>
          <span>
            <LuUserRound/>
          </span> */}
        </div>
      </header>

      <div className="main">
        <div className="account-info">
            <h2>Chequing</h2>
            <p>Primary Chequing Account</p>
            <p className="account-number">12345 6791-84</p>
            <p className="balance">$1.500,00</p>
        </div>

        <div className="actions">
            <button>TRANSFER</button>
            <button>PAY BILL</button>
            <button>INTERAC E-TRANSFER</button>
            <button>MANAGE</button>
        </div>

        <div className="tabs">
            <button>Overview</button>
            <button>Statements</button>
        </div>
      </div>

      

      <div className="transactions">
        <button className="filter-btn">FILTER</button>
        <div className="transaction-item">
          <p>TF 0335#7700-396</p>
          <p className="amount positive">+0.12</p>
        </div>
        <div className="transaction-item">
          <p>INTERAC E-TRANSFER FEE</p>
          <p className="amount negative">-1.50</p>
        </div>
      </div>
    </div>
  );
}
