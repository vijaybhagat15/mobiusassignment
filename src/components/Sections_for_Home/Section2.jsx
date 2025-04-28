import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Submit Intake Form',
  },
  {
    id: 2,
    title: 'We do the search and curation for list of jobs',
  },
  {
    id: 3,
    title: 'You approve, we do the tedious part (applying)',
  },
  {
    id: 4,
    title: 'You get the interviews',
  },
];

const Section2 = () => {
  return (
<>
  <h2 className="text-blue-700 mb-12 font-dm-sans font-medium text-[32px] pl-20">
    How we work?
  </h2>
    <section className="w-full py-16 bg-white flex flex-col items-center">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl w-full px-6">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 border-[1px] border-blue-700 rounded-full flex items-center justify-center text-2xl text-gray-900 font-bold mb-4">
              {step.id}
            </div>
            <div className="w-16 border-b-2 border-gray-900 mb-4"></div>
            <p className="text-blue-700 text-base">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Section2;
