import React from "react";
import { FaLinkedin,} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-blue-600 pt-6">
      <div className="max-w-7xl mx-auto sm:px-6 px-1">
        {/* Top Logo and Line */}
        <div className="flex flex-col items-start">
          <img src="public\images\logo\footerlogo.png" alt="MobiusEngine Logo" className="h-12 mb-1" />
          <div className="text-blue-700 font-semibold">MobiusEngine</div>
          <div className="w-full border-t border-gray-300 my-6" />
        </div>

        {/* Address, Email, Telephone, Socials */}
        <div className="grid grid-cols-2 md:grid-cols-4 sm:gap-8 gap-2 mb-6 overflow-scroll">
          <div>
            <h4 className="font-semibold mb-2 underline">Address</h4>
            <p className="text-blue-600 text-sm">
              1875 Mission St Ste 103 #450<br />
              San Francisco, CA 94103
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 underline">Email</h4>
            <p className="text-blue-600 text-sm underline">
              finance@mobiusengine.ai
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 underline">Telephone</h4>
            <p className="text-blue-600 text-sm">
              650-889-6026
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 underline">Socials</h4>
            <div className="flex gap-4 mt-2">
              <a href="#" className="border border-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="border border-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-600 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <p>© 2023 Mobiusservices LLC</p>
          <div className="flex gap-8">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
