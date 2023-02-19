'use client';

import { useState } from 'react';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const initialFormValues: FormValues = {
  name: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
    setFormValues(initialFormValues);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <label className="block font-medium mb-1" htmlFor="name">
        Name
      </label>
      <input
        className="block w-full p-2 border rounded"
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        required
      />

      <label className="block font-medium my-4" htmlFor="email">
        Email
      </label>
      <input
        className="block w-full p-2 border rounded"
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        required
      />

      <label className="block font-medium my-4" htmlFor="message">
        Message
      </label>
      <textarea
        className="block w-full p-2 border rounded"
        id="message"
        name="message"
        value={formValues.message}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
