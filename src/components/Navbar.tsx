"use client";

const Navlinks = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/company" },
  { name: "Quality", href: "/quality" },
  { name: "Our Expertise", href: "/our-expertise" },
  { name: "Gallery", href: "/gallery" },
  { name: "Products", href: "/products" },
  { name: "Contact Us", href: "/contact-us" },
];

import React from "react";

const Navbar = () => {
  console.log("window", window.location.pathname);
  return (
    <nav>
      <div className="container mx-auto px-8 font-lato">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">THETA</div>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {Navlinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`py-5 text-gray-600 hover:text-gray-900 ${
                  typeof window !== "undefined" &&
                  window.location.pathname.toLowerCase() === link.href
                    ? "border-b border-b-black"
                    : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
