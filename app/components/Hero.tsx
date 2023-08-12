"use client";
import React, { useState } from "react";

interface NewModalProps {
  toggleModal: () => void;
}

// Create a new component for the new modal
const NewModal: React.FC<{ toggleModal: () => void }> = ({ toggleModal }) => {
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  const handlePayNowClick = () => {
    const publicKey = "pk_test_4eec4b9a8b1a0d5c10b4af29a54a121b39d9e28d"; // Replace with your Paystack public key
    const email = "user@example.com"; // Replace with the user's email
    const amount = 150000 * 100; // Convert amount to kobo

    if ((window as any).PaystackPop) {
      const handler = (window as any).PaystackPop.setup({
        key: publicKey,
        email,
        amount,
        onClose: () => {
          setPaymentStatus("closed");
        },
        callback: (response: any) => {
          console.log("Payment successful", response);
          setPaymentStatus("success");
        },
      });

      handler.openIframe();
    } else {
      console.error("Paystack SDK is not available.");
    }
  };

  return (
    <div className="fixed  inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white z-50 p-6 rounded-lg shadow-md max-w-md">
        <h2 className="text-lg font-semibold mb-4">New Modal Content</h2>
        <div className="w-full px-4 mb-8">
          <a
            className="group block max-w-sm mx-auto md:max-w-none h-full border border-gray-100 bg-white rounded-xl transform hover:scale-105 transition duration-500"
            href="#"
          >
            <div className="flex items-center justify-between px-4 py-5">
              <span className="text-sm">Onis Hostel</span>
              <img
                src="https://shuffle.dev/saturn-assets/images/instagram-photos/icon-instagram.svg"
                alt=""
              />
            </div>
            <div className="h-72">
              <img
                className="block w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkor7xs5oTiwEeQOldZYQBW_MFjaJ_xCe_gg&usqp=CAU"
                alt=""
              />
            </div>
            <div className="px-4 pt-4 pb-5">
              <span className="block text-sm tetx-gray-800 mb-2.5">
                Selfcon - toilet - bathroom -kitchen
              </span>
              <div className="flex items-center">
                <img className="mr-1.5 h-6 w-6" src="/naira.png" alt="" />
                <span className="text-sm text-gray-500">150,000/ year</span>
              </div>
            </div>
          </a>
          <button
            className="group mt-2 block max-w-sm p-2 mx-auto md:max-w-none h-full border border-green-500 bg-white rounded-xl transform hover:scale-105 transition duration-500"
            onClick={handlePayNowClick}
          >
            Pay Now
          </button>
        </div>
        <button
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={toggleModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

interface SecondModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  name: string; // Add the name prop
}

const SecondModal: React.FC<SecondModalProps> = ({
  isOpen,
  toggleModal,
  name,
}) => {
  const [showNewModal, setShowNewModal] = useState(false); // State for new modal visibility

  if (!isOpen) {
    return null;
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // ... Your form submission logic ...

    // Show the new modal
    setShowNewModal(true);
  };

  return (
    // ... Second modal content ...
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 w-full rounded-lg shadow-md max-w-md">
        <h2 className="text-lg font-semibold mb-4">Welcome, {name}!</h2>
        {/* ... Second modal content ... */}
        {/* Interactive map */}
        {/* <div
          ref={mapRef}
          className="z-8"
          style={{ width: "100%", height: "300px" }}
        /> */}
        <form onSubmit={handleFormSubmit}>
          <div className="flex justify-center items-center">
            <div className=" px-4 py-2 mb-2">
              <label className="block mb-1 text-sm font-medium" htmlFor="">
                What location are you looking at?
              </label>
              <input
                className="py-2 px-4  text-gray-500 placeholder-gray-500 bg-gray-50 bg-opacity-40 border border-gray-200 focus:border-green-500 rounded-lg outline-none ring ring-transparent focus:ring-green-500"
                type="place"
                placeholder="location"
                required
              />
            </div>
          </div>
          <button
            className="group relative flex items-center justify-center px-5 h-12 w-full mb-2 text-base font-semibold text-white bg-gradient-to-br from-green-800 to-cyan-800 rounded-lg transition-all duration-300"
            type="submit"
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-green-300 animate-pulse group-hover:ring-0 transition duration-300" />
            <span>Submit</span>
          </button>
        </form>

        <button
          className="mt-4 px-4 py-2  text-red-500 rounded-md"
          onClick={toggleModal}
        >
          Close
        </button>
      </div>
      {showNewModal && (
        /* Render the new modal here */
        <NewModal toggleModal={() => setShowNewModal(false)} />
      )}
    </div>
  );
};

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, toggleModal }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Save the name and phone number to local storage
    localStorage.setItem("name", name);
    localStorage.setItem("phoneNumber", phoneNumber);

    // Close the modal
    toggleModal();

    setShowSecondModal(true);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-wrap -mx-4 mb-8 items-center">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label className="block mb-1 text-sm font-medium" htmlFor="">
                Name
              </label>
              <input
                className="py-2 px-4 h-11 w-full text-gray-500 placeholder-gray-500 bg-gray-50 bg-opacity-40 border border-gray-200 focus:border-green-500 rounded-lg outline-none ring ring-transparent focus:ring-green-500"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label className="block mb-1 text-sm font-medium" htmlFor="">
                Phone number
              </label>
              <div className="flex h-11 bg-gray-50 bg-opacity-40 border border-gray-200 rounded-md">
                <div className="relative">
                  <select
                    className="relative z-10 pl-3 pr-6 w-full h-full bg-transparent focus:outline-none appearance-none cursor-pointer"
                    name=""
                    id=""
                  >
                    <option value="">US</option>
                    <option value="">GB</option>
                    <option value="">EU</option>
                  </select>
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="#6C7F73"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <input
                  className="py-2 pl-2 max-w-md pr-4 h-full text-gray-500 placeholder-gray-500 border-0 bg-transparent focus:outline-none"
                  type="text"
                  placeholder="080"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <button
            className="group relative flex items-center justify-center px-5 h-12 w-full mb-8 text-base font-semibold text-white bg-gradient-to-br from-green-800 to-cyan-800 rounded-lg transition-all duration-300"
            type="submit"
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-green-300 animate-pulse group-hover:ring-0 transition duration-300" />
            <span>Submit</span>
          </button>
          <p className="text-sm text-gray-500">
            <span className="mr-1">
              We process your information in accordance with our
            </span>
            <a
              className="inline-block font-semibold text-green-700 hover:text-green-600"
              href="#"
            >
              Privacy Policy
            </a>
          </p>
        </form>

        <button
          className="mt-4 px-4 py-2  text-red-500 rounded-md"
          onClick={toggleModal}
        >
          Close
        </button>
      </div>
      {showSecondModal && (
        <SecondModal
          isOpen={showSecondModal}
          toggleModal={() => setShowSecondModal(false)}
          name={name} // Pass the name as a prop
        />
      )}
    </div>
  );
};

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <section className="relative">
      <img
        className="absolute top-0 left-0 w-full h-full"
        src="https://shuffle.dev/aurora-assets/headers/green-blur-bg-circle.png"
        alt=""
      />
      <div className="relative pt-5 ">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl xl:px-5 mb-14 mx-auto text-center">
            <a
              className="group relative inline-flex mb-6 items-center rounded-full shadow-md overflow-hidden"
              href="#"
            >
              <div className="animate-showLine absolute bottom-0 left-1/2 transform -translate-x-1/2 p-px mx-auto w-auto bg-gradient-to-r from-transparent via-green-500 to-transparent group-hover:via-teal-600" />
              <div className="flex flex-wrap sm:flex-nowrap items-center px-6 sm:px-4 py-4 sm:py-2 bg-white group-hover:bg-green-50 transition duration-300 rounded-full">
                <span className="text-sm">Discover Your Perfect Hostel!.</span>
                <div className="mt-1 sm:mt-0 mx-auto sm:mr-0 sm:ml-2 flex items-center">
                  <span className="mr-3 inline-block text-transparent bg-clip-text bg-gradient-to-b font-bold from-green-500 via-green-500 to-teal-400 group-hover:from-cyan-400 group-hover:via-cyan-700 group-hover:to-cyan-600">
                    Read more
                  </span>
                  <span className="group-hover:hidden">
                    <svg
                      width={11}
                      height={10}
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.00004 5H9.33337M9.33337 5L5.33337 1M9.33337 5L5.33337 9"
                        stroke="url(#paint0_linear_3112_14890)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_3112_14890"
                          x1="9.46358"
                          y1="-1.5"
                          x2="5.46163"
                          y2="9.11123"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#ACE348">
                            <stop offset={1} stopColor="#25ACA0" />
                          </stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="hidden group-hover:block">
                    <svg
                      width={11}
                      height={10}
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.00004 5H9.33337M9.33337 5L5.33337 1M9.33337 5L5.33337 9"
                        stroke="#25ACA0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
            <div className="max-w-lg sm:max-w-xl lg:max-w-none mx-auto">
              <h1 className="font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Book Your Home Away from Home Now.
              </h1>
              <p className="max-w-lg mx-auto text-lg text-gray-700 mb-10">
                Experience Comfort and Convenience with Our Hostel Allocation
                System!.
              </p>
              <a
                className="group relative flex xs:inline-flex items-center justify-center px-5 h-12 font-bold text-white bg-gradient-to-br from-green-800 to-cyan-800 rounded-lg transition-all duration-300"
                href="#"
                onClick={toggleModal}
              >
                <div className="absolute top-0 left-0 w-full h-full rounded-lg ring-4 ring-green-300 animate-pulse group-hover:ring-0 transition duration-300" />
                <span className="mr-3">Book Now</span>
                <span className="transform group-hover:translate-x-1 transition duration-100">
                  <svg
                    width={7}
                    height={12}
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 6L1 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
            </div>
          </div>
          <img
            className="block mx-auto rounded-lg h-64 w-full object-none object-top"
            src="/1.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
