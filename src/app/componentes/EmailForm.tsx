'use client';

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function  EmailForm  () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mb-4">
        <label htmlFor="firstName" className="mb-2">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          {...register("firstName")}
          className={`border ${
            errors.firstName ? "border-red-500" : ""
          } px-4 py-2 rounded-md outline-none`}
        />
        {errors.firstName && (
          <p className="text-red-500 mt-2">{errors.firstName.message}</p>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="lastName" className="mb-2">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          {...register("lastName")}
          className={`border ${
            errors.lastName ? "border-red-500" : ""
          } px-4 py-2 rounded-md outline-none`}
        />
        {errors.lastName && (
          <p className="text-red-500 mt-2">{errors.lastName.message}</p>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={`border ${
            errors.email ? "border-red-500" : ""
          } px-4 py-2 rounded-md outline-none`}
        />
        {errors.email && (
          <p className="text-red-500 mt-2">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="password" className="mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className={`border ${
            errors.password ? "border-red-500" : ""
          } px-4 py-2 rounded-md outline-none`}
        />
        {errors.password && (
          <p className="text-red-500 mt-2">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
      </form>
  );
}
