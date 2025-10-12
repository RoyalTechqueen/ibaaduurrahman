"use client";

import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function PricingPage() {
  const localPlans = [
    {
      platform: "WhatsApp / Telegram",
      sessions: [
        { title: "30 mins – 2x/week", monthly: "₦7,000", termly: "₦31,500" },
        { title: "30 mins – 3x/week", monthly: "₦9,000", termly: "₦40,500" },
        { title: "1 hour – 2x/week", monthly: "₦12,000", termly: "₦54,000" },
        { title: "1 hour – 3x/week", monthly: "₦17,000", termly: "₦76,500" },
      ],
    },
    {
      platform: "Zoom / Google Meet",
      sessions: [
        { title: "30 mins – 2x/week", monthly: "₦9,000", termly: "₦40,500" },
        { title: "30 mins – 3x/week", monthly: "₦12,000", termly: "₦54,000" },
        { title: "1 hour – 2x/week", monthly: "₦15,000", termly: "₦67,500" },
        { title: "1 hour – 3x/week", monthly: "₦20,000", termly: "₦90,000" },
      ],
    },
  ];

  return (
    <div className="font-sans">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-24">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Pricing & Payment Plans
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Flexible one-on-one Qur’an classes through your preferred platform.
            Choose a plan that suits your pace and schedule.
          </p>
        </div>

        {/* Local Students */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">
            Monthly & Termly Fees (Nigerian Residents)
          </h2>
          <p className="text-center mb-2">💡 Note: A term runs for 5 months</p>
          <div className="grid md:grid-cols-2 gap-10">
            {localPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-green-50 border border-green-100 rounded-2xl shadow-sm p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-green-800 mb-4">
                  {plan.platform}
                </h3>

                {/* Table Headers */}
                <div className="flex justify-between font-semibold border-b border-green-100 pb-2 mb-2">
                  <span>Class Structures</span>
                  <div className="flex gap-4">
                    <span>Monthly</span>
                    <span>Termly</span>
                  </div>
                </div>

                {/* Sessions */}
                <ul className="space-y-3 text-gray-700">
                  {plan.sessions.map((s, i) => (
                    <li
                      key={i}
                      className="flex justify-between border-b border-green-100 pb-2"
                    >
                      <span>{s.title}</span>
                      <div className="flex gap-4">
                        <span className="font-semibold">{s.monthly}</span>
                        <span className="font-semibold">{s.termly}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
        </section>

        {/* International Students */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            International Students
          </h2>
          <p className="text-gray-600 mb-6">
            Fees for international students vary due to timezone differences and
            live session preferences.
          </p>
          <p className="text-gray-700 font-semibold">
            Kindly{" "}
            <a
              href="https://wa.me/2349167489108"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline font-semibold"
            >
              contact us
            </a>{" "}
            to request the fee structure.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mt-12">
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
