import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold">
              <span className="text-brand-gradient">
                Hemant Kumawat
              </span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              MERN Stack Developer passionate about building scalable web
              applications and seamless user experiences.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://github.com/hemantkumawat05"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors duration-200"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/hemant-kumawat-93196b35a"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors duration-200"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm no-underline transition-colors duration-200 ${
                        isActive
                          ? 'text-blue-400'
                          : 'text-gray-400 hover:text-white'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Contact
            </h3>

            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail
                  size={16}
                  className="text-blue-400 shrink-0"
                />

                <a
                  href="mailto:kumawathemant059@gmail.com"
                  className="text-gray-400 hover:text-white no-underline transition-colors break-all"
                >
                  kumawathemant059@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone
                  size={16}
                  className="text-blue-400 shrink-0"
                />

                <a
                  href="tel:+917737364751"
                  className="text-gray-400 hover:text-white no-underline transition-colors"
                >
                  +91-7737364751
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin
                  size={16}
                  className="text-blue-400 shrink-0"
                />
                <span>Jaipur, Rajasthan ( 303328 )</span>
              </li>

            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-gray-500 text-sm text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} Hemant Kumawat.
              All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;