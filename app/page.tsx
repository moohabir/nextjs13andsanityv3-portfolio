//import styles from './page.module.css';
import { Inter } from 'next/font/google';
import Banner from '../components/Banner';
import About from './about/page';
import Skills from './skills/page';
import Projects from './projects/page';
import Contacts from './contacts/page';
import Blog from './blog/page';
import Service from './service/page';

export const revalidate = 10;

export default function Home() {
  return (
    <main className="bg-#ffff text-black flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
      <Skills />
      <About />
      <Projects />
      <Service />
      <Blog />
      <Contacts />
    </main>
  );
}
