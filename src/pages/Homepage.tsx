import Hero from '../features/Homepage/Hero';
import MainNav from '../features/Homepage/MainNav';
import Logo from '../ui/Logo';

function Homepage() {
  return (
    <>
      <header className="z-50 flex w-full items-center justify-between bg-background px-20 py-4">
        <Logo />
        <MainNav />
      </header>
      <Hero />

      <h1>Us Youtube Presenting </h1>

      <div>
        <h3>Netlify Composable Web Platform</h3>
        <p>
          Streamlined orchestration, simplified and unified workflows, and
          real-time updates across infrastructure, workflows, websites and teams
          — all supported by Enterprise-grade security, services, and a
          world-class partner ecosystem.
        </p>
      </div>

      <div>How it Works 3 Cards</div>
    </>
  );
}

export default Homepage;
