"use client";

import { useState } from "react";
import Button from "../../../components/Button";

/**
 * ContactForm Component
 * Handles contact form submission via mailto
 * @param {Object} props - Component props
 * @param {string} props.companyEmail - Company email address from contact details
 */
export default function ContactForm({ companyEmail = "Support@emtheme.com" }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(
      `${formData.subject} - From: ${formData.firstName} ${formData.lastName}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
    );

    const mailtoLink = `mailto:${companyEmail}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 100);
  };

  return (
    <div>
      <h3 className="text-2xl font-normal text-gray-600 uppercase tracking-widest mb-8">
        LEAVE A MESSAGE
      </h3>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First name"
              className="w-full px-0 py-3 border-0 border-b border-gray-400 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-300"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last name"
              className="w-full px-0 py-3 border-0 border-b border-gray-400 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-300"
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full px-0 py-3 border-0 border-b border-gray-400 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-300"
            required
          />
        </div>

        {/* Subject Field */}
        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject"
            className="w-full px-0 py-3 border-0 border-b border-gray-400 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-300"
            required
          />
        </div>

        {/* Message Field - Changed to textarea */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message"
            rows={4}
            className="w-full px-0 py-3 border-0 border-b border-gray-400 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-300 resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            type="submit"
            variant="secondary"
            size="md"
          >
            send message
          </Button>
        </div>
      </form>
    </div>
  );
}

