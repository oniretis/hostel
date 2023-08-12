import React from "react";

export const How = () => {
  return (
    <section className="py-12 ">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-24">
            <span className="inline-flex items-center h-6 mb-4 px-2 text-xs uppercase font-medium text-yellowGreen-700 bg-yellowGreen-200 rounded-full">
              HOW IT WORKS
            </span>
            <h1 className="font-heading tracking-tight text-4xl  font-bold">
              Find a hostel in 15 seconds
            </h1>
          </div>
          <div className="flex flex-wrap items-center -mx-4 mb-8">
            <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
              <button className="group flex items-start text-left p-4 rounded-xl bg-transparent hover:bg-gray-50 focus:outline-none transition duration-200">
                <div className="flex-shrink-0 inline-flex w-8 h-8 mr-3 items-center justify-center font-bold bg-gray-100 group-hover:bg-white rounded-full transition duration-200">
                  1
                </div>
                <p className="text-lg">
                  <span className="text-gray-900 font-bold">
                    Pick a location
                  </span>
                  <span className="text-gray-500">
                    - find a location anywhere around Ife or close to school.
                  </span>
                </p>
              </button>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
              <button className="group flex items-start text-left p-4 rounded-xl bg-gray-50 focus:outline-none transition duration-200">
                <div className="flex-shrink-0 inline-flex w-8 h-8 mr-3 items-center justify-center font-bold bg-white rounded-full transition duration-200">
                  2
                </div>
                <p className="text-lg">
                  <span className="text-gray-900 font-bold">
                    View the hostel
                  </span>
                  <span className="text-gray-500">
                    - We have a list of Hostels.
                  </span>
                </p>
              </button>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <button className="group flex items-start text-left p-4 rounded-xl bg-transparent hover:bg-gray-50 focus:outline-none transition duration-200">
                <div className="flex-shrink-0 inline-flex w-8 h-8 mr-3 items-center justify-center font-bold bg-gray-100 group-hover:bg-white rounded-full transition duration-200">
                  3
                </div>
                <p className="text-lg">
                  <span className="text-gray-900 font-bold">
                    Book Instantly
                  </span>
                  <span className="text-gray-500">
                    - Pick your sweet hostel.
                  </span>
                </p>
              </button>
            </div>
          </div>
          <img
            className="block w-full mx-auto"
            src="aurora-assets/how-it-works/image-center.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
