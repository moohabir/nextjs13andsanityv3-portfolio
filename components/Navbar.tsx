'use client';

import { Menu, Close } from '@mui/icons-material';
import Link from 'next/link';
//import { Close, Menu } from '@mui/icons-material';
import { useState } from 'react';
//import { IconButton } from '@mui/material';

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
  return (
    <div className="flex justify-evenly sticky top-0 z-10 py-3 bg-slate-600 items-center">
      <Link
        href="/"
        className=" hover:text-blue-600 text-slate-100 text-2xl font-bold"
      >
        MY Portfolio
      </Link>

      {navList.map((list) => (
        <nav
          key={list.id}
          className="text-blue-500 text-center hover:text-slate-100 "
        >
          <Link
            href={list.url}
            className=""
          >
            {list.title}
          </Link>
        </nav>
      ))}

      {/* <button
        onClick={() => setShow(!show)}
        className="text-center  p-0 text-slate-100  md:hidden"
      >
        {show ? <Close /> : <Menu />}

      </button>*/}
      <div>
        <button
          className="text-slate-100 text-3xl font-bold  sm:hidden focus:outline-none items-center"
          onClick={() => setShow(!show)}
        >
          {show ? <Close /> : <Menu />}
        </button>
      </div>
    </div>
  );
}
