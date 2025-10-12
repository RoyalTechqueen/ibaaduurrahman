"use client";

import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "Male",
    age: "",
    country: "",
    platform: "WhatsApp",
    duration: "30 mins",
    frequency: "2x per week",
    experience: "",
    guardian: "",
    whatsapp: "",
    email: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Send formData to Supabase or email
    console.log("Application submitted:", formData);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Thank you for applying!
        </h2>
        <p className="text-gray-700">
          Our admin will reach out to you soon, In shaa Allah.
        </p>
      </div>
    );
  }

  return (
    <div className="font-sans">
          <Header />
        <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white p-8 py-24 rounded-2xl shadow-md space-y-6 mb-8"
    >
      <h2 className="text-2xl font-bold text-green-800 text-center mb-6">
        Apply for Ibaadur Rahman Online Qur&apos;an Classes
      </h2>

      {/* Full Name */}
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300"
      />

      {/* Gender & Age */}
      <div className="flex flex-col md:flex-row gap-4">
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300"
        />
      </div>

      {/* Country */}
      <input
        type="text"
        name="country"
        placeholder="Country of Residence"
        value={formData.country}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300"
      />

      {/* Platform & Duration */}
      <div className="flex flex-col md:flex-row gap-4">
        <select
          name="platform"
          value={formData.platform}
          onChange={handleChange}
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300"
        >
          <option value="WhatsApp">WhatsApp</option>
          <option value="Telegram">Telegram</option>
          <option value="Zoom">Zoom</option>
          <option value="Google Meet">Google Meet</option>
        </select>

        <select
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300"
        >
          <option value="30 mins">30 Minutes</option>
          <option value="1 hour">1 Hour</option>
        </select>
      </div>

      {/* Frequency */}
      <select
        name="frequency"
        value={formData.frequency}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300"
      >
        <option value="2x per week">2x per week</option>
        <option value="3x per week">3x per week</option>
      </select>

      {/* Previous Experience */}
      <textarea
        name="experience"
        placeholder="Previous Qur’an Learning Experience"
        value={formData.experience}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300"
        required
      />

      {/* Guardian Name */}
      <input
        type="text"
        name="guardian"
        placeholder="Guardian’s Name (if under 18)"
        value={formData.guardian}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300"
      />

      {/* WhatsApp & Email */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="whatsapp"
          placeholder="WhatsApp Number"
          value={formData.whatsapp}
          onChange={handleChange}
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300"
        />
      </div>

      {/* Additional Notes */}
      <textarea
        name="notes"
        placeholder="Additional Notes (optional)"
        value={formData.notes}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
      >
        Apply Now
      </button>
    </form>
    <Footer />
    </div>
    
  );
}
