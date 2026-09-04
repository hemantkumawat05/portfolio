import React from 'react';
import astroimg from '../assets/astro.png';
import astro1 from '../assets/astro1.png';
import astro2 from '../assets/astro2.png';
import astro3 from '../assets/astro3.png';
import astro4 from '../assets/astro4.png';
import astro5 from '../assets/astro5.png';
import astro6 from '../assets/astro6.png';

import astroadmin1 from '../assets/astroadmin1.png';
import astroadmin2 from '../assets/astroadmin2.png';
import astroadmin3 from '../assets/astroadmin3.png';
import astroadmin4 from '../assets/astroadmin4.png';
import astroadmin5 from '../assets/astroadmin5.png';
import astroadmin6 from '../assets/astroadmin6.png';

import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import blog4 from '../assets/blog4.png';

import ecom1 from '../assets/ecom1.png';
import ecom2 from '../assets/ecom2.png';
import ecom3 from '../assets/ecom3.png';
import ecom4 from '../assets/ecom4.png';
import ecom5 from '../assets/ecom5.png';
import ecom6 from '../assets/ecom6.png';
import ecom7 from '../assets/ecom7.png';

import ecomadmin1 from '../assets/ecomadmin1.png';
import ecomadmin2 from '../assets/ecomadmin2.png';
import ecomadmin3 from '../assets/ecomadmin3.png';
import ecomadmin4 from '../assets/ecomadmin4.png';

