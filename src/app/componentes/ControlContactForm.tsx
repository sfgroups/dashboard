'use client';

import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('Please enter your first name.'),
  lastName: yup.string().required('Please enter your last name.'),
  email: yup.string().email('Please enter a valid email address.').required('Please enter your email address.'),
  message: yup.string().required('Please enter your message.'),
});

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function ControlContactForm() {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      lastName: "Sample",
      email: "test@test.com"
    },
    resolver: yupResolver(schema),
  });



  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) =>   {
    console.log(data);
    setIsSubmitting(true);
    // handle form submission here
    console.log(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("firstName", event.target.value);
    if (event.target.value.toUpperCase() === "auto".toUpperCase()) {
      setValue("lastName", "Changed Name");
    } 
  };

  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">      
      <div className="mb-4">
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="First Name"
              onChange={onChangeHandler}
              className={`form-input ${errors.firstName ? 'border-red-500' : ''}`}
            />
          )}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
        )}
      </div>
      <div className="mb-4">
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Last Name"
              className={`form-input ${errors.lastName ? 'border-red-500' : ''}`}
            />
          )}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
        )}
      </div>
      <div className="mb-4">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              placeholder="Email Address"
              className={`form-input ${errors.email ? 'border-red-500' : ''}`}
            />
          )}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              rows={5}
              placeholder="Message"
              className={`form-input ${errors.message ? 'border-red-500' : ''}`}
            />
          )}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
 

      <button type="submit" className="text-white font-semibold bg-blue-500 hover:bg-blue-700
         border-blue-700 border-b hover:border-indigo-900 
         transition-all px-6 py-2 rounded-full" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {isSubmitted && (
        <p className="text-green-500 mt-4">Thank you for contacting us!</p>
      )}
    </form>
    
  );
}
