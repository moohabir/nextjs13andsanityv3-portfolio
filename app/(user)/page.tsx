//import styles from './page.module.css';
import { Inter } from 'next/font/google';
import Banner from '../../components/Banner';
import About from '../about/page';
import Skills from '../skills/page';
import Projects from '../projects/page';
import Contacts from '../contacts/page';
import Blog from '../blog/page';

//import { groq } from 'next-sanity';
//import { client } from '@/lib/client';
//import BlogList from './components/BlogList';

//const query = groq`
//*[_type=="post"]{
// ...,
//author->
//}|order(_createAt desc)`;

//type props = {
//query: string;
//};
export default function Home() {
  return (
    <main className="bg-#ffff text-black ">
      <Banner />

      <Skills />
      <About />
      <Projects />
      <Blog />
      <Contacts />
    </main>
  );
}
