'use client';
import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

export default function Contacts() {
  const [send, setSend] = useState(false);
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !name || !message || !checked) {
      alert('Please fill all fields');
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(
          'service_uw75wwp',
          'template_b2ozi7e',
          form.current,
          '2ddtG95KQo0tr7mmB'
        )
        .then(
          (result) => {
            setName('');
            setEmail('');
            setMessage('');
            setChecked(false);
            setSend(true);
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };

  useEffect(() => {
    //const interval of send message stay duration

    const timeoutID = window.setTimeout(() => {
      setSend(false);
    }, 2000);

    return () => window.clearTimeout(timeoutID);
  }, [send]);

  return (
    <div className="flex   flex-col mt-20 mb-20  w-full mx-auto ">
      <h1 className="text-center text-3xl font-bold ">Contact me</h1>
      <p className="text-center  text-sm mb-5 mt-1">Please fill the form.</p>
      {send && (
        <p className="bg-white text-black text-center text-2xl font-bold">
          Thanks. Your Message has been sent Succesfully.
        </p>
      )}
      <form
        onSubmit={sendEmail}
        ref={form}
        className="flex flex-col  m-auto bg-slate-200 w-1/2 p-4 gap-5 md:w-auto md:mx-10"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-left"
          >
            Name
          </label>
          <input
            name="name"
            value={name}
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            required
            className="border border-gray-300 px-2 py-1 bg-transparent rounded"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-left"
          >
            Email
          </label>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
            id="email"
            required
            className="border border-gray-300 px-2 py-1 bg-transparent rounded"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-left"
          >
            Message
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            required
            placeholder="Write your message..."
            className="border border-gray-300 px-2 py-1 bg-transparent rounded h-32 "
          />
        </div>
        <div className="flex flex-start font-bold">
          <button
            className="bg-slate-600  hover:bg-slate-400 text-white py-4 rounded-xl w-32 "
            type="submit"
          >
            {send ? 'Sending...' : 'Submit'}
          </button>
        </div>
        <div className="">
          <input
            type="checkbox"
            required
            checked={checked}
            name="privacy"
            onChange={(e) => setChecked(e.target.checked)}
            className=""
          />
          <span className="px-1">
            By submitting this form, I confirm that I have read and understood
            the My Portfolio
          </span>
          <Link href="/privacy">
            <span className="text-red-300 hover:underline text-sm px-1">
              Privacy Statement.
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}
