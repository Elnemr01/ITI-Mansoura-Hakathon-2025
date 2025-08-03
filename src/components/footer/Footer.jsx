import React from "react";
import logo from "../../assets/assets_frontend/logo.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600 text-center md:text-left items-center md:items-start">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <img src={logo} alt="Prescripto Logo" className="w-44 h-auto" />
          <p className="leading-relaxed max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s...
          </p>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-gray-900 font-bold">Company</h3>
          <p>Pfizer</p>
          <p>Johnson & Johnson</p>
          <p>Roche</p>
          <p>Novartis</p>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-gray-900 font-semibold">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-[#6C63FF]" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#6C63FF]" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#6C63FF]" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#6C63FF]" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-gray-900 font-bold">Keep in touch</h3>
          <p>+0-000-000-000</p>
          <p>greatstackdev@gmail.com</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-4 text-center text-gray-400 text-sm border-t">
        © Prescripto All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;