export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white px-6 py-20 text-[#172536] md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[1250px]">

        <div className="text-center">
          <h2 className="text-[38px] font-semibold leading-tight md:text-[46px]">
            Our Recent AI Projects
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7">
            As one of India's leading AI development companies, SysAlly offers
            the following
            <br />
            services to businesses.
          </p>

          <div className="mx-auto mt-5 h-[2px] w-[93px] bg-[#35b8e8]" />
        </div>

        <div className="mt-11 grid grid-cols-1 gap-5 md:grid-cols-2">

          <div className="overflow-hidden rounded-[6px]">
            <img
              src="/images/project-1.jpg"
              alt="AI Project 1"
              className="h-[405px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-[6px]">
            <img
              src="/images/project-2.png"
              alt="AI Project 2"
              className="h-[405px] w-full object-cover"
            />
          </div>

        </div>

        <div className="mt-8 flex justify-center">
          <button
            className="rounded-full bg-[#172536] px-8 py-3 text-[14px] font-medium text-white transition hover:bg-[#26384d]"
          >
            View all projects
          </button>
        </div>

      </div>
    </section>
  );
}