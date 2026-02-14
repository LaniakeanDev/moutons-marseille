
import About from "./components/about";
import Slider from "./components/slider";
import Activities from "./components/activities";
import Partners from "./components/partners";
import Contact from "./components/contact";

export default function Home() {
  const slides: ISlide[] = [
    {
      type: "image",
      img: {
        src: "/assets/slides/main.png",
        alt: "Moutons Marseillais"
      }
    },
    {
      type: "image",
      img: {
        src: "/assets/slides/transhumance.jpeg",
        alt: "Transhumance"
      }
    },
    {
      type: "image",
      img: {
        src: "/assets/slides/logo-board.png",
        alt: "Logos des partenaires"
      }
    }
  ]
  return (
    <main>
      <Slider slides={slides} className="w-full h-[80vh]" autoPlay />
      <About className="my-40" />
      <Activities />
      <Partners className="my-40" />
      <Contact className="mb-40" />
    </main>
  );
}
