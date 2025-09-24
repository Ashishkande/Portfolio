// src/components/Contact.jsx
const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">📩 Contact Me</h2>
      <form
        className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow space-y-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
