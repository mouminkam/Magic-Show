"use client";

import { useState } from "react";
import Button from "../../../../components/Button";
import SocialMediaIcons from "../../../../components/SocialMediaIcons";

/**
 * CommentsSection Component
 * Displays comments list and comment form
 * 
 * @param {Object} props
 * @param {Array} props.comments - Array of comment objects
 * @param {string|number} props.postId - Blog post ID
 */
export default function CommentsSection({ comments = [], postId }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Comment posted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section className="comment-sec lg:px-10 mt-16 lg:mt-12 border-gray-200">
      <div className="container mx-auto px-4">
        <div className="w-full mx-auto">
          {/* Comment Header */}
          <div className="comment-header py-8 mb-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center ">
              {/* Social Share */}
              <div className="share-social flex  max-lg:flex max-lg:justify-between">
                <span className="text-2xl  text-gray-600 uppercase mr-4">
                  Share
                </span>
                <SocialMediaIcons variant="default" size="md" className="ml-2" />
              </div>
            </div>
          </div>
          <h1 className="text-2xl text-center lg:text-3xl text-gray-600 uppercase mb-4 lg:mb-5 max-lg:mb-10">
            {comments.length} Comment{comments.length !== 1 ? "s" : ""}
          </h1>
          {/* Comments List */}
          <ul className="comments-list space-y-12 mb-16">
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="comment-item border-b lg:px-20 border-gray-300 pb-12 last:border-b-0"
              >
                <div className="comment-info">
                  <div className="header flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 max-lg:items-center max-lg:justify-center max-lg:text-center max-lg:gap-10">
                    <div className="heading mb-4 lg:mb-0">
                      <h2 className="text-xl text-gray-700 uppercase mb-2">
                        {comment.author}
                      </h2>
                      <time className="time text-gray-500 text-sm uppercase tracking-wider">
                        {comment.date}
                      </time>
                    </div>
                  </div>
                  <div className="flex justify-between items-center max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:text-center max-lg:gap-10">
                    <p className="text-gray-500 text-lg leading-9 w-3/4 mb-4 max-lg:w-full">
                      {comment.content}
                    </p>
                    <div className="">
                      <Button
                        variant="secondary"
                        size="md"
                        className="lg:px-18"
                      >
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Leave Comment Form */}
          <div className="leave-comment border-t lg:px-10 border-gray-300 pt-16 mt-16">
            <h2 className="text-2xl text-gray-700 uppercase tracking-widest mb-12 flex items-center gap-2">
              post a comment
            </h2>

            <form onSubmit={handleSubmit} className="comment-form">
              <div className="space-y-8">
                {/* Name Fields */}
                <div className="form-group grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="col">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-control w-full border-b border-gray-400 py-2 focus:border-gray-600 outline-none transition-colors duration-250"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-control w-full border-b border-gray-400 py-2 focus:border-gray-600 outline-none transition-colors duration-250"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control w-full border-b border-gray-400 py-2 focus:border-gray-600 outline-none transition-colors duration-250"
                    placeholder="Email"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-control w-full border-b border-gray-400 py-2 focus:border-gray-600 outline-none transition-colors duration-250"
                    placeholder="Subject"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-control w-full border-b border-gray-400 py-2 focus:border-gray-600 outline-none transition-colors duration-250 resize-none"
                    placeholder="Your message"
                  />
                </div>

                {/* Submit Button */}
                <div className="form-group flex justify-center my-10  ">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="secondary"
                    size="md"
                    className="uppercase "
                  >
                    {isSubmitting ? "Posting" : "post comment"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

