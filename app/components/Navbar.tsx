import React from 'react';
import Link from 'next/link';

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
  return (
    <div className="flex justify-evenly  py-3 ">
      <Link
        href="/"
        className=" hover:text-blue-700"
      >
        MY Portfolio
      </Link>
      {navList.map((list) => (
        <nav
          key={list.id}
          className="text-blue-500 hover:text-blue-700"
        >
          <ul>
            <Link href={list.url}>{list.title}</Link>
          </ul>
        </nav>
      ))}
    </div>
  );
}
