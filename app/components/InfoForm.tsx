"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function InfoForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    additionalName: "",
    email: "",
    message: "",
  });

  const [isEmailValid, setIsEmailValid] = useState<boolean>(true); // Track email validity

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // If the email field changes, check if it's valid
    if (name === "email") {
      const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
      setIsEmailValid(emailPattern.test(value));
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email.trim() || !isEmailValid) {
      alert("Vänligen ange en giltig e-postadress.");
      return;
    }

    const subject = encodeURIComponent(
      "Förfrågan om sprutlackering – Lackverket"
    );

    const body = encodeURIComponent(
      `Hej Lackverket,

      Jag är intresserad av era tjänster och vill gärna ha mer information.

      Förnamn: ${formData.firstName}
      Tilltalsnamn: ${formData.additionalName}
      E-post: ${formData.email}

      Meddelande:
      ${formData.message}

      Vänliga hälsningar,
      ${formData.firstName}
      `
    );

    const mailtoLink = `mailto:info@lackverket.se?subject=${subject}&body=${body}`;

    // Triggered directly by user submit → correct browser behavior
    window.location.href = mailtoLink;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex flex-col gap-6 
        md:flex-col 
        lg:flex-row lg:flex-wrap 
        w-full max-w-3xl 
        p-6 
        justify-start
        shadow 
        rounded
        my-6
        bg-transparent
      "
    >
      {/* Form Title */}
      <div className="font-bold text-[2.5rem] lg:w-full">
        <p>Kontakta oss</p>
      </div>

      {/* icon links */}
      <div className="flex justify-start items-center gap-4 wrap-break-word lg:w-full">
        <Link href="">
          <Image
            src="/assets/facebook_svg.svg"
            alt="facebook logo"
            width={30}
            height={30}
          />
        </Link>

        <Link href="">
          <Image
            src="/assets/twitter_svg.svg"
            alt="twitter logo"
            width={30}
            height={30}
          />
        </Link>
 
        <Link href="">
          <Image
            src="/assets/linkedin_svg.svg"
            alt="linkedin logo"
            width={30}
            height={30}
          />
        </Link>

        <Link href="">
          <Image
            src="/assets/instagram_svg.svg"
            alt="instagram logo"
            width={30}
            height={30}
          />
        </Link>
      </div>

      {/* First Name */}
      <div className="flex flex-col w-full lg:w-[48%]">
        <label htmlFor="firstName" className="font-light mb-1 text-[20px]">
          Första namn
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
      </div>

      {/* Additional Name */}
      <div className="flex flex-col w-full lg:w-[48%] text-[#222]">
        <label htmlFor="additionalName" className="font-light mb-1 text-[20px]">
          Tilltals namn
        </label>
        <input
          id="additionalName"
          name="additionalName"
          type="text"
          value={formData.additionalName}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
      </div>

      {/* Email (required) */}
      <div className="flex flex-col w-full">
        <label htmlFor="email" className="font-light mb-1 text-[20px]">
          E-post <span className="text-red-600">*</span>
        </label>
        <input
          required
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
        {!isEmailValid && formData.email && (
          <p className="text-red-600 text-sm mt-2">
            Please enter a valid email address.
          </p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col w-full">
        <label htmlFor="message" className="font-light mb-1 text-[20px]">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isEmailValid || !formData.email.trim()}
        className={`
          px-4 py-2 
          ${
            isEmailValid && formData.email.trim()
              ? "bg-[#237374]"
              : "bg-gray-400"
          }  // Button color changes based on validity
          text-white 
          rounded 
          w-full 
          disabled:bg-gray-400 
          mt-2
          hover:bg-white hover:text-[#237374] hover:border-[#237374] hover:border-2
          transition-all duration-100 ease-in-out
        `}
      >
        Submit
      </button>
    </form>
  );
}
