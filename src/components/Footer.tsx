
import { ArrowRight, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png" 
              alt="WRLDS Technologies Logo" 
              className="h-10 w-auto mb-6 invert" // Added invert to make logo white
            />
            <p className="text-gray-300 mb-6">
              WRLDS Technologies provides an end-to-end platform for the creation and deployment of AI-powered smart sensor devices, giving customers 100% ownership while handling the complete technological development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8.25a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h7.5A.75.75 0 0016 8.25zm-5 3A.75.75 0 0110.25 12h-2.5a.75.75 0 010-1.5h2.5a.75.75 0 01.75.75zm7 0a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h2.5a.75.75 0 01.75.75zm-7 3a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h2.5a.75.75 0 01.75.75zm7 0a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h2.5a.75.75 0 01.75.75z" />
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-1.5h12a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18V6A1.5 1.5 0 016 4.5z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 8.862v10.225c0 1.615-1.296 2.913-2.906 2.913h-14.188c-1.61 0-2.906-1.298-2.906-2.913v-10.225c.718.446 1.541.767 2.426.972 2.791 1.27 4.885 2.212 6.233 2.855.951.455 1.73.833 2.255.967.522.134 1.289.3 2.255-.967 1.349-.643 3.442-1.586 6.233-2.855.886-.205 1.709-.526 2.427-.972zm-18.897-3.719c0-.387 0-.792.152-1.174.35-.897 1.375-1.469 2.361-1.469h14.188c.925 0 1.834.43 2.227 1.176.228.437.406.856.151 1.467-1.354.873-2.33 1.568-2.969 2.083-2.043 1.593-3.444 2.686-4.23 3.287-1.317.9-1.88.981-2.983 0-.786-.6-2.187-1.694-4.23-3.287-.639-.515-1.615-1.21-2.968-2.083zm18.897-1.798c0-.151-.003-.292-.012-.432-1.004.925-1.961 1.726-2.868 2.398-2.024 1.539-3.414 2.595-4.172 3.178-.759.584-1.188.889-1.947.889s-1.188-.304-1.947-.889c-.758-.583-2.148-1.64-4.172-3.178-.907-.671-1.864-1.473-2.868-2.398-.01.14-.012.281-.012.432v1.517c.727.424 1.525.921 2.394 1.493 2.048 1.593 3.457 2.685 4.227 3.276 1.1.949 2.072.92 3.156 0 .77-.591 2.18-1.683 4.227-3.276.869-.572 1.667-1.068 2.394-1.493v-1.517z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} WRLDS Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
