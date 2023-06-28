'use client';
import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contacts() {
  const [send, setSend] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
            //alert(result.text);
            if (result.text) {
              setName('');
              setEmail('');
              setMessage('');
            }
            setSend(true);
            if (!email || !name || !message) {
              setSend(false);
              alert('please fill all fields');
            }
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
    <div className="py-4 text-center mb-10 items-center flex justify-center flex-col pt-10">
      <div className="w-full">
        {send && (
          <p className="bg-slate-800 text-white text-center text-3xl font-bold">
            Thanks. Your Message has been sent Succesfully
          </p>
        )}
        <h1 className="text-center text-3xl font-bold ">Contact me</h1>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="p-4 space-y-4 rounded bg-slate-200 grid grid-cols-1 gap-10  md:grid-cols-1 md:gap-10  mx-20 "
        >
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            value={name}
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            className="border border-gray-300 px-2 py-1 bg-transparent rounded"
          />

          <label htmlFor="email">Email:</label>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
            id="email"
            className="border border-gray-300 px-2 py-1 bg-transparent rounded"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            placeholder="Your Message"
            className="border border-gray-300 px-2 py-1 bg-transparent rounded"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-xl"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
