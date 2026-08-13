import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold">
              <span className="text-brand-gradient">Hemant Kumawat</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              MERN Stack Developer passionate about building scalable web applications and seamless user experiences.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://github.com/hemantkumawat05"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/hemant-kumawat-93196b35a"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {['#home', '#skills', '#experience', '#projects', '#education'].map((href) => (
                <li key={href}>
                  <a href={href} className="text-gray-400 hover:text-white text-sm no-underline transition-colors duration-200 capitalize">
                    {href.replace('#', '')}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={16} className="text-blue-400 shrink-0" />
                <a href="mailto:kumawathemant059@gmail.com" className="text-gray-400 hover:text-white no-underline transition-colors">
                  kumawathemant059@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={16} className="text-blue-400 shrink-0" />
                <a href="tel:+917737364751" className="text-gray-400 hover:text-white no-underline transition-colors">
                  +91-7737364751
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-blue-400 shrink-0" />
                <span>Jaipur, Rajasthan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Hemant Kumawat. All rights reserved.</p>
          <p>Built with <span className="text-blue-400 font-medium">React</span>, <span className="text-blue-400 font-medium">Vite</span> & <span className="text-blue-400 font-medium">Tailwind CSS</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
