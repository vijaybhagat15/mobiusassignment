import React from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-blue-900"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M2.5 12.5L12 22l9.5-9.5a6.5 6.5 0 00-9.5-9.5 6.5 6.5 0 00-9.5 9.5z" />
      </svg>
    ),
    title: 'Tried, Tested, Trusted',
    description: 'Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-blue-900"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
      </svg>
    ),
    title: 'Real People, Real Help',
    description: 'A hands-on team that actually cares — guiding you through every twist in your career path.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-blue-900"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.3l6.2 3.7-1.6-7 5.4-4.7-7.2-.6L12 2 9.2 8.7l-7.2.6 5.4 4.7-1.6 7z" />
      </svg>
    ),
    title: 'Beat the Line',
    description: 'We search, shortlist, and apply for you, so your name shows up first — every single day.',
  },
];

const testimonials = [
  {
    name: 'Holly',
    description: (
      <>
        Holly is a <strong>senior executive</strong> who got over <strong>10 job interviews</strong> and an offer she accepted
      </>
    ),
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Example video URL
  },
  {
    name: 'Holly',
    description: (
      <>
        Holly is a <strong>senior executive</strong> who got over <strong>10 job interviews</strong> and an offer she accepted
      </>
    ),
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    name: 'Holly',
    description: (
      <>
        Holly is a <strong>senior executive</strong> who got over <strong>10 job interviews</strong> and an offer she accepted
      </>
    ),
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
];

const Section4 = () => {
  return (
<div className='px-6 font-dm-sans'>
<section className="w-full py-20 bg-white flex flex-col text-blue-700">
      <h2 className="text-blue-700 mb-12 font-dm-sans font-medium text-[32px] ">
        What our clients have to say
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-blue-700 text-white rounded-2xl overflow-hidden shadow-lg border-2 border-blue-700"
          >
            {/* Video Section */}
            <div className="flex-1 bg-blue-700  flex items-center justify-center">
              <video
                controls
                className="rounded-xl w-full h-48 object-cover"
                src={testimonial.videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Description */}
            <div className="p-6 flex flex-col gap-6">
              <p className="text-sm leading-relaxed">{testimonial.description}</p>

              <div className="flex justify-end">
                <button className="bg-white text-blue-600 rounded-full p-2 hover:scale-110 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 3l7 7-7 7v-4H3v-6h11V3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="flex flex-col md:flex-row gap-6 mt-16 items-center justify-center">
        <Link to="/get-started">
          <div className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-900 hover:text-white transition">
            More customer testimonials ↗
          </div>
        </Link>

        {/* Get Started Button */}
        <div>
          <Link to="/get-started">
            <button className="bg-white text-[#0649E7] font-semibold px-6 py-2 rounded-full hover:bg-blue-900 hover:text-white transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
        <section className="w-full  bg-slate-100 px-6 flex flex-col rounded-3xl">
        <h2 className="text-blue-700 mb-12 font-dm-sans font-medium text-[32px] ">
          Why Choose Us?
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-white p-8 rounded-2xl border border-blue-900 text-blue-900 gap-6 shadow-sm hover:shadow-md transition"
            >
              <div>{feature.icon}</div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
</div>  );
};

export default Section4;
