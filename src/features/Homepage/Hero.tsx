function Hero() {
  return (
    <section className="bg-background pb-[9.6rem] pt-[4.8rem]">
      <div className="mx-auto grid max-w-[130rem] grid-cols-2 items-center gap-[9.6rem] px-[3.2rem]">
        <div>
          <h1 className="text-primary text-6xl font-bold leading-tight">
            Streamline Your Supply Chain Management
          </h1>
          <p className="text-background-text mb-[4.8rem] text-2xl leading-relaxed">
            Optimize logistics and enhance efficiency for your business with our
            AI-driven solutions tailored for SMEs.
          </p>
          <a
            href="#cta"
            className="bg-accent hover:bg-primary mr-4 rounded-full p-4 text-white"
          >
            Get Started
          </a>
          <a
            href="#how"
            className="btn btn--outline text-primary hover:bg-background-text"
          >
            Learn More &darr;
          </a>
          <div className="mt-16 flex items-center gap-4">
            <div className="flex">
              <img
                src="./default-user.jpg"
                alt="Customer photo"
                className="-mr-[1.6rem] h-[4.8rem] w-[4.8rem] rounded-full border-4"
              />
              <img
                src="./default-user.jpg"
                alt="Customer photo"
                className="-mr-[1.6rem] h-[4.8rem] w-[4.8rem] rounded-full border-4"
              />
              <img
                src="./default-user.jpg"
                alt="Customer photo"
                className="-mr-[1.6rem] h-[4.8rem] w-[4.8rem] rounded-full border-4"
              />
              <img
                src="./default-user.jpg"
                alt="Customer photo"
                className="-mr-[1.6rem] h-[4.8rem] w-[4.8rem] rounded-full border-4"
              />
              <img
                src="./default-user.jpg"
                alt="Customer photo"
                className="-mr-[1.6rem] h-[4.8rem] w-[4.8rem] rounded-full border-4"
              />
              <img
                src="./default-user.jpg"
                alt="Customer photo"
                className="h-[4.8rem] w-[4.8rem] rounded-full border-4"
              />
            </div>
            <p className="text-background-text text-[1.8rem] font-semibold">
              <span className="text-primary font-bold">150+</span> Compaines
              Managed
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <img
            src="./logo-dark.png"
            className="w-full"
            alt="Supply Chain Management"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
