import React from 'react';

const team = [
  {
    name: 'Ashwin',
    image: 'images/section3/img1.jpg', // replace with correct path
    linkedInUrl: 'https://www.linkedin.com/in/ashwin',
    description: `Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.`,
    vision: `Ashwin’s vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.`,
  },
  {
    name: 'Nicole',
    image: 'images/section3/img2.avif', // replace with correct path
    linkedInUrl: 'https://www.linkedin.com/in/nicole',
    description: `Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.`,
    vision: `With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.`,
  },
];

const Section3 = () => {
  return (
    <section className="w-full flex py-16 px-6 bg-gradient-to-b from-[#030615] to-[#0335B4] text-white flex-col">
      <h2 className=" pl-20 mb-12 items-start font-dm-sans font-medium text-[32px]">About Us</h2>

      <div className="flex flex-col gap-20 max-w-6xl w-full mx-auto">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
          >
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full object-cover"
              />
              <a
                href={member.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 bg-white text-black rounded-full p-2 hover:scale-105 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zm7.5-17h4.7v2.5h.1c.7-1.3 2.5-2.6 5.2-2.6 5.5 0 6.5 3.6 6.5 8.3V24h-5V15c0-2.1 0-4.7-2.9-4.7-2.9 0-3.3 2.3-3.3 4.5V24h-5V7z" />
                </svg>
              </a>
            </div>

            <div className="text-left max-w-xl">
              <p className="mb-4">
                <span className="font-bold">{member.name}</span> {member.description}
              </p>
              <p className='font-dm-sans font-normal text-[18px] mt-4'>{member.vision}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4">
        <a
          href="#"
          className="text-sm underline underline-offset-4 hover:text-blue-300 transition"
        >
          Learn more about our Board of Advisors ↗
        </a>
        <a
          href="#"
          className="text-sm underline underline-offset-4 hover:text-blue-300 transition"
        >
          Follow us on our LinkedIn page ↗
        </a>
      </div>
    </section>
  );
};

export default Section3;
