"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-24 text-gray-700">
        {/* 🕌 Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src="/logo.jpg"
              alt="Ibaadur Rahman Qur’an Academy"
              width={700}
              height={500}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-green-800 mb-4 leading-snug">
              About Ibaadur Rahman Center for Qur’an Memorization
            </h1>
            <p className="leading-relaxed mb-4">
              <strong>Ibaadur Rahman</strong> is a faith-driven online Qur’an
              learning platform dedicated to helping Muslims worldwide connect
              deeply with the Book of Allah — through memorization, recitation,
              and reflection. Our goal is to make Qur’an learning accessible,
              structured, and spiritually fulfilling for everyone, regardless of
              age or location.
            </p>
            <p className="leading-relaxed">
              Founded upon sincerity, discipline, and mentorship, the academy
              provides a nurturing environment for learners to progress at their
              own pace under the guidance of qualified tutors. Whether you’re
              just beginning your hifz journey or revising what you’ve
              memorized, <strong>Ibaadur Rahman</strong> walks with you — verse
              by verse.
            </p>
          </div>
        </div>

        {/* 🌿 Vision & Mission */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-green-700 mb-4 text-center">
            Our Vision & Mission
          </h2>
          <p className="leading-relaxed text-gray-700">
            Our vision is to cultivate a generation of Muslims who carry the
            Qur’an in their hearts and live by its guidance. Through personalized
            one-on-one sessions and flexible schedules, we aim to make Qur’an
            memorization achievable for students of all backgrounds — merging
            traditional hifz excellence with the convenience of modern
            technology.
          </p>
        </section>

        {/* 📘 Class Structure & Learning Experience */}
        <section>
          <h2 className="text-3xl font-bold text-green-800 text-center mb-10">
            Class Structure & Learning Experience
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12">
            At <strong>Ibaadur Rahman</strong>, each class is designed to fit
            your pace and schedule — whether you’re starting your journey with
            the Qur’an or refining your Tajweed and memorization. Our
            one-on-one model ensures personalized attention, flexibility, and
            consistent spiritual growth.
          </p>
          </section>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Schedule */}
          <div className="bg-green-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-green-700 mb-3"> Schedule</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Weekday Evenings (Mon – Thurs)</li>
              <li>Weekend Classes (Fri – Sun)</li>
            </ul>
          </div>

          {/* Platforms */}
          <div className="bg-green-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-green-700 mb-3"> Platforms</h2>
            <p className="text-gray-700">
              Classes are one-on-one via <strong>WhatsApp, Telegram, Google Meet, or Zoom</strong>.
            </p>
          </div>

          {/* Curriculum */}
          <div className="bg-green-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-green-700 mb-3"> Curriculum</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Qur’an Recitation & Fluency</li>
              <li>Hifz (Memorization)</li>
              <li>Tajweed Rules</li>
            </ul>
          </div>

          {/* Age & Levels */}
          <div className="bg-green-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-green-700 mb-3"> Age & Levels</h2>
            <p className="text-gray-700">
              Open to <strong>males and females aged 6+</strong> — Beginner, Intermediate, and Advanced levels.
            </p>
          </div>

          {/* How It Works */}
          <div className="bg-green-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-green-700 mb-3"> How It Works</h2>
            <ul className="list-decimal list-inside text-gray-700 space-y-1">
              <li>Fill out the online form</li>
              <li>Get matched with a tutor</li>
              <li>Start your personalized journey</li>
              <li>Have regular asesments</li>
            </ul>
          </div>

          {/* Language */}
          <div className="bg-green-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-green-700 mb-3"> Teaching Language</h2>
            <p className="text-gray-700">
              Classes are primarily in English, with Arabic support where needed.
            </p>
          </div>
        </div>

        {/* 🌙 CTA */}
        <div className="text-center mt-20">
          <Link
            href="/pricing"
            className="bg-green-800 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            View Pricing & Payment Plans
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
