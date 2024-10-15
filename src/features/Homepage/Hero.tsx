import Button from '../../ui/Button';

function Hero() {
  return (
    <section className="relative h-[80vh]">
      <div className="absolute inset-0">
        <video
          src="./hero-video.mp4"
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="text-ddf2fd relative z-10 flex h-full flex-col justify-center bg-black bg-opacity-50 p-6 md:flex-row md:items-center md:justify-center md:p-12 md:text-center">
        <div className="items-center md:w-1/2">
          <h1 className="mb-4 font-heading text-4xl font-bold text-white md:text-5xl">
            Transform Your Supply Chain with AI
          </h1>
          <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
            Unlock Efficiency and Growth for SMEs
          </h2>
          <p className="mb-6 text-lg text-white">
            Discover how our AI-powered solutions can revolutionize your supply
            chain management, optimize your inventory, and predict market demand
            like never before.
          </p>
          <Button label="Start Optimizing" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
