import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-4">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">YourCompany</h2>
          <p className="mt-3 text-gray-400">
            Providing high-quality products and services to customers worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-3 text-gray-400">Email: support@yourcompany.com</p>
          <p className="text-gray-400">Phone: +1 (123) 456-7890</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400 text-2xl"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-400 text-2xl"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400 text-2xl"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400 text-2xl"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} digital shop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
