'use client';
import { Facebook, GitHub, YouTube } from '@mui/icons-material';
import { Button, Divider, IconButton } from '@mui/material';
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

export default function Footer() {
  return (
    <div className="footer">
      <Divider />
      <div className="flex justify-evenly">
        <Link href="/">
          <h1 className="text-2xl font-bold p-2">My Portfolio</h1>
        </Link>
        <div className="flex flex-col p-4">
          <h2 className="font-bold text-xl ">Socials</h2>
          <Link href="https://www.facebook.com/profile.php?id=100095326840481">
            <button className="hover:animate-bounce p-4">
              <Facebook />
            </button>
          </Link>

          <Link href="https://github.com/moohabir ">
            <button className="  hover:animate-bounce p-4">
              <GitHub />
            </button>
          </Link>

          <Link href="https://www.youtube.com/channel/UCSVGSFG-iU56a5Z9Xs4PEXQ">
            <button className=" hover:animate-bounce p-4">
              <YouTube />
            </button>
          </Link>
        </div>

        <div className="flex flex-col justify-center p-4 ">
          <h2 className="font-bold text-xl">Pages</h2>
          {navList.map((list) => (
            <nav
              key={list.id}
              className="text-black text-center hover:text-slate-500  py-2 flex"
            >
              <Link href={list.url}>{list.title}</Link>
            </nav>
          ))}
        </div>
      </div>
      <Divider />
      <div className="p-4 text-black flex justify-center">
        <p>&copy;Mohamed Abdille, 2023</p>
      </div>
    </div>
  );
}
