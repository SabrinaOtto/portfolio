import React, { useState } from 'react';
import { FaEnvelope, FaExternalLinkAlt, FaLinkedin, FaBriefcase, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CeoPortfolio() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const services = [
    {
      title: 'Automated Testing Solutions',
      desc: 'Comprehensive automated testing services to ensure your software quality and reliability with cutting-edge tools and methodologies.',
      url: 'https://www.fiverr.com/s/1q94G06',
      tech: ['Playwright', 'Cypress', 'Selenium', 'Test Automation']
    },
    {
      title: 'QA Strategy & Consulting',
      desc: 'Expert quality assurance consulting to build robust testing strategies that integrate seamlessly with your development lifecycle.',
      url: 'https://www.fiverr.com/s/LdYorKY',
      tech: ['Test Strategy', 'QA Consulting', 'Process Improvement']
    },
    {
      title: 'CI/CD Pipeline Integration',
      desc: 'Set up continuous integration and deployment pipelines with automated testing gates for faster, safer releases.',
      url: 'https://www.fiverr.com/s/WEKmadl',
      tech: ['Jenkins', 'GitHub Actions', 'Docker', 'CI/CD']
    },
    {
      title: 'Testing Framework Development',
      desc: 'Custom test automation frameworks built to your specifications with maintainable code and best practices.',
      url: 'https://www.fiverr.com/s/DBN7pK7',
      tech: ['Framework Design', 'Page Object Model', 'Best Practices']
    }
  ];

  const reviews = [
    {
      id: 1,
      client: "samtenz",
      country: "United States",
      rating: 5,
      date: "3 years ago",
      text: "Very helpful, worked with me the whole time, and was very responsive. I definitely recommend them for assistance!",
      repeatClient: true,
      service: "Software Testing"
    },
    {
      id: 2,
      client: "Client from Austria",
      country: "Austria",
      rating: 5,
      date: "3 months ago",
      text: "Sabrina Otto delivered a great experience with her attention to detail and professionalism. The work was bug free and top-notch. It was a pleasure working with someone so polite and understanding! 😊",
      repeatClient: false,
      service: "Software Testing"
    }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      index < rating ?
        <FaStar key={index} className="text-yellow-400 inline" /> :
        <FaStar key={index} className="text-gray-300 inline" />
    ));
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all fields.');
      return;
    }

    // Since we don't have a backend, we'll just show a success message and reset the form.
    toast.success('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 text-gray-900">
      {/* Header */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-xl">
            <span className="font-bold text-white text-lg">SO</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Sabrrina Otto</h1>
            <p className="text-blue-600 text-sm font-semibold">Chief Executive Officer — Automation Testing & Quality Assurance</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a className="px-4 py-2 rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200 transition" href="#services">Services</a>
          <a className="px-4 py-2 rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200 transition" href="#expertise">Expertise</a>
          <a className="px-4 py-2 rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200 transition" href="#reviews">Reviews</a>
          <a className="px-4 py-2 rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200 transition" href="#contact">Contact</a>
          <a className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:from-blue-600 hover:to-purple-600 transition" href="https://www.fiverr.com/sabrina_otto/" target="_blank" rel="noreferrer">
            <FaBriefcase /> Fiverr Services
          </a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-16">
          <div>
            <p className="text-blue-600 text-sm uppercase font-bold tracking-widest mb-4">Leadership • Innovation • Excellence</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Chief Executive Officer — <span className="gradient-text">Driving Excellence in Automated Testing</span>
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Leading Otto's Automated Testing with a vision for delivering superior quality assurance solutions.
              I specialize in building scalable testing frameworks and empowering teams to achieve exceptional software quality.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#services" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-purple-600 transition">View Services</a>
              <a href="mailto:sabrinaotto3331@gmail.com" className="px-6 py-3 rounded-full border-2 border-blue-500 text-blue-600 font-semibold hover:bg-blue-50 transition">Contact Me</a>
            </div>

            <div className="flex items-center gap-4 text-blue-600 text-sm font-medium">
              <FaLinkedin />
              <a className="underline" href="https://www.linkedin.com/in/sabrrina-otto-a84b96204/" target="_blank" rel="noreferrer">linkedin.com/in/sabrrina-otto</a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="professional-card rounded-2xl p-6 shadow-xl border border-gray-200"
          >
            <div className="h-64 rounded-xl overflow-hidden border border-blue-200 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold mb-2">Otto's Automated Testing</div>
                <div className="text-sm opacity-90">Quality • Innovation • Leadership</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
                <div className="text-blue-600 text-xs uppercase font-bold mb-1">Leadership Focus</div>
                <div className="font-semibold text-gray-900">Business Strategy & Growth</div>
              </div>
              <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-center">
                <div className="text-purple-600 text-xs uppercase font-bold mb-1">Specialization</div>
                <div className="font-semibold text-gray-900">Test Automation Excellence</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="my-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Professional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <article key={idx} className="professional-card rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                  <a className="text-blue-600 inline-flex items-center gap-2 text-sm font-semibold" href={service.url} target="_blank" rel="noreferrer">
                    <FaBriefcase />
                  </a>
                </div>
                <p className="mb-4 text-gray-600">{service.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tech.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">{t}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a href={service.url} target="_blank" rel="noreferrer" className="text-sm font-semibold inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                    View Service <FaExternalLinkAlt />
                  </a>
                  <span className="text-purple-600 text-xs font-medium">Available on Fiverr</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="my-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Areas of Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Test Automation', 'Quality Strategy', 'Team Leadership', 'Business Development', 'Playwright', 'Cypress', 'Selenium', 'CI/CD', 'Process Improvement', 'Client Relations', 'Project Management', 'Strategic Planning'].map((s, i) => (
              <div key={i} className="p-5 rounded-xl text-center border border-gray-200 bg-white shadow-lg hover:shadow-xl transition">
                <div className="font-bold text-gray-900 mb-2">{s}</div>
                <div className="text-blue-600 text-xs font-semibold">Expert Level</div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="my-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Client Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="professional-card rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-semibold text-gray-900">{review.client}</div>
                    <div className="text-gray-600 text-sm">{review.country}</div>
                  </div>
                  <div className="text-yellow-400">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{review.text}</p>
                <div className="text-sm text-gray-500">
                  {review.date} • {review.service}
                </div>
                {review.repeatClient && (
                  <div className="mt-2">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Repeat Client</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Executive Profile Section */}
        <section id="experience" className="my-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Executive Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-gray-200">
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                As CEO of Otto's Automated Testing, I lead with a vision for transforming software quality assurance through innovative automation solutions.
                My leadership drives business growth while maintaining our commitment to exceptional service delivery and client satisfaction.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>Strategic leadership in automated testing services and consulting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>Business development and client relationship management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>Team building and professional development leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>Quality assurance strategy and process optimization</span>
                </li>
              </ul>
            </div>

            <aside className="p-8 rounded-2xl bg-white border border-gray-200">
              <h4 className="font-bold text-xl text-gray-900 mb-4">Professional Focus</h4>
              <div className="space-y-3 mb-6">
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="font-semibold text-gray-900">Leading automated testing innovation</div>
                </div>
                <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
                  <div className="font-semibold text-gray-900">Driving business growth in QA services</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Location</h5>
                  <p className="text-gray-600">Lahore Division, Punjab, Pakistan</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Professional Network</h5>
                  <p className="text-gray-600">216+ LinkedIn connections</p>
                </div>
              </div>

              <a className="mt-6 inline-block px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:from-blue-600 hover:to-purple-600 transition" href="mailto:sabrinaotto3331@gmail.com">
                Contact for Opportunities
              </a>
            </aside>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="p-8 rounded-2xl bg-white border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full p-4 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full p-4 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows={6}
                      className="w-full p-4 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                  <div className="flex items-center gap-6">
                    <button type="submit" className="px-8 py-4 rounded-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:from-blue-600 hover:to-purple-600 transition">
                      Send Message
                    </button>
                    <div className="text-sm text-gray-600">
                      Or email directly: <a href="mailto:sabrinaotto3331@gmail.com" className="text-blue-600 font-semibold underline">sabrinaotto3331@gmail.com</a>
                    </div>
                  </div>
                  <ToastContainer position="bottom-right" theme="light" autoClose={3000} />
                </form>
              </div>
            </div>

            <aside className="p-8 rounded-2xl bg-white border border-gray-200">
              <h4 className="font-bold text-xl text-gray-900 mb-6">Quick Contact</h4>
              <div className="space-y-4 mb-8">
                <div>
                  <h5 className="text-blue-600 text-sm font-semibold mb-1">Email</h5>
                  <a className="text-gray-700 font-medium" href="mailto:sabrinaotto3331@gmail.com">sabrinaotto3331@gmail.com</a>
                </div>
                <div>
                  <h5 className="text-blue-600 text-sm font-semibold mb-1">LinkedIn</h5>
                  <a className="text-gray-700 font-medium" href="https://www.linkedin.com/in/sabrrina-otto-a84b96204/" target="_blank" rel="noreferrer">Sabrrina Otto</a>
                </div>
                <div>
                  <h5 className="text-blue-600 text-sm font-semibold mb-1">Fiverr</h5>
                  <a className="text-gray-700 font-medium" href="https://www.fiverr.com/sabrina_otto/" target="_blank" rel="noreferrer">View All Services</a>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <h5 className="text-blue-600 text-sm font-bold uppercase mb-2">Business Inquiries</h5>
                <p className="text-sm text-gray-600">
                  Open to strategic partnerships, consulting opportunities, and executive collaborations.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <footer className="mt-20 border-t border-gray-300 pt-8 pb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-6">
              <a href="https://www.linkedin.com/in/sabrrina-otto-a84b96204/" target="_blank" rel="noreferrer" className="text-blue-600 inline-flex items-center gap-2 font-semibold">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://www.fiverr.com/sabrina_otto/" target="_blank" rel="noreferrer" className="text-blue-600 inline-flex items-center gap-2 font-semibold">
                <FaBriefcase /> Fiverr
              </a>
              <a href="mailto:sabrinaotto3331@gmail.com" className="text-blue-600 inline-flex items-center gap-2 font-semibold">
                <FaEnvelope /> Email
              </a>
            </div>
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Sabrrina Otto — Chief Executive Officer, Otto's Automated Testing
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}