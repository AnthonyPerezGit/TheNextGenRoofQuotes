import { useEffect } from "react";
import "../styles/globals.css";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/nextgenroofquotes/30min",
          parentElement: document.getElementById("calendly-container"),
          prefill: {},
          utm: {}
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      <header className="sticky top-0 bg-white shadow z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <img src="/GEN.png" alt="NextGen Logo" className="h-12" />
          <a
            href="#calendly-container"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Book a Call
          </a>
        </div>
      </header>

      <section className="text-center px-6 pt-20 pb-12">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-800">NextGen Roof Quotes</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          AI-powered instant quotes. Automated follow-ups. More booked jobs.
        </p>
        <a
          href="https://form.jotform.com/251025584155050"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white py-3 px-6 rounded-xl text-lg shadow hover:bg-green-700 transition"
        >
          Get Your Instant Roof Quote
        </a>
      </section>

      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to try it free?</h2>
        <p className="mb-6 text-lg text-gray-600 max-w-xl mx-auto">
          Let us set it all up for you. Try NextGen Roof Quotes free for 5 days — no strings attached.
        </p>
        <a
          href="mailto:nextgenroofquotes@gmail.com"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-xl text-lg shadow hover:bg-blue-700 transition"
        >
          Get Started with Your Free Trial
        </a>
      </section>

      <section className="bg-blue-100 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Book Your Setup Call</h2>
          <div id="calendly-container" className="shadow-lg rounded-xl overflow-hidden" style={{ minWidth: "320px", height: "630px" }}></div>
        </div>
      </section>
    </div>
  );
}
