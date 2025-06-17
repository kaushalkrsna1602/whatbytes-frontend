import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Filters */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Filters</h3>
          <ul className="space-y-1">
            <li>All</li>
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Home</li>
          </ul>
          <div className="mt-4 text-xs text-gray-300">© 2024 American</div>
        </div>
        {/* About Us */}
        <div>
          <h3 className="font-semibold text-lg mb-3">About Us</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <Twitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-400">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
