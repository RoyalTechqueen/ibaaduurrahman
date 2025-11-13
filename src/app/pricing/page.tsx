"use client";

import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function PricingPage() {
  return (
    <div className="font-sans">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-24">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Pricing & Payment Plans
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our Qur’an memorization and recitation classes are flexible and
            personalized to suit your goals, schedule, and preferred platform.
            Kindly reach out to us to discuss your plan and get the current
            pricing details.
          </p>
        </div>

        
        <section className="bg-green-50 border border-green-100 rounded-2xl shadow-sm p-10 text-center mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            Request for a personalized plan
          </h2>
          <p className="text-gray-700 mb-6">
            Prices may vary depending on session frequency, duration, and
            platform (WhatsApp, Telegram, Zoom, or Google Meet).
          </p>
          <p className="text-gray-700 font-semibold">
            📞 Contact us on{" "}
            <a
              href="https://wa.me/2349167489108"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline font-semibold"
            >
              WhatsApp
            </a>{" "}
            to receive your fee structure and discuss your preferred class plan.
          </p>
        </section>

      
        <div className="text-center">
          <Link
            href="https://forms.gle/sejfcbbV72JRCY6x7"
            target="_blank"
            className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all duration-300"
          >
            Apply Now
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
