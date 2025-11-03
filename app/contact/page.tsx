'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Orb from '../components/orb';


export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Logo data for the LogoLoop
  const partnerLogos = [
    {
      src: "/logos/react.svg",
      alt: "React",
      href: "https://reactjs.org"
    },
    {
      src: "/logos/nextjs.svg",
      alt: "Next.js",
      href: "https://nextjs.org"
    },
    {
      src: "/logos/typescript.svg",
      alt: "TypeScript",
      href: "https://typescriptlang.org"
    },
    {
      src: "/logos/nodejs.svg",
      alt: "Node.js",
      href: "https://nodejs.org"
    },
    {
      src: "/logos/mongodb.svg",
      alt: "MongoDB",
      href: "https://mongodb.com"
    },
    {
      src: "/logos/tailwind.svg",
      alt: "Tailwind CSS",
      href: "https://tailwindcss.com"
    },
    {
      src: "/logos/git.svg",
      alt: "Git",
      href: "https://git-scm.com"
    },
    {
      src: "/logos/aws.svg",
      alt: "AWS",
      href: "https://aws.amazon.com"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Orb Background - Same as main page */}
      <div className="fixed inset-0 z-0">
        <Orb hue={0} hoverIntensity={0.2} rotateOnHover={true} />
      </div>

      {/* Dark Overlay for Readability - Same as main page */}
      <div className="fixed inset-0 z-1 bg-black/30" />

      {/* Content */}
      <div className="relative z-10">
        {/* Back button */}
        <button
          onClick={() => router.push('/')}
          className="fixed top-8 left-8 z-50 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300"
        >
          ← Back to Portfolio
        </button>

        {/* Contact Form */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-2xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h1>
            <p className="text-gray-300 text-center mb-12 max-w-md mx-auto">
              Interested in working together? Fill out the form and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="text-center mt-8 text-gray-400">
              <p>Or email me directly at: <span className="text-white">fahadfarhaan9@email.com</span></p>
            </div>
          </div>
        </section>


      </div>
    </main>
  );
}