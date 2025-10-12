"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";


export default function HomePage() {
  return (
    <div className="font-sans text-gray-700 ">
      <Header />
      {/*  Hero  */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-gradient-to-b from-green-700 via-green-300 to-white px-6 pt-24 md:pt-32">
      {/* Left Side: Text */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug text-gray-900">
          Embark on a Blessed Journey with the Qur’an
        </h1>
        <p className="mt-4 text-lg text-gray-800">
          Learn, recite, and memorize the Qur’an from the comfort of your home 
          guided by qualified teachers dedicated to your spiritual growth.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-center">
         <Link
            href="https://forms.gle/sejfcbbV72JRCY6x7"
            target="_blank"
            className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all duration-300"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <Image
          src="/hero.png" // 👉 replace with your actual image in /public
          alt="Qur’an Learning"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg object-cover"
          priority
        />
      </div>
    </section>

      {/* 🌿 About Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-10">
          {/* Image */}
          <div className="">
            <Image
              src="/about.jpg"
              alt="Qur'an learning"
              width={500}
              height={100}
              className="rounded-lg shadow-md w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-gray-700 flex flex-col justify-start">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              About Ibaadur Rahman Academy
            </h2>
            <p className="leading-relaxed mb-4">
              Ibaadur Rahman Academy is a faith-driven online Qur’an
              memorization platform built on sincerity, structure, and
              connection. We believe every Muslim — child, youth, or adult —
              deserves access to authentic Qur’anic learning, no matter where
              they are.
            </p>
            <p className="leading-relaxed mb-6">
              Our classes combine traditional hifz methods with the flexibility
              of modern technology, creating a supportive environment where
              students memorize, revise, and grow spiritually — one verse at a
              time.
            </p>

            {/* Read More Button */}
            <Link
              href="/about"
              className="self-start  text-green-700 underline  font-medium "
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* 💡 How It Works */}
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-r from-green-50 via-white to-yellow-50 text-center px-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              step: "1",
              title: "Register",
              text: "Fill out our simple registration form and tell us about your goals.",
            },
            {
              step: "2",
              title: "Get Matched",
              text: "You will be matched to a tutor based on your selected class schedule.",
            },
            {
              step: "3",
              title: "Start Learning",
              text: "Join your online class via Zoom or Google Meet with your tutor.",
            },
            {
              step: "4",
              title: "Track Progress",
              text: "Track progress via CAs and exams to monitor your improvement.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-yellow-400"
            >
              <div className="text-green-700 text-3xl font-bold mb-2">
                {item.step}.
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📚 Programs Preview */}
      <section className="py-20 bg-green-50 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Hifz (Memorization)",
              text: "Step-by-step memorization with focus on accuracy, Tajweed, and fluency.",
            },
            {
              title: "Recitation & Tajweed",
              text: "Learn correct pronunciation, articulation, and tone guided by expert tutors.",
            },
            {
              title: "Revision & Fluency",
              text: "Perfect for existing memorizers who want to maintain and strengthen retention.",
            },
          ].map((program, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition border-t-4 border-yellow-400"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600">{program.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌙 CTA Section */}
      <section className="py-20 bg-gradient-to-r from-white to-green-600 text-center text-black px-6">
        <h2 className="text-3xl font-bold mb-4">
          Begin Your Qur’an Journey Today
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Whether you’re a beginner or revising your Hifz, our flexible online
          classes make it easy to learn and stay consistent.
        </p>
        <Link
            href="https://forms.gle/sejfcbbV72JRCY6x7"
            target="_blank"
            className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all duration-300"
          >
            Apply Now
          </Link>
      </section>
      {/* 🌾 Footer */}
      <Footer />
    </div>
  );
}
