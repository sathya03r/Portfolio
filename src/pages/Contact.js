import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = form;
    
    // Encode form data for mailto link
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    const mailtoLink = `mailto:jrgps6268@gmail.com?subject=${subject}&body=${body}`;

    // Open the user's email client with the pre-filled message
    window.location.href = mailtoLink;
  };

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
