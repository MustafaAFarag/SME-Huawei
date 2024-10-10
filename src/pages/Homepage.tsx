import Hero from '../features/Homepage/Hero';
import MainNav from '../features/Homepage/MainNav';
import Logo from '../ui/Logo';

function Homepage() {
  return (
    <>
      <header className="bg-background z-50 flex w-full items-center justify-between px-20 py-4">
        <Logo />
        <MainNav />
      </header>
      <Hero />
    </>
  );
}

export default Homepage;
