import React from 'react';
import './Home.css';
import { LuUserRound } from "react-icons/lu";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { IoMagnet } from 'react-icons/io5';
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
            <img src="./images/bmo_2.png" alt="image"  className="img_logo"/>
        </div>
        <div className="icons">
          <span>
            <img src="./images/icon_header.png" alt="" className="img_logo_2"/>
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

        <div className="quick-actions">
            {/* <h2>Quick Actions</h2> */}
            <div className="actions">
                <div className="action-item">
                    <IoMdSend className="icon_action"/>
                    <p>INTERAC E-TRANSFER</p>
                </div>
                <div className="action-item">
                    <IoDocumentTextOutline className="icon_action"/>
                    <p>PAY BILL</p>
                </div>
                <div className="action-item">
                    <IoSettingsOutline className="icon_action"/>
                    <p>MANAGE</p>
                </div>
            </div>
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
