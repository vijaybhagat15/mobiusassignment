import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const plans = [
  {
    title: "April Promo",
    price: "$35",
    per: "/week",
    features: [
      "Curated jobs from 1M+ listings, refreshed every 48 hours",
      "Up to 20 human-applied roles per week",
      "Add extra apps for just $1.5 each",
      "Your own dedicated application analyst",
      "Personalized with up to 10 filters & 5 job titles",
    ],
    button: "Get Started",
  },
  {
    title: "Starter",
    price: "$50",
    per: "/week",
    popular: true,
    features: [
      "All the perks of the Promo Plan, plus:",
      "Resume review & story–focused feedback",
      "Dedicated search specialist",
      "Up to 50 job apps/week",
      "Extra apps at $1.5 each",
      "Analyst support within 6 hours (SLA/PST hours)",
    ],
    button: "Get Started",
  },
  {
    title: "Plus",
    price: "$100",
    per: "/week",
    features: [
      "Everything in Starter, with more muscle:",
      "Up to 75 apps/week",
      "Apply to 15 job titles",
      "Analyst + full application team on Pacific hours",
    ],
    button: "Get Started",
  },
];

const advancePlan = {
  title: "Advance",
  price: "$150",
  per: "/week",
  features: [
    "Everything in Plus",
    "Custom Resumes & Cover Letters",
    "20 fully customized applications/week",
    "Help with complex job searches",
    "Access to senior resume experts, Founder & Exec Coaches",
  ],
  button: "Get Started",
};

export default function Section6() {
  return (
    <section className="py-16 px-20 bg-white font-dm-sans text-blue-700">
      <div className="max-w-7xl mx-auto">
      <h2 className=" mb-12 font-medium text-[32px] ">
        Job Application Service Plans
      </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="border-2 border-blue-600 rounded-3xl p-8 flex flex-col justify-center hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-4 relative">
                {plan.title}
                {plan.popular && (
                  <span className="absolute right-[-1rem] bg-blue-200 text-blue-700 text-xs px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </h3>
              <div className="text-4xl font-bold mb-2 border-b-2 border-gray-200 pb-5">
                {plan.price}<samp className="text-lg">{plan.per}</samp>
              </div>
              <ul className="text-left mb-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                  <span className="flex items-center justify-center w-5 h-5 text-white bg-green-500 rounded-full mr-2 mt-1">✓</span>
                  <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link to="/get-started">
                  <button className="hover:bg-white hover:text-[#0649E7] font-semibold px-6 py-2 rounded-full bg-blue-700 text-white transition bottom-0">
                    Get Started →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

{/* Advance Plan */}
<div className="mt-16 bg-[#0057FF] text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-10">
  <div className="w-full md:w-2/3">
    <h3 className="text-3xl font-semibold mb-2">{advancePlan.title}</h3>
    <p className="text-lg mb-4">Top-tier support for serious job hunters:</p>
    <div className="h-px w-full bg-white opacity-30 mb-6"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
      {advancePlan.features.map((feature, i) => (
        <div key={i} className="flex items-start">
        <span className="flex items-center justify-center w-5 h-5 text-white bg-green-500 rounded-full mr-2 mt-1">
          ✓
        </span>
          <span>{feature}</span>
        </div>
      ))}
    </div>
  </div>

  <div className="flex flex-col items-center md:items-end w-full md:w-auto">
    <div className="text-5xl font-bold">{advancePlan.price}</div>
    <div className="text-xl mb-6">{advancePlan.per}</div>

        {/* Get Started Button */}
        <div>
          <Link to="/get-started">
            <button className="bg-white text-[#0649E7] font-semibold px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition">
              Get Started →
            </button>
          </Link>
        </div>
  </div>
</div>

      </div>
    </section>
  );
}
