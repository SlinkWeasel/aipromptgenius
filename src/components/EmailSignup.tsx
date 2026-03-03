"use client";
import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/REPLACE_WITH_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus("success"); setEmail(""); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section id="email-signup" className="py-16 px-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-4xl mb-4">📬</div>
        <h2 className="text-3xl font-bold mb-3">Get new prompts every week</h2>
        <p className="text-indigo-200 mb-8 text-lg">Free. No spam. Just the best new AI prompts in your inbox.</p>
        {status === "success" ? (
          <div className="bg-white/20 rounded-2xl p-6">
            <div className="text-3xl mb-2">🎉</div>
            <p className="font-semibold text-lg">You are in!</p>
            <p className="text-indigo-200 text-sm mt-1">First batch coming soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-3 rounded-full text-gray-900 focus:outline-none text-base"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {status === "loading" ? "Joining..." : "Join Free"}
            </button>
          </form>
        )}
        {status === "error" && <p className="mt-3 text-red-300 text-sm">Something went wrong. Please try again.</p>}
        <p className="mt-4 text-indigo-300 text-xs">Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
