"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-white to-gray-50 text-gray-800 dark:from-gray-900 dark:to-black dark:text-gray-100">
      {/* Header / Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={80}
            height={80}
            className="mx-auto mb-6 rounded-2xl shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            PT Visionary Tech Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Innovating the future through technology, creativity, and
            sustainability. Empowering businesses to grow smarter.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <a
              href="#about"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Founded in 2020, PT Visionary Tech Solutions is a Bali-based
            technology company specializing in IoT, cloud systems, and AI-driven
            innovation. Our mission is to create digital ecosystems that connect
            people, devices, and ideas seamlessly.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "IoT Solutions",
                desc: "Smart devices and sensor integration for modern enterprises.",
              },
              {
                title: "AI Personalization",
                desc: "Enhancing customer experience with intelligent automation.",
              },
              {
                title: "Cloud Infrastructure",
                desc: "Reliable, scalable, and secure systems built for growth.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Have a project in mind? Let’s collaborate.
          </p>
          <a
            href="mailto:hello@visionarytech.id"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            hello@visionarytech.id
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} PT Visionary Tech Solutions. All rights
        reserved.
      </footer>
    </main>
  );
}
