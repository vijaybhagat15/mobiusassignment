import React from "react";
import { ArrowRight } from "lucide-react"; // you can also use any other arrow icon
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const coachingPlans = [
  {
    title: "Resume Rebuild",
    description: "Crafted for senior to VP-level professionals ready for their next big step.",
    price: "$1000",
    billing: "one time",
    features: [
      "3× 30–min coaching",
      "Focused on storytelling, not just formatting",
      "Analyst + full application team on Pacific hours",
      "Tailored to your target industry, company, or role",
      "Direct work with our co–founder (ex–Google, JP Morgan)",
      "Executive coaching from UC Berkeley alum with 10+ yrs experience",
      "Resume Rebuild portfolio available upon request",
    ],
    button: "Get Started",
  },
  {
    title: "Interview Prep",
    description: "Two sessions to sharpen your story, confidence, and clarity — fast.",
    price: "$500",
    billing: "one time",
    features: [
      "2× 45–min live coaching with our co–founder",
      "Real–time, practical feedback",
      "Build clarity, empathy & executive presence",
      "For senior and leadership roles — technical & non–technical",
    ],
    button: "Get Started",
  },
];

export default function Section7() {
  return (
<>
<div className="py-16 px-4 bg-white text-blue-700 font-sora">
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className=" mb-2 font-medium text-[32px] ">
          Resume Building & Coaching 
        </h2>

        <p className="">
          Let’s talk about where you’re headed — and how your resume can get you there.{" "}
          <span className="font-semibold text-blue-700">Schedule a call to get started.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {coachingPlans.map((plan, idx) => (
          <div
            key={idx}
            className="border-2 border-blue-600 rounded-3xl p-8 flex flex-col hover:shadow-lg transition"
          >
              <h3 className="text-2xl font-semibold mb-2 relative">
                {plan.title}
              </h3>
            <p className="text-blue-700 mb-6">{plan.description}</p>
            <div className="text-4xl font-bold mb-2 border-b-2 border-gray-200 pb-5">
                {plan.price} <span className="text-blue-700 text-lg mb-6">{plan.billing}</span>
              </div>
              <div ></div>
            <ul className="text-left space-y-4 mb-6">
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
    </div>
        <div className="bg-blue-600 text-white rounded-2xl flex items-center justify-between p-16 max-w-5xl mx-auto my-16">
        <div className="flex flex-col">
          <span className="uppercase text-[24px] tracking-wide">Still have</span>
          <span className="uppercase text-[24px] tracking-wide">doubts?</span>
        </div>
        <h2 className="text-[40px] font-bold font-sora">Contact us</h2>
        <button className="bg-white text-blue-600 p-4 rounded-full hover:bg-gray-100 transition">
          <ArrowRight size={24} />
        </button>
      </div>
</>
  );
}
