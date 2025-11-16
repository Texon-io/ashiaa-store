import AboutSec from "../organisms/AboutSec";
import HeroSec from "../organisms/HeroSec";

function HomePage() {
  return (
    <div>
      <HeroSec />
      <AboutSec />
      <section id="quote" className="bg-fuchsia-500 p-8 rounded-4xl shadow-md">
        <div className="container text-center backdrop-blur-xs bg-white/10 border border-white/30 shadow-xl rounded-3xl mx-auto px-6 sm:px-16 py-8 w-fit">
          <q className="font-reqaa text-4xl text-accent-dark-2">
            القراءة حياةٌ إضافية لمن لا يكتفون بحياتهم.
          </q>
          <p className="text-lg font-medium mt-3">— أحمد خالد توفيق —</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
