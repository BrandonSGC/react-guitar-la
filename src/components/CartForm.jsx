import { useState } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "./";

export const CartForm = () => {
  const [showMessage, setShowMessage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setShowMessage(true);
    reset();

    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);
    return () => clearTimeout(timer);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between gap-2">
        <div>
          <label>Name:</label>
          <input
            className="w-full px-4 py-2 border border-yellow-600"
            type="text"
            placeholder="First name"
            {...register("name", { required: "Please enter your name." })}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label>Last name:</label>
          <input
            name="lastname"
            className="w-full px-4 py-2 border border-yellow-600"
            type="text"
            placeholder="Last name"
            {...register("lastName", {
              required: "Please enter your last name.",
            })}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label>Email:</label>
        <input
          className="w-full px-4 py-2 border border-yellow-600"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Please enter your email.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address.",
            },
          })}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label>Mobile number:</label>
        <input
          className="w-full px-4 py-2 border border-yellow-600"
          type="tel"
          placeholder="Mobile number"
          {...register("mobileNumber", {
            required: "Please enter your phone number.",
            minLength: {
              value: 8,
              message: "Mobile number must be at least 8 characters.",
            },
            maxLength: {
              value: 12,
              message: "Mobile number must be at most 12 characters.",
            },
          })}
        />
        {errors.mobileNumber && (
          <p className="text-sm text-red-500">{errors.mobileNumber.message}</p>
        )}
      </div>

      {isSubmitting && <Spinner className="mx-auto my-2" />}

      {showMessage && (
        <p className="p-2 text-center text-white bg-green-600">
          Pronto un agente te contactará para finalizar la compra.
        </p>
      )}

      <button className="block px-8 py-2 font-bold text-center text-white uppercase bg-yellow-600 border cursor-pointer hover:bg-yellow-700">
        Confirmar
      </button>
    </form>
  );
};
