"use client";

import { useState } from "react";

export default function Services() {
  const [openService, setOpenService] = useState(0);

  const services = [
    {
      title: "Hyperparameter model tuning",
      description:
        "Our AI experts handle hyperparameter tuning, optimizing your unique machine-learning model optimization requirements. We identify the hyperparameters relevant to your algorithm and tune the values to yield the best performance of the machine learning model.",
    },
    {
      title: "AI Consultation",
      description:
        "Our AI experts provide consultation to help businesses identify the right artificial intelligence solutions for their requirements.",
    },
    {
      title: "NLP Solutions",
      description:
        "We develop natural language processing solutions that help businesses work with text, language, and intelligent communication systems.",
    },
    {
      title: "Custom AI Model Development",
      description:
        "We develop custom AI models based on your business requirements, data, workflow, and specific use cases.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white px-6 py-24 text-[#172235] md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">

        <div className="text-center">

          <h2 className="text-[38px] font-semibold leading-tight md:text-[46px] lg:text-[48px]">
            Our Artificial Intelligence Services
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-7 md:text-[16px]">
            As one of India's leading AI development companies, SysAlly offers
            the following services to businesses.
          </p>

          <div className="mx-auto mt-5 h-[2px] w-[82px] bg-[#38a9e0]" />

        </div>

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          <div className="flex items-center justify-center">

            <img
              src="/images/services-ai.png"
              alt="Artificial Intelligence Services"
              className="w-full max-w-[580px] object-contain"
            />

          </div>

          <div className="w-full max-w-[620px] lg:ml-auto">

            {services.map((service, index) => {

              const isOpen = openService === index;

              return (
                <div
                  key={service.title}
                  className={`rounded-lg bg-[#f7f7f7] ${
                    index !== 0 ? "mt-5" : ""
                  }`}
                >

                  <button
                    onClick={() =>
                      setOpenService(isOpen ? -1 : index)
                    }
                    className="flex w-full items-center justify-between px-7 py-7 text-left"
                  >

                    <h3 className="text-[18px] font-semibold md:text-[20px]">
                      {service.title}
                    </h3>

                    <span className="text-2xl">
                      {isOpen ? "⌄" : "›"}
                    </span>

                  </button>


                  {/* SERVICE DESCRIPTION */}
                  {isOpen && (
                    <div className="px-7 pb-7">

                      <p className="text-[14px] leading-6 md:text-[15px]">
                        {service.description}
                      </p>

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

        <div className="mt-14 flex justify-center">

          <button className="rounded-full bg-[#172235] px-8 py-4 text-[14px] font-medium text-white transition hover:bg-[#26344b]">
            View all services
          </button>

        </div>

      </div>
    </section>
  );
}