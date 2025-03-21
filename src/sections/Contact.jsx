import emailjs from "@emailjs/browser";

import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handelChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  
  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      emailjs.send("service_44xeuea", "template_bbvfw82", {
        from_name: form.name,
        to_name: "Faizi Ahmed",
        from_email: form.email,
        to_email: "faiziahmedcar@gmail.com",
        message: form.message,
      },"lmGYFhMdKvLWx5Q8U");
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="./assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container py-20">
          <h3 className="head-text">Let's get in touch</h3>
          <p className="text-lg text-white-600 mt-3 ">
            If you have any questions or would like to work together, please
            don't hesitate to contact me.
          </p>
          <form
            ref={formRef}
            onSubmit={handelSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handelChange}
                required
                className="field-input"
                placeholder="Faizi Ahmed"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handelChange}
                required
                className="field-input"
                placeholder="faiziahmedcar@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handelChange}
                required
                rows="5"
                className="field-input"
                placeholder="Write your message here..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="./assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
