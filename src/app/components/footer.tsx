// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-semibold text-lg mb-3">
            Ibaadur Rahman Online Qur&apos;an Academy
          </h3>
          <p className="text-sm">
            Nurturing a generation connected to the Qur’an and Sunnah through
            flexible online learning.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/ " className="hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-300">
                About
              </a>
            </li>
            <li>
              <a href="/classes" className="hover:text-yellow-300">
                Classes
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-yellow-300">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-3">Contact</h4>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:ibaduurrahman01@gmail.com"
              className="text-white hover:underline"
            >
              ibaduurrahman01@gmail.com
            </a>
          </p>
          <p className="text-sm">
            WhatsApp:{" "}
            <a
              href="https://wa.me/2349167489108"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              +234 9167489108
            </a>
          </p>
        </div>
      </div>
      <div className="text-center mt-6 text-sm text-gray-300">
        © {new Date().getFullYear()} Ibaadur Rahman Online Qur&apos;an Academy.
        All rights reserved.
      </div>
    </footer>
  );
}
