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
    <div className="text-center  flex justify-center gap-5 flex-col mt-20 mb-20  w-1/2 mx-auto ">
      {/*send && (
          <p className="bg-slate-800 text-white text-center text-3xl font-bold">
            Thanks. Your Message has been sent Succesfully
          </p>
        )*/}
      <h1 className="text-center text-3xl font-bold ">Contact me</h1>
      <form
        onSubmit={sendEmail}
        ref={form}
        className="flex flex-col  m-auto bg-slate-200 w-full p-4 gap-5"
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
        <div className="flex flex-start">
          <button
            className="bg-slate-600 text-white p-4 rounded-xl w-32 "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