export const projectsData = {
  'jyotishh-vaastu': {
    id: 'jyotishh-vaastu',
    title: 'JYOTISHH VAASTU',
    subtitle: 'AI-powered numerology and astrology platform providing personalized Kundli reports in English and Hindi.',
    category: 'AI & Web Application',
    images: [astroimg, astro1, astro2, astro3, astro4, astro5, astro6],
    liveUrl: 'https://astrology-r1ns.vercel.app/',
    overview: (
      <>

        <p>
          <strong>Jyotishh Vaastu</strong> is a modern, full-stack AI astrology and numerology platform engineered to deliver deep Vedic astrology insights, personalized numerological reports, and Vaastu guidance to users.
        </p>
        <p>
          By combining traditional Vedic algorithms with advanced <strong>Google Gemini AI</strong> models, the platform generates comprehensive, high-precision life prediction reports tailored to each user's exact date, time, and birthplace coordinates.
        </p>
        <p>
          The system offers seamless bilingual generation (supporting both English and Hindi) and automatically compiles personalized numerology analysis reports into beautifully formatted PDF documents available for instant download.
        </p>
        <p>
          The platform also provides a curated collection of <strong>Vedic e-books</strong>, allowing users to explore and purchase valuable astrology, numerology, and Vaastu resources online.
        </p>
      </>

    ),
    techStack: {
      frontend: ['React.js', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'Google Gemini AI API', 'REST APIs'],
      database: ['MongoDB'],
      tools: ['Vercel', 'Render', 'Postman', 'Nodemailer- Brevo email services'],
    },
    prevProject: null,
    nextProject: {
      title: 'JYOTISHH VAASTU ADMIN',
      link: '/projects/jyotishh-vaastu-admin',
    },
  },

  'jyotishh-vaastu-admin': {
    id: 'jyotishh-vaastu-admin',
    title: 'JYOTISHH VAASTU ADMIN',
    subtitle: 'Enterprise management portal and analytics dashboard for managing user data, reports, revenue, e-books, dynamic pricing, and customer queries.',
    category: 'Admin Dashboard',
    images: [astroadmin1, astroadmin2, astroadmin3, astroadmin4, astroadmin5, astroadmin6],
    liveUrl: 'https://astrology-a1v6.vercel.app/',
    overview: (
      <>
        <p>
          <strong>Jyotishh Vaastu Admin</strong> is the central management dashboard built to streamline and control the backend operations of the Jyotishh Vaastu platform. It provides administrators with dedicated tools to manage user data, reports, revenue, e-books, pricing, and customer queries from a single platform.
        </p>
        <p>
          Dashboard provides comprehensive insights into report activity, revenue, and platform performance, enabling administrators to efficiently monitor and manage key operations.
        </p>
        <p>
          Administrators can manage generated reports, review user details, dynamically update report and e-book pricing, manage e-book content, and monitor revenue-related information to keep the platform services and offerings up to date.
        </p>
        <p>
          The platform also includes query management functionality, allowing administrators to review and resolve user queries efficiently.
        </p>

      </>
    ),
    techStack: {
      frontend: ['React.js', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'JWT Authentication', 'REST APIs'],
      database: ['MongoDB', 'Database Design & Management'],
      tools: ['Vercel', 'Postman', 'Git & GitHub'],
    },
    prevProject: {
      title: 'JYOTISHH VAASTU',
      link: '/projects/jyotishh-vaastu',
    },
    nextProject: {
      title: 'AI-POWERED DAILY BLOG',
      link: '/projects/ai-blog',
    },
  },

  'ai-blog': {
    id: 'ai-blog',
    title: 'AI-POWERED DAILY BLOG',
    subtitle: 'MERN stack blogging platform for reading and searching blogs, with AI-powered content creation and intelligent blog design assistance.',
    category: 'AI & Content Management',
    images: [blog1, blog2, blog3, blog4],
    liveUrl: 'https://blogs-topaz-psi.vercel.app/',
    overview: (
      <>
        <p>
          <strong>AI-Powered Daily Blog</strong> is a blogging platform designed for users to easily discover, search, read, and create engaging blog content in one place.
        </p>
        <p>
          The platform allows users to explore blogs across different categories, quickly search for specific topics or keywords, and enjoy a clean, responsive reading experience.
        </p>
        <p>
          Users can also customize and design their blogs with AI assistance, making it easier to transform ideas into visually appealing and well-organized articles.
        </p>
        <p>
          With an intuitive and <b>user-friendly</b> interface, the platform makes the complete blogging experience simple-from discovering and reading articles to creating and designing new blogs with AI-powered assistance.
        </p>
      </>
    ),
    techStack: {
      frontend: ['React.js', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'Google Gemini AI API', 'REST APIs'],
      database: ['MongoDB'],
      tools: ['Vercel', 'Postman', 'Git & GitHub'],
    },
    prevProject: {
      title: 'JYOTISHH VAASTU ADMIN',
      link: '/projects/jyotishh-vaastu-admin',
    },
    nextProject: {
      title: 'E-COMMERCE',
      link: '/projects/mern-ecommerce',
    },
  },

  'mern-ecommerce': {
    id: 'mern-ecommerce',
    title: 'E-COMMERCE',
    subtitle: 'Modern E-commerce application featuring product discovery, category-based filtering, user authentication, shopping cart management, secure checkout, and responsive design.',
    category: 'E-Commerce',
    images: [ecom1, ecom2, ecom3, ecom4, ecom5, ecom6, ecom7],
    liveUrl: 'https://ecommerce-myweb4.vercel.app/',
    overview: (
      <>
        <p>
          The platform allows users to easily discover and browse a wide range of products through categorized collections. Users can search for products, apply category and price-based filters, view detailed product information, and explore products through an intuitive and responsive interface.
        </p>
        <p>
          The application includes user authentication and shopping cart functionality, allowing users to securely manage their accounts, add or remove products from their cart, update quantities, and review their selected items before placing an order.
        </p>
        <p>
          The complete shopping experience is designed to be fast, responsive, and easy to use across different devices. The application combines a clean frontend with a robust backend and database integration to efficiently manage products, users, carts, and orders.
        </p>
      </>
    ),
    techStack: {
      frontend: ['React.js', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'JWT Auth', 'Bcrypt.js', 'REST APIs'],
      database: ['MongoDB'],
      tools: ['Vercel', 'Postman', 'Git & GitHub'],
    },
    prevProject: {
      title: 'AI-POWERED DAILY BLOG',
      link: '/projects/ai-blog',
    },
    nextProject: {
      title: 'E-COMMERCE ADMIN',
      link: '/projects/mern-ecommerce-admin',
    },
  },

  'mern-ecommerce-admin': {
    id: 'mern-ecommerce-admin',
    title: 'E-COMMERCE ADMIN',
    subtitle: 'E-commerce admin dashboard for product and category management, inventory control, order tracking, customer management, and store operations.',
    category: 'Admin Dashboard',
    images: [ecomadmin1, ecomadmin2, ecomadmin3, ecomadmin4],
    liveUrl: 'https://e-commerce-admin-myweb4.vercel.app/',
    overview: (
      <>
        <p>
          <strong>E-Commerce Admin Dashboard</strong> is a centralized management portal built to provide store administrators with complete control over products, orders.
        </p>
        <p>
          The dashboard provides an overview of important store activities, including product inventory, order information, customer data.
        </p>
        <p>
          Administrators can add, update, and delete products, manage product categories, upload multiple product images.
        </p>
        <p>
          The dashboard also enables administrators to manage customer orders, track order details and statuses, review customer information, and efficiently handle day-to-day store operations through a clean and responsive interface.
        </p>
      </>
    ),
    techStack: {
      frontend: ['React.js', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'JWT Auth', 'REST APIs'],
      database: ['MongoDB'],
      tools: ['Vercel', 'Postman', 'Git & GitHub'],
    },
    prevProject: {
      title: 'E-COMMERCE',
      link: '/projects/mern-ecommerce',
    },
    nextProject: {
      title: 'JYOTISHH VAASTU',
      link: '/projects/jyotishh-vaastu',
    },
  },
};

// Aliases for alternate route slugs
projectsData['ecommerce-admin'] = projectsData['mern-ecommerce-admin'];
