import React from "react";
import logo from "/percel-point.svg";

const Footer2 = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and Description */}
        <div>
          <img className="w-20 mb-4" src={logo} alt="Percel Point Logo" />
          <p className="text-sm leading-relaxed">
            Bringing you the best solutions for your business. <br />
            Connect with us for a seamless experience.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-white transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-white transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="block">Email:</span>
              <a
                href="mailto:info@example.com"
                className="hover:text-white transition-colors duration-200 block"
              >
                info@example.com
              </a>
            </li>
            <li>
              <span className="block">Phone:</span>
              <a
                href="tel:+1234567890"
                className="hover:text-white transition-colors duration-200 block"
              >
                +1 234 567 890
              </a>
            </li>
            <li>
              <span className="block">Address:</span>
              <span>1234 Street Name, City, Country</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Percel Point. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer2;
