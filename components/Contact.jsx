export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[500px] bg-[#cbd9da] px-6 py-14 text-[#172536] md:px-10 lg:px-16"
    >
      <div className="mx-auto grid min-h-[400px] max-w-[1160px] items-center gap-16 lg:grid-cols-2 lg:gap-20">
        
        
        <div>
          <h2 className="max-w-[520px] text-[40px] font-semibold leading-[1.3] tracking-[-1px] md:text-[43px]">
            Let’s talk about how
            <br />
            digital initiatives can
            <br />
            transform your business
          </h2>

          <p className="mt-4 max-w-[520px] text-[16px] leading-[1.7]">
            We’ll happily assist in exploring what will work best for you. Like,
            <br className="hidden md:block" />
            really best.
          </p>
        </div>

        
        <div className="w-full max-w-[395px] lg:ml-auto">
          <h3 className="mb-5 text-[28px] font-medium leading-none">
            Schedule Meeting
          </h3>

          <form className="space-y-8">
            <input
              type="email"
              placeholder="Email"
              className="h-[70px] w-full rounded-[6px] border border-[#526b82] bg-white px-5 text-[17px] text-[#172536] outline-none placeholder:text-[#172536] focus:border-[#172536]"
            />

            <input
              type="text"
              placeholder="Name"
              className="h-[70px] w-full rounded-[6px] border border-[#526b82] bg-white px-5 text-[17px] text-[#172536] outline-none placeholder:text-[#172536] focus:border-[#172536]"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="h-[120px] w-full resize-none rounded-[6px] border border-[#526b82] bg-white px-5 py-4 text-[17px] text-[#172536] outline-none placeholder:text-[#172536] focus:border-[#172536]"
            />

            <button
              type="submit"
              className="h-[50px] w-[123px] rounded-full bg-[#172536] text-[16px] font-semibold text-white transition hover:bg-[#26384d]"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}