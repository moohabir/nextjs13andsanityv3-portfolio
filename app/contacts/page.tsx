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
    <div className="flex justify-center py-4 ">
      <div className="w-1/2 ">
        {send && (
          <p className="bg-color_blue text-center text-3xl font-bold">
            Thanks. Your Message has been sent Succesfully
          </p>
        )}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="flex flex-col p-4 space-y-4  bg-slate-500 rounded "
        >
          <h1 className="text-center text-3xl font-bold ">Contact me</h1>
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
            className="bg-blue-500 text-white px-4 py-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
