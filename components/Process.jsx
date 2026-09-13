"use client";

import { useState } from "react";

export default function Process() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      number: "01",
      title: "Identifying The Problem",
      description:
        "The first step of building your custom AI solutions begins with identifying the problems or opportunities that the system can solve. Our team runs a thorough analysis to examine the pain points of the project and create a business case. Analyzing the current practices and data sets is necessary to identify areas for implementing automation and development.",
      image: "/images/process-1.jpg",
    },

    {
      number: "02",
      title: "Preparing The Data",
      description:
        "Preparing and organizing the required data is an important step in developing an effective artificial intelligence solution. Our experts analyze, clean and structure the available data.",
      image: "/images/process-2.jpg",
    },

    {
      number: "03",
      title: "The Suited AI Model",
      description:
        "Selecting the right AI model according to the project requirements helps achieve better performance and reliable results.",
      image: "/images/process-3.jpg",
    },

    {
      number: "04",
      title: "Training The Model",
      description:
        "The selected AI model is trained using the prepared data and continuously optimized to improve its performance.",
      image: "/images/process-4.jpg",
    },

    {
      number: "05",
      title: "Testing The Model",
      description:
        "The trained model is tested using different scenarios to ensure accuracy, reliability and consistent performance.",
      image: "/images/process-5.jpg",
    },

    {
      number: "06",
      title: "Deployment",
      description:
        "After successful testing, the AI solution is deployed and integrated into the required business environment.",
      image: "/images/process-6.jpg",
    },

    {
      number: "07",
      title: "Monitoring & Support",
      description:
        "The deployed AI solution is continuously monitored and supported to maintain reliable performance.",
      image: "/images/process-7.jpg",
    },
  ];

  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      id="process"
      className="bg-[#172536] px-6 py-16 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1250px]">

        <div className="text-center">

          <h2 className="text-[30px] font-medium leading-tight md:text-[34px] lg:text-[36px]">
            Our AI Development Process
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-[14px] leading-[1.75] text-white md:text-[15px]">
            Developing an AI solution according to your needs involves a
            structured approach to assure its success and effectiveness. Our
            expert AI developers ensure the project's success by following a
            systematic process in building your artificial intelligence
            solution.
          </p>

          <div className="mx-auto mt-5 h-[2px] w-[80px] bg-[#35b8e8]" />

        </div>

        <div className="mt-8 flex justify-end">

          <div className="flex items-center gap-3">

            <button
              onClick={previousSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-[16px] transition hover:bg-white hover:text-[#172536]"
              aria-label="Previous slide"
            >
              ←
            </button>

            <span className="px-1 text-[14px]">
              {currentSlide + 1}/7
            </span>

            <button
              onClick={nextSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-[16px] transition hover:bg-white hover:text-[#172536]"
              aria-label="Next slide"
            >
              →
            </button>

          </div>

        </div>

        <div className="relative mt-3 h-[2px] w-full bg-white/40">

          <div
  className={`absolute left-0 top-0 h-[2px] bg-white transition-all duration-500 ${
    currentSlide === 0
      ? "w-[14.28%]"
      : currentSlide === 1
      ? "w-[28.57%]"
      : currentSlide === 2
      ? "w-[42.85%]"
      : currentSlide === 3
      ? "w-[57.14%]"
      : currentSlide === 4
      ? "w-[71.42%]"
      : currentSlide === 5
      ? "w-[85.71%]"
      : "w-full"
  }`}
/>

        </div>

        <div className="grid grid-cols-2 gap-y-4 pt-5 md:grid-cols-4">

          {slides.slice(0, 4).map((item, index) => (
            <button
              key={item.title}
              onClick={() => setCurrentSlide(index)}
              className="text-left text-[15px] font-normal text-white transition md:text-[16px]"
            >
              {item.title}
            </button>
          ))}

        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-7 md:grid-cols-[1fr_1.25fr]">

          

          <div className="min-h-[210px] rounded-[5px] bg-white px-8 py-7 text-[#172536]">

            <div className="text-[15px] font-medium">
              {slide.number}
            </div>

            <p className="mt-4 max-w-[340px] text-[13px] leading-[1.75] md:text-[14px]">
              {slide.description}
            </p>

          </div>

          <div className="overflow-hidden rounded-[5px]">

            <img
              src={slide.image}
              alt={slide.title}
              className="h-[294px] w-full object-cover transition-all duration-500"
            />

          </div>

        </div>

      </div>
    </section>
  );
}