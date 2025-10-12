"use client";

import Header from "../components/header";
import Footer from "../components/footer";

export default function ClassStructure() {
  const structures = [
    {
      platform: "WhatsApp / Telegram",
      details: [
        {
          title: "30 Minutes – Twice a Week",
          description:
            "Ideal for beginners or young learners who prefer shorter but consistent sessions. Focuses on steady memorization and Tajweed basics.",
        },
        {
          title: "30 Minutes – Three Times a Week",
          description:
            "Balanced plan for learners aiming to improve fluency and memorization at a moderate pace.",
        },
        {
          title: "1 Hour – Twice a Week",
          description:
            "Perfect for learners who prefer longer classes for deeper recitation practice and revision.",
        },
        {
          title: "1 Hour – Three Times a Week",
          description:
            "A structured plan for serious learners progressing through the Qur’an more quickly.",
        },
      ],
      note: "Conducted via audio calls, or video calls.",
    },
    {
      platform: "Zoom / Google Meet",
      details: [
        {
          title: "30 Minutes – Twice a Week",
          description:
            "Interactive live classes with real-time correction and Tajweed demonstration.",
        },
        {
          title: "30 Minutes – Three Times a Week",
          description:
            "Balanced schedule combining memorization and Tajweed refinement with teacher interaction.",
        },
        {
          title: "1 Hour – Twice a Week",
          description:
            "Comprehensive sessions including recitation, revision, and correction in detail.",
        },
        {
          title: "1 Hour – Three Times a Week",
          description:
            "Best for advanced students or those working toward complete memorization with full supervision.",
        },
      ],
      note: "Conducted through video calls.",
    },
  ];

  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-8">
          Class Structure & Platforms
        </h1>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-14 leading-relaxed">
          Ibaadur Rahman offers flexible learning plans through different platforms
          and schedules — designed to fit your time, pace, and comfort. <br />
        </p>
        <div className="text-center">
 <h2 className="text-2xl font-semibold text-green-700 mb-3">
            Schedule & Timing
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Weekday Evening Classes (Monday – Thursday)</li>
            <li>Weekend Classes (Friday – Sunday, morning, afternoon or evening)</li>
          </ul>

        </div>
       
        <div className="space-y-16">
          {structures.map((platform, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-green-100 transition-all hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center md:text-left">
                {platform.platform}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {platform.details.map((item, i) => (
                  <div
                    key={i}
                    className="bg-green-50 hover:bg-green-100 transition-all rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-green-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-600 italic mt-6 text-center md:text-left">
                💡 {platform.note}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="/pricing"
            className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all duration-300 shadow"
          >
            View Pricing
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
