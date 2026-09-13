export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-100px)] overflow-hidden">
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)] w-full max-w-[1400px] items-center px-6 md:px-8 lg:px-14">
        <div className="w-full max-w-[720px] pb-16 md:pb-20">

          
          <h1 className="max-w-full text-[38px] font-bold leading-[1.12] tracking-[-1.5px] sm:text-[44px] md:text-[54px] lg:whitespace-nowrap lg:text-[60px]">
            AI development company
            <br />
            In India
          </h1>

          
          <p className="mt-7 w-full max-w-[520px] text-[14px] leading-6 text-gray-200 md:text-[15px]">
            One of the leading AI development companies in India with
            remarkable expertise in artificial intelligence solutions.
            Our forte in AI technologies spans diverse verticals like
            machine learning (ML).....
          </p>

         
          <button className="mt-8 rounded-full bg-white px-9 py-3 text-sm font-medium text-[#02091c] transition hover:bg-gray-200">
            Reach us
          </button>

        </div>
      </div>

      
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-gray-500" />
        <span className="h-2 w-2 rounded-full bg-gray-500" />
        <span className="h-2 w-2 rounded-full bg-gray-500" />
      </div>
    </section>
  );
}