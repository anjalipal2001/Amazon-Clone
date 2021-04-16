import React from "react";
import "./Footer.css";
import amazonLogo from "../assets/logo.svg";
import DropDown from "./DropDown";

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Tamil",
  "Hindi",
  "Chinese",
  "Russian",
  "Japanese",
  "Arabic",
];
const currency = ["$ - USD", "₹ - INR", "£ - GBP", "€ - EUR", "¥ - JPY"];
const footerLinks = [
  {
    title: "Get to Know Us",
    list: ["About Amazon", "Connect with Us", "Amazon Cares", "Gift a Smile"],
  },
  {
    title: "Make Money with Us",
    list: [
     
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      
      "› See More",
    ],
  },
  {
    title: "Payment",
    list: [
     
      "Shop with Points",
      "Reload Your Balance",
    
    ],
  },
  {
    title: "Let Us Help You",
    list: [
    
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Devices",
     
    ],
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__disclaimer">
          <strong>Disclaimer:</strong> This is not the official Amazon Store. It
          is a redesign, built purely for educational purpose.
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div className="footer__row">
              <h6>{link.title}</h6>
              <ul>
                {link.list.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <img src={amazonLogo} className="footer__logo" />
          <span className="footer__copy">
            &copy; 2020 | Developed by{" "}
     
          </span>
          <span className="footer__dropDownSpan">
          <DropDown
            className="footer__dropDown footer__langDropDown"
            items={languages}
            defaultItem={languages[0]}
          />
          <DropDown
            className="footer__dropDown footer__currDropDown"
            items={currency}
            defaultItem={currency[0]}
          />
        </span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
