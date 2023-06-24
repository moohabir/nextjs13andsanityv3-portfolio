'use client';
import { Menu, Close } from '@mui/icons-material';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { Router } from 'next/router';
import { useState } from 'react';

const navList = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'About',
    url: '/about',
  },
  {
    id: 3,
    title: 'Skills',
    url: '/skills',
  },
  {
    id: 4,
    title: 'Projects',
    url: '/projects',
  },
  {
    id: 5,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 6,
    title: 'Contact',
    url: '/contacts',
  },
];

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const handleClick = (url) => {
    setActiveItem(url);
    setShow(false);
  };

  // Check if current path matches any menu item URL
  const checkActiveItem = (url) => {
    return Router.pathname === url ? 'bg-slate-700' : '';
  };

  return (
    <div className="flex justify-center gap-10 sticky top-0 z-10 py-3 bg-slate-100">
      <Link
        href="/"
        className="hover:animate-bounce  px-20 text-black text-2xl font-bold"
      >
        MY Portfolio
      </Link>

      {/* Mobile version */}
      <div className="hidden md:block">
        <button
          className="text-black text-3xl font-bold focus:outline-none"
          onClick={() => setShow(!show)}
        >
          {show ? <Close /> : <Menu />}
        </button>
      </div>

      {/* Desktop version */}
      <div className="flex flex-row gap-20 md:hidden md:space-y-2">
        {navList.map((list) => (
          <nav
            key={list.id}
            className={`text-black text-center hover:text-slate-500 ${
              activeItem === list.url ? 'bg-slate-700' : ''
            }`}
          >
            <Link href={list.url}>{list.title}</Link>
          </nav>
        ))}
      </div>

      {/* Mobile version - Dropdown */}
      <AnimatePresence>
        {show && (
          <motion.div
            className="hidden md:block absolute z-20 bg-slate-100 w-full h-screen py-10 top-16 "
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5 }}
          >
            {navList.map((list) => (
              <motion.nav
                key={list.id}
                className={`text-black text-center hover:text-slate-500 block py-2 ${checkActiveItem(
                  list.url
                )}`}
                onClick={() => handleClick(list.url)}
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.5 }}
              >
                <Link href={list.url}>{list.title}</Link>
              </motion.nav>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
